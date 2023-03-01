
// ============= LOAD CONTENT ===============

function loadContentFile(){
    fetch('content/swedish.json')
        .then(response => response.json())
        .then(data => contentDidLoad(data))
}

let content
function contentDidLoad(data){
    content = data
    if(typeof fillContentIfReady === "function") //postLoad.js has loaded
        fillContentIfReady()
}



loadContentFile()