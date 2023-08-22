const connection = require("../mysql.js")


module.exports = {

    getAllCompanies : function(req, res) {
        const sql = "SELECT * FROM entreprise"
        connection.query(sql, function(err, result){
            if(err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    },

    addCompany : function (req, res) {
        const sql = "INSERT INTO entreprise SET ? "
        connection.query(sql, req.body,function(err, result) {
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
     }
}