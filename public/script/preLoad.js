
// ============= LOAD CONTENT ===============

function loadContentFile(language){
    fetch(`content/${language}.json`)
        .then(response => response.json())
        .then(data => contentDidLoad(data))
}

let content
function contentDidLoad(data){
    content = data
    if(typeof renderContentIfReady === "function") //postLoad.js has loaded
        renderContentIfReady()
}



loadContentFile("swedish")