import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WunschzettelBeschreibung() {
  const [name, setName] = useState('');
  const [beschreibung, setBeschreibung] = useState('');
  const navigate = useNavigate();

  const handleBeschreibungSubmit = (event) => {
    event.preventDefault();
    // Hier kann die Logik für das Speichern der Beschreibung implementiert werden
    navigate('/wunschzettel/wuensche');
  };

  return (
    <div className="container-md">
      <div className="row mt-3 mb-5">
        <h1 className="text-center">Neuer Wunschzettel</h1>
      </div>
      <form onSubmit={handleBeschreibungSubmit}>
        <div className="row mt-3 mb-5">
          <label htmlFor="name">Name des Beschenkten:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="row mt-3 mb-5">
          <label htmlFor="beschreibung">Beschreibung:</label>
          <textarea
            id="beschreibung"
            value={beschreibung}
            onChange={(event) => setBeschreibung(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Weiter</button>
      </form>
    </div>
  );
}

export default WunschzettelBeschreibung;
