const express = require("express")
const path = require("path")

const app = express()
const rootPath = process.env.ROOT_PATH || "/resume"
const folderPath = path.join(__dirname, "docs")
const port = process.env.PORT || 8080

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`)
  next()
})

app.use(rootPath, express.static(folderPath, { extensions: ["html"] }))

app.get("/", (req, res) => {
  res.redirect(rootPath + "/en")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}, hosting ${folderPath}`)
})
