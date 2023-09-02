const router = require('express').Router();
const { getAllCompanies, addCompanyLogin, deleteCompany, updateCompany, checkForLogin } = require("../server/controller/index")

router.get("/", getAllCompanies);
router.get("/login", checkForLogin);
router.post("/post", addCompanyLogin)
router.put("/:id", updateCompany)
router.delete("/:id", deleteCompany)

module.exports = router;
