
function onBodyLoaded(){
    fillTextIfReady()
}


// =========== LOAD EMAIL AND PHONE NUMBER ============

const emailElem = document.getElementById("email")
emailElem.textContent = emailAddr
emailElem.href = "mailto:" + emailAddr

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




let fillTextWasRun = false
function fillTextIfReady(){
    if(document.readyState === "loading") return
    if(typeof content === "undefined") return
    if(fillTextWasRun) return
    fillTextWasRun = true

    fillText()
}


function fillText(){
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
