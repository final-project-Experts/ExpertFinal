const router = require('express').Router();
const controllers = require("../server/controllers/index");

router.get("/getAllC", controllers.getAllC)
router.post("/addC",controllers.addC)
router.delete("/deleteC:id",controllers.removeC)
router.put("/modifyC:id",controllers.modifyC)
router.post("/addConnexion",controllers.addConnexion)
router.put("/modifyConnexion:id",controllers.modifyConnexion)

module.exports = router;