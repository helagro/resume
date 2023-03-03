let hasFilledContent = false
let newRenderedNodes = []


function renderContentIfReady(){
    if(document.readyState === "loading") return
    if(typeof content === "undefined") return
    if(hasFilledContent) return

    hasFilledContent = true
    renderItem(document.body, null, content)
}


function renderItem(parent, key, value){
    if (typeof value == "string")
        renderString(parent, key, value)
    else if(Array.isArray(value)) 
        renderArray(key, value)
    else
        renderObject(parent, value)
}

function renderObject(parent, obj){
    for(const key in obj){
        const value = obj[key]
        renderItem(parent, key, value)
    }
}

function renderArray(name, jsonArr){
    const template = document.getElementById(name)
    const parent = template.parentElement

    for(const obj of jsonArr){
        const newElem = template.content.cloneNode(true)
        renderItem(newElem, null, obj)
        newRenderedNodes.push(parent.appendChild(newElem))
    }
}

function renderString(parent, key, value){
    if(parent == document.body) 
        document.getElementById(key).textContent = value
    else if(key === null) //string in array
        parent.firstChild.textContent = value
    else // elem in obj in array
        parent.querySelector("." + key).textContent = value
}
