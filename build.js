const Handlebars = require('handlebars')
const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')

/* ------------------------ CONSTANTS ----------------------- */

const SOURCE_DIR = 'source'
const OUTPUT_DIR = 'docs'

/* ------------------------- HELPERS ------------------------ */

Handlebars.registerHelper('isMissing', function (value, options) {
  if (value === null || value === '' || value === undefined)
    return options.fn(this)
  else return options.inverse(this)
})

Handlebars.registerHelper('sourceExists', function (value, options) {
  if (!value) return options.inverse(this)

  const filePath = path.join(OUTPUT_DIR, value)
  if (fs.existsSync(filePath)) return options.fn(this)
  else return options.inverse(this)
})

/* ----------------------- LOAD SHARED ---------------------- */

const sharedPath = path.join(SOURCE_DIR, 'shared.yml')
const sharedStr = fs.readFileSync(sharedPath, 'utf8')
const sharedObj = yaml.load(sharedStr)

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
  const templateSourcePath = path.join(SOURCE_DIR, 'template.html')
  const templateSource = fs.readFileSync(templateSourcePath, 'utf8')

  const contentPath = path.join(SOURCE_DIR, lang.inputName)
  const contentStr = fs.readFileSync(contentPath, 'utf8')
  const contentObj = yaml.load(contentStr)

  const context = {
    ...sharedObj,
    ...contentObj,
  }
  const template = Handlebars.compile(templateSource)
  const result = template(context)

  const outputPath = path.join(OUTPUT_DIR, lang.outputName)
  fs.writeFileSync(outputPath, result)
}
