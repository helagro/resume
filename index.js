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

app.use(rootPath, express.static(path.join(__dirname, "docs")))

app.get("/:filename", (req, res, next) => {
  const filename = req.params.filename
  const filePath = path.join(staticFilesDirectory, filename)

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return next()

    res.sendFile(filePath)
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}, hosting ${folderPath}`)
})