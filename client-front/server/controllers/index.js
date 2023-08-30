const db = require("../../database-mysql");

const getAllC = function (req, res) {
    db.query("SELECT * FROM candidat", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };

  const addC=(req,res)=>{
    const query= "insert into candidat set ?"
    console.log("body: ",req.body);
    db.query(query,req.body,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
  })
  };

  const removeC=(req,res)=>{
    const query=`delete from candidat where candidatId=${req.params.id}`
    db.query(query,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
    })
  };

  const modifyC=(req,res)=>{
    const query=`update candidat set ? where candidatId=${req.params.id} `
    db.query(query,req.body,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
    })
  };

  // connexion candidat 

  const addConnexion=(req,res)=>{
    const query= "insert into candidat set ?"
    console.log("body: ",req.body);
    db.query(query,req.body,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
  })
  };

  const modifyConnexion=(req,res)=>{
    const query=`update candidat set ? where candidatId=${req.params.id} `
    db.query(query,req.body,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
    })
  };



  module.exports = {getAllC,addC,removeC,modifyC,addConnexion,modifyConnexion};