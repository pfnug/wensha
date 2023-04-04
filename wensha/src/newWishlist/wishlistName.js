import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WunschzettelName() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameSubmit = (event) => {
    event.preventDefault();
    // Hier kann die Logik für das Speichern des Namens implementiert werden
    navigate(`/wunschzettel/beschreibung/${name}`);
  };

  return (
    <div className="container-md">
      <div className="row mt-3 mb-5">
        <h1 className="text-center">Neuer Wunschzettel</h1>
      </div>
      <form onSubmit={handleNameSubmit}>
        <div className="row mt-3 mb-5">
          <label htmlFor="name">Name des Beschenkten:</label>
          <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <button type="submit">Weiter</button>
      </form>
    </div>
  );
}

export default WunschzettelName;

