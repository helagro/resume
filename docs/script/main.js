
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

function changeLanguage(){
    const language = document.getElementById("languageSelect").value
    console.log(language)
    clearNewRenderedElems()
    hasFilledContent = false
    loadContentFile(language)
}


// ============= RUN =============
loadContactDetails()