const envNonNull = typeof env === "undefined" ? {} : env

const emailAddrScrambled = envNonNull.emailAddrScrambled ?? "B0bydWYsVGavdXRsb29rLmNvbQ=="
const phoneNrScrambled = envNonNull.phoneNrScrambled ?? "VLzcDMhYWC1YWFhY"

function loadContactDetails() {
  const unscramble = (s) =>
    atob(
      s
        .slice(0, Math.floor(s.length / 2.5))
        .split("")
        .reverse()
        .join("") + s.slice(Math.floor(s.length / 2.5))
    )

  const emailAddr = unscramble(emailAddrScrambled)
  const phoneNr = unscramble(phoneNrScrambled)

  const emailElem = document.getElementById("email")
  emailElem.textContent = emailAddr
  emailElem.href = "mailto:" + emailAddr

  const phoneElem = document.getElementById("phone")
  phoneElem.textContent = phoneNr
  phoneElem.href = "tel:" + phoneNr
}

const showPFP = (value) =>
  (document.getElementById("profilePic").style.display = value ? "unset" : "none")

/* --------------------- MOBILE OPTIONS --------------------- */

let popupIsShowing = false

const toggleOptionsPopup = () => showOptionsPopup(!popupIsShowing)

function handleOutsideTouch(event) {
  //exit if the click was within the popup or on the toggle button
  if (event.target.closest("#optionsContent") || event.target.closest("#toggleOptionsBtn")) return

  showOptionsPopup(false)
}

function showOptionsPopup(doShow) {
  if (popupIsShowing == doShow) return
  popupIsShowing = doShow

  rotateToggleOptionsPopupBtn(popupIsShowing)

  const optionsContent = document.getElementById("optionsContent")
  optionsContent.style.display = popupIsShowing ? "grid" : "none"
}

function rotateToggleOptionsPopupBtn(popupIsShowing) {
  let rotation = popupIsShowing ? 180 : 0
  const img = document.getElementById("toggleOptionsBtnImg")
  img.style.transform = `rotate(${rotation}deg)`
}

/* ---------------------- ENTRY POINTS ---------------------- */

loadContactDetails()

document.addEventListener("mousedown", handleOutsideTouch)
document.addEventListener("touchstart", handleOutsideTouch)
