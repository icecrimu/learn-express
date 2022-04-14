const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  console.log("Here")
  res.render("index", { text: "Goodbye" })
})

const userRoute = require("./routes/users")

app.use("/users", userRoute)

app.listen(3000)
