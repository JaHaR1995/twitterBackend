const {Router} = require('express')
const { twitsController } = require("../controllers/twits.controller");

const router = Router();

router.post("/twits",twitsController.addTwit);
router.get("/twits", twitsController.getTwit);
router.delete("/twits/:Id", twitsController.deleteTwitById);
router.patch("/twits/:Id", twitsController.editTwitById);


module.exports = router   