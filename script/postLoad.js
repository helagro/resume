
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

    fillContent()
}

function fillContent(){
    for(const key in content){
        const value = content[key]
        const isArray = Array.isArray(value)

        if(isArray){
            fillArray(key, value)
        } else{
            const elem = document.getElementById(key)
            elem.textContent = value
        }
    }
}

function fillArray(name, jsonArr){
    const template = document.getElementById(name)
    const parent = template.parentElement

    for(const item of jsonArr){
        const newElem = template.content.cloneNode(true)
        if(typeof item == "string") {
            newElem.firstChild.textContent = item
        } else{
            for(const key in item){
                const value = item[key]
                const elem = newElem.querySelector("." + key)
    
                elem.textContent = value
            }
        }

        parent.appendChild(newElem)
    }
}

// ============= RUN =============
fillContentIfReady()
loadContactDetails()