const {Router} = require('express')
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/users",usersController.addUser);
router.get("/users", usersController.getUser);
router.patch("/users/:Id", usersController.editUserById); 


module.exports = router 