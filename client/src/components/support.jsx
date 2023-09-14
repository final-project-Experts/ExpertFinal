import React, { useState } from 'react';
import axios from 'axios';
const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false); // État pour suivre l'envoi de l'e-mail
  const [error, setError] = useState(null); // État pour suivre les erreurs

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/items', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        // L'envoi de l'e-mail a réussi, mettez à jour l'état pour afficher un message de confirmation.
        setIsSent(true);
        setError(null); // Réinitialisez l'état des erreurs
      }
    } catch (error) {
      console.error(error);
    
      // Obtenez le message d'erreur réel
      const errorMessage = error.message || 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.';
      
      res.status(500).json({ error: errorMessage });
    }
  };

  return (
    <div className="support-content">
      <h1>Contactez-nous</h1>
      {isSent ? (
        // Afficher un message de confirmation si l'e-mail a été envoyé avec succès.
        <div className="confirmation-message">
          Merci ! Votre message a été envoyé avec succès.
        </div>
      ) : (
        <div>
          {error && (
            // Afficher un message d'erreur s'il y a une erreur.
            <div className="error-message">
              {error}
            </div>
          )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Support;