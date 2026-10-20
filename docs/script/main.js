function showPFP(value) {
  document.getElementById('profilePic').style.display = value ? 'unset' : 'none'
  document.getElementById('headerText').style.marginBottom = value ? '1em' : '0'
}

function showPageMarkers(value) {
  document.getElementsByTagName('main')[0].style.marginTop = value ? '5em' : '0'

  for (const elem of document.getElementsByClassName('pageMarkers')) {
    elem.style.display = value ? 'grid' : 'none'
  }
}

function highlightLinks(value) {
  const links = document.getElementsByTagName('a')

  for (const elem of links) {
    if (value && !elem.classList.contains('disabled')) {
      elem.style.textDecoration = 'underline'
    } else if (!value && !elem.classList.contains('importantLink')) {
      elem.style.textDecoration = 'none'
    }
  }
}

/* --------------------- CONTACT DETAILS -------------------- */
const phoneNrScrambled = window.env.phoneNrScrambled
const emailAddrScrambled = window.env.emailAddrScrambled

console.log(window.env.emailAddrScrambled, emailAddrScrambled)

function loadContactDetails() {
  const unscramble = (s) =>
    atob(
      s
        .slice(0, Math.floor(s.length / 2.5))
        .split('')
        .reverse()
        .join('') + s.slice(Math.floor(s.length / 2.5)),
    )

  const emailAddr = unscramble(emailAddrScrambled)

  const emailElem = document.getElementById('email')
  emailElem.textContent = emailAddr
  emailElem.href = 'mailto:' + emailAddr

  if (!phoneNrScrambled) {
    for (const elem of document.getElementsByClassName('ifPhoneNr'))
      elem.style.display = 'none'
  } else {
    const phoneNr = unscramble(phoneNrScrambled)
    const phoneElem = document.getElementById('phone')
    phoneElem.textContent = phoneNr
    phoneElem.href = 'tel:' + phoneNr
  }
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
