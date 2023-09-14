const express = require("express");
const itemRoutes = require('./routes/item.routes')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
app.use(bodyParser.json());
app.post('/api/items', async (req, res) => {
  const { name, email, message } = req.body;

  // Configuration du transporteur Nodemailer (utilisez vos propres informations SMTP)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rbkhheni@gmail.com',
      pass: 'heniHAJER@4',
    },
  });

  // Paramètres de l'e-mail
  const mailOptions = {
    from: 'rbkhheni@gmail.com',
    to: 'henihajer@yahoo.fr', // L'adresse e-mail destinataire
    subject: 'Nouvelle demande d\'informations',
    text: `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.sendStatus(200); // Réponse 200 OK si l'e-mail est envoyé avec succès
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Réponse 500 en cas d'erreur
  }
});
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
