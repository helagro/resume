

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





function setShowImages(value){
    const images = document.getElementsByTagName("img")
    const displayValue = value ? "unset" : "none"

    for(const image of images){
        image.style.display = displayValue
    }
}