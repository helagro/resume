const emailAddrScrambled = 'B0bydWYsVGavdXRsb29rLmNvbQ=='

function loadContactDetails() {
  const unscramble = (s) =>
    atob(
      s
        .slice(0, Math.floor(s.length / 2.5))
        .split('')
        .reverse()
        .join('') + s.slice(Math.floor(s.length / 2.5))
    )

  const emailAddr = unscramble(emailAddrScrambled)

  const emailElem = document.getElementById('email')
  emailElem.textContent = emailAddr
  emailElem.href = 'mailto:' + emailAddr

  if (typeof phoneNrScrambled === 'undefined') {
    for (const elem of document.getElementsByClassName('ifPhoneNr'))
      elem.style.display = 'none'
  } else {
    const phoneNr = unscramble(phoneNrScrambled)
    const phoneElem = document.getElementById('phone')
    phoneElem.textContent = phoneNr
    phoneElem.href = 'tel:' + phoneNr
  }
}

function showPFP(value) {
  document.getElementById('profilePic').style.display = value ? 'unset' : 'none'
  document.getElementById('headerText').style.marginBottom = value ? '1em' : '0'
}

/* --------------------- MOBILE OPTIONS --------------------- */

let popupIsShowing = false

const toggleOptionsPopup = () => showOptionsPopup(!popupIsShowing)

function handleOutsideTouch(event) {
  //exit if the click was within the popup or on the toggle button
  if (
    event.target.closest('#optionsContent') ||
    event.target.closest('#toggleOptionsBtn')
  )
    return

  showOptionsPopup(false)
}

function showOptionsPopup(doShow) {
  if (popupIsShowing == doShow) return
  popupIsShowing = doShow

  rotateToggleOptionsPopupBtn(popupIsShowing)

  const optionsContent = document.getElementById('optionsContent')
  optionsContent.style.display = popupIsShowing ? 'grid' : 'none'
}

function rotateToggleOptionsPopupBtn(popupIsShowing) {
  let rotation = popupIsShowing ? 180 : 0
  const img = document.getElementById('toggleOptionsBtnImg')
  img.style.transform = `rotate(${rotation}deg)`
}

/* ---------------------- ENTRY POINTS ---------------------- */

console.log('Version 1')

loadContactDetails()

document.addEventListener('mousedown', handleOutsideTouch)
document.addEventListener('touchstart', handleOutsideTouch)
