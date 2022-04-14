const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

app.use(logger)

app.get("/", (req, res) => {
  console.log("Here")
  res.render("index", { text: "Goodbye" })
})

// apply on individual end points
// app.get("/", logger, (req, res) => {
//     console.log("Here")
//     res.render("index", { text: "Goodbye" })
//   })

const userRoute = require("./routes/users")

app.use("/users", userRoute)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000)
