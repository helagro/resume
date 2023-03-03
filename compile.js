const languages = [
    {
        inputName: "english.json",
        outputName: "en.html"
    },
    {
        inputName: "swedish.json",
        outputName: "se.html"
    }
]


const Handlebars = require("handlebars")
const fs = require("fs")

const templateSource = fs.readFileSync("index.html", "utf8")

const content = fs.readFileSync("source/english.json", "utf8")
const template = Handlebars.compile(templateSource)
const result = template({ name: "Nils" })

fs.writeFileSync("res.html", result)
