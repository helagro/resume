const Handlebars = require("handlebars")
const fs = require("fs")


const languages = [
    {
        inputName: "english.json",
        outputName: "index.html"
    },
    {
        inputName: "swedish.json",
        outputName: "se.html"
    },
]


for(const language of languages){
    compileLanguage(language)
}

function compileLanguage(lang){
    const templateSource = fs.readFileSync("source/template.html", "utf8")
    const contentStr = fs.readFileSync(`source/${lang.inputName}`, "utf8")

    const contentObj = JSON.parse(contentStr)
    const template = Handlebars.compile(templateSource)
    const result = template(contentObj)
    
    fs.writeFileSync(`docs/${lang.outputName}`, result)
}