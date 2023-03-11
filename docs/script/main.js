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

const showPFP = (value) => document.getElementById("profilePic").style.display = value ? "unset" : "none"


let showOptionsPopup = false
function toggleOptionsPopup(){
    showOptionsPopup = !showOptionsPopup
    rotateToggleOptionsPopupBtn(showOptionsPopup)

    const optionsContent = document.getElementById("optionsContent")
    optionsContent.style.display = showOptionsPopup ? "grid" : "none"
}

function rotateToggleOptionsPopupBtn(showOptionsPopup){
    let rotation = showOptionsPopup ? 0 : 180
    const img = document.getElementById("toggleOptionsBtnImg")

    const rotate = () => {
        rotation += 20
        img.style.transform = "rotate(" + rotation + "deg)"

        if(rotation % 180 != 0)
            requestAnimationFrame(rotate)
    }

    rotate()
}

// ============= RUN =============
loadContactDetails()