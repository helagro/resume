const Handlebars = require('handlebars')
const fs = require('fs')
const yaml = require('js-yaml')

/* ----------------------- LOAD SHARED ---------------------- */

const sharedStr = fs.readFileSync('source/shared.yml', 'utf8')
const sharedObj = yaml.load(sharedStr)

/* ------------------------- HELPERS ------------------------ */

Handlebars.registerHelper('isMissing', function (value, options) {
  if (value === null || value === '' || value === undefined)
    return options.fn(this)
  else return options.inverse(this)
})

/* ----------------- LOOP THROUGH LANGUAGES ----------------- */

const languages = [
  {
    inputName: 'english.yml',
    outputName: 'en.html',
  },
  {
    inputName: 'swedish.yml',
    outputName: 'se.html',
  },
]

for (const language of languages) {
  compileLanguage(language)
}

/* --------------------- COMPILE LANGUAGE -------------------- */

function compileLanguage(lang) {
  const templateSource = fs.readFileSync('source/template.html', 'utf8')
  const contentStr = fs.readFileSync(`source/${lang.inputName}`, 'utf8')
  const contentObj = yaml.load(contentStr)

  const context = {
    ...sharedObj,
    ...contentObj,
  }
  const template = Handlebars.compile(templateSource)
  const result = template(context)

  fs.writeFileSync(`docs/${lang.outputName}`, result)
}
