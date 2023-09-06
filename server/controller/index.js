const connection = require("../../database-mysql/index")


module.exports = {

    getAllCompanies : function(req, res) {
        const sql = "SELECT * FROM entreprise"
        connection.query(sql, function(err, result){
            if(err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    },

    addCompanyLogin : function (req, res, id) {
        const sql = "INSERT INTO entreprise SET ?"
        id = req.params.id
        connection.query(sql, req.body, function(err, result) {
            if (err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    },

    deleteCompany : function (req, res) {
        const sql = "DELETE FROM entreprise WHERE eId = ?"
        connection.query(sql, req.params.id, function(err, result){
            if (err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    },

    updateCompany : function (req, res) {
        const sql = `UPDATE entreprise SET ? WHERE eId = ${req.params.id}`
        connection.query(sql, req.body, function(err, result) {
            if (err) res.status(500).send(err) 
            else res.status(200).send(result)
        })
     },

     checkForLogin : function (req, res) {
        const sql = "SELECT * FROM entreprise WHERE eMail = ? AND ePassword = ?"
        connection.query(sql, [req.body.eMail, req.body.ePassword] ,function (err, result) {
            if (result.length === 0) res.status(401).send("unautherized")
            else if (err) res.status(500).send(err) 
        else  res.status(200).send(result)
        })
     }

}