
const showPFP = (value) => document.getElementById("profilePic").style.display = value ? "unset" : "none"

function loadContactDetails(){
    const unscramble = s => atob(s.slice(0, Math.floor(s.length / 2.5)).split("").reverse().join("") + s.slice(Math.floor(s.length / 2.5)))
    const emailAddr = unscramble("B0bydWYsVGavdXRsb29rLmNvbQ==")
    const phoneNr = unscramble("TLzcDMk5OS05OTk5")

    const emailElem = document.getElementById("email")
    emailElem.textContent = emailAddr
    emailElem.href = "mailto:" + emailAddr
    
    const phoneElem = document.getElementById("phone")
    phoneElem.textContent = phoneNr
    phoneElem.href = "tel:" + phoneNr
}


// ============= LOAD CONTENT ===============

let hasFilledContent = false
function fillContentIfReady(){
    if(document.readyState === "loading") return
    if(typeof content === "undefined") return
    if(hasFilledContent) return
    hasFilledContent = true

    fillContent(document.body, content)
}

function fillContent(parent, obj){
    for(const key in obj){
        const value = obj[key]

        if(Array.isArray(value)) 
            fillArray(key, value)
        else if (typeof value == "string"){
            const elem = parent == document.body ? document.getElementById(key) : parent.querySelector("." + key)
            fillAttr(elem, value)
        } else
            fillContent(parent, value)
    }
}

function fillArray(name, jsonArr){
    const template = document.getElementById(name)
    const parent = template.parentElement

    for(const obj of jsonArr){
        const newElem = template.content.cloneNode(true)
        if(typeof obj == "string")
            fillAttr(newElem.firstChild, obj)
        else
            fillContent(newElem, obj)

        parent.appendChild(newElem)
    }
}


const fillAttr = (elem, value) => elem.textContent = value

// ============= RUN =============
fillContentIfReady()
loadContactDetails()