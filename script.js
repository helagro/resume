// =========== LOAD EMAIL AND PHONE NUMBER ============

const unscramble = s => atob(s.slice(0, Math.floor(s.length / 2.5)).split("").reverse().join("") + s.slice(Math.floor(s.length / 2.5)))

const emailAddr = unscramble("B0bydWYsVGavdXRsb29rLmNvbQ==")
const emailElem = document.getElementById("email")
emailElem.textContent = emailAddr
emailElem.href = "mailto:" + emailAddr

const phoneNr = unscramble("TLzcDMk5OS05OTk5")
const phoneElem = document.getElementById("phone")
phoneElem.textContent = phoneNr
phoneElem.href = "tel:" + phoneNr



// ========== TOGGLE SHOW IMAGES =========

function setShowImages(value){
    const images = document.getElementsByTagName("img")
    const displayValue = value ? "unset" : "none"

    for(const image of images){
        image.style.display = displayValue
    }
}

// ============= LOAD TEXT ===============


function loadText(){
    fetch('content/swedish.json')
        .then(response => response.json())
        .then(data => fillText(data))
}

function fillText(jsonObj){
    for(const key in jsonObj){
        const value = jsonObj[key]
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

loadText()