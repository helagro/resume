
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

    fillObj(document.body, content)
}


function fillObj(parent, obj){
    for(const key in obj){
        const value = obj[key]
        fillItem(parent, key, value)
    }
}

function fillArray(name, jsonArr){
    const template = document.getElementById(name)
    const parent = template.parentElement

    for(const obj of jsonArr){
        const newElem = template.content.cloneNode(true)
        fillItem(newElem, null, obj)
        parent.appendChild(newElem)
    }
}

function fillItem(parent, key, value){
    if (typeof value == "string")
        fillString(parent, key, value)
    else if(Array.isArray(value)) 
        fillArray(key, value)
    else
        fillObj(parent, value)
}

function fillString(parent, key, value){
    if(parent == document.body) 
        document.getElementById(key).textContent = value
    else if(key === null) //string in array
        parent.firstChild.textContent = value
    else // elem in obj in array
        parent.querySelector("." + key).textContent = value
}



// ============= RUN =============
fillContentIfReady()
loadContactDetails()