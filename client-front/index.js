const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require('cors');

const db = require('./database-mysql');

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/", itemRoutes);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});