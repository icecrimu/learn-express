const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  console.log("Here")
  res.render("index", { text: "Goodbye" })
})

app.listen(3000)
