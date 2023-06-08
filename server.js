const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const {pdfmerge} = require("./mergerpdfs");
app.use('/static', express.static('result'))

const port = 4000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async(req, res, next)=> {
  
  let d = await pdfmerge(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
  res.redirect(`http://localhost:4000/static/${d}.pdf`)
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})