const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.add);
router.put("/:id", itemController.modify);
router.delete("/:id", itemController.remove);
module.exports = router;
