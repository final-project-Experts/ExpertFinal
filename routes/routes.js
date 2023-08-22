const express = require("express")
const router = express.Router()

const {getAllCompanies, addCompany, deleteCompany, updateCompany} = require("../database/mysql database/model/model")

router.get("/get", getAllCompanies)
router.post("/post", addCompany)
router.delete("/:id", deleteCompany)
router.put("/:id", updateCompany)

module.exports = router;