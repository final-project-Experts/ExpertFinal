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

  const login = (req, res) => {
    const query = "SELECT * FROM candidat WHERE UPPER (cMail) = ? AND cPassword = ?"
    db.query(query, [req.body.cMail.toUpperCase(), req.body.cPassword] ,function (err, result) { 
      if (err) res.status(500).send(err)
        else if (!result||result.length==0){
      res.status(404).send('user not found')
        }
        else res.status(200).send(result)
    })
 }

  // connexion candidat 

  const addConnexion=(req,res)=>{
    const query= "insert into candidat set ?"
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
  

  module.exports = {getAllC,addC,removeC,modifyC,addConnexion,modifyConnexion,login};