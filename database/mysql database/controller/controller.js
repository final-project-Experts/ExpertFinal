const mod = require("../model/model.js")

const {getAllCompanies, addCompany, deleteCompany, updateCompany} = require("../model/model.js")

module.exports = {

     getall : function (req, res)  {
        getAllCompanies(function(err, result){
            if(err) res.status(500).send(err)
            else res.status(200).send(result)
        })
     },
     
     addOne : function (req, res) {
        addCompany (function(err, result) {
            if (err) res.status(500).send(err)
            else res.status(200).json(result)
        }, [req.body.eNom, req.body.eDescription, req.body.eContact])
     },

     deleteOne: function (req, res) {
        deleteCompany (function (err, result) {
            if (err) res.status(500).send(err)
            else res.status(200).send(result)
        }, req.params.id)
     },

     updateOne: function(req, res) {
        updateCompany(function (err, result) {
            if (err) res.status(500).send(err) 
            else res.status(200).send(result)
        }, [req.body.eNom, req.body.eDescription, req.body.eContact, req.params.id])
     }
}
