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



// ============ MOBILE OPTIONS ===============

let popupIsShowing = false


const toggleOptionsPopup = () => showOptionsPopup(!popupIsShowing)

function handleOutsideTouch(event){
    if (event.target.tagName === 'BUTTON' || event.target.id === "toggleOptionsBtnImg") return

    showOptionsPopup(false)
}

function showOptionsPopup(doShow){
    if(popupIsShowing == doShow) return
    popupIsShowing = doShow

    rotateToggleOptionsPopupBtn(popupIsShowing)

    const optionsContent = document.getElementById("optionsContent")
    optionsContent.style.display = popupIsShowing ? "grid" : "none"
}

function rotateToggleOptionsPopupBtn(popupIsShowing){
    let rotation = popupIsShowing ? 0 : 180
    const img = document.getElementById("toggleOptionsBtnImg")

    const rotate = () => {
        rotation += 20
        img.style.transform = `rotate(${rotation}deg)`

        if(rotation % 180 != 0)
            requestAnimationFrame(rotate)
    }

    rotate()
}



// ============= ENTRY POINTS =============
loadContactDetails()

document.addEventListener('mousedown', handleOutsideTouch)
document.addEventListener('touchstart', handleOutsideTouch)