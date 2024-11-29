const Handlebars = require("handlebars")
const fs = require("fs")

const sharedStr = fs.readFileSync("source/shared.json", "utf8")
const sharedObj = JSON.parse(sharedStr)

const languages = [
  {
    inputName: "english.json",
    outputName: "en.html",
  },
  {
    inputName: "swedish.json",
    outputName: "se.html",
  },
]

for (const language of languages) {
  compileLanguage(language)
}

function compileLanguage(lang) {
  const templateSource = fs.readFileSync("source/template.html", "utf8")
  const contentStr = fs.readFileSync(`source/${lang.inputName}`, "utf8")
  const contentObj = JSON.parse(contentStr)

  const context = {
    ...sharedObj,
    ...contentObj,
  }
  const template = Handlebars.compile(templateSource)
  const result = template(context)

  fs.writeFileSync(`docs/${lang.outputName}`, result)
}
