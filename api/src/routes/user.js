const { Router } = require('express');
const router = Router();
const { getUsers } = require("../controllers/userController.js");

router.get("/", async(req, res) => {
  try {
    let users = await getUsers()
    res.status(200).send(users)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

module.exports = router;