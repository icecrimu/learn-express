const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

router.post("/", (req, res) => {
  res.send("Create User")
})

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`User Get with Id ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User with Id ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User with Id ${req.params.id}`)
  })

// or this
// router.get("/:id", (req, res) => {
//   res.send(`User Get with Id ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//   res.send(`Update User with Id ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//   res.send(`Delete User with Id ${req.params.id}`)
// })
const users = [{ name: "charles " }, { name: "Jane" }, { name: "Joe" }]
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router
