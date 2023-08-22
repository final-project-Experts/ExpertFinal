const db = require("../database-mysql");

const selectAll = function (req, res) {
    db.query("SELECT * FROM offre_emploi", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
   });
  };
  const add=(req,res)=>{
   const query="insert into offre_emploi set ?"
   console.log("body: ",req.body);
   db.query(query,req.body,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
 })
 }
 
 const remove=(req,res)=>{
   const query=`delete from offre_emploi where oid=${req.params.id}`
   db.query(query,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
 }
 
 const modify=(req,res)=>{
   const query=`update offre_emploi set ? where oid=${req.params.id} `
   db.query(query,req.body,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
 }

module.exports = { selectAll,add,remove,modify };
