
// =========== LOAD EMAIL AND PHONE NUMBER ============

const unscramble = s => atob(s.slice(0, Math.floor(s.length / 2.5)).split("").reverse().join("") + s.slice(Math.floor(s.length / 2.5)))
const emailAddr = unscramble("B0bydWYsVGavdXRsb29rLmNvbQ==")
const phoneNr = unscramble("TLzcDMk5OS05OTk5")



// ============= LOAD TEXT ===============

function loadText(){
    fetch('content/swedish.json')
        .then(response => response.json())
        .then(data => contentDidLoad(data))
}

let content
function contentDidLoad(data){
    content = data
    if(typeof fillTextIfReady === "function") fillTextIfReady()
}

loadText()