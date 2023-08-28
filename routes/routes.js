const express = require("express")
const router = express.Router()

const {getAllCompanies, addCompanyLogin,  deleteCompany, updateCompany, checkForLogin} = require("../database/mysql database/model/model")

router.get("/get", getAllCompanies)
router.get("/login/", checkForLogin)
router.post("/post", addCompanyLogin)
router.delete("/:id", deleteCompany)
router.put("/:id", updateCompany)

module.exports = router;