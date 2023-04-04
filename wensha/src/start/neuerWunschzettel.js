import React from 'react';
import { useNavigate } from 'react-router-dom';

function NeuerWunschzettel() {
  const navigate = useNavigate();

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    navigate(`/neuer-wunschzettel/wuensche/${name}`);
  };

  return (
    <div className="container-md">
      <div className="row mt-3 mb-5">
        <h1 className="text-center">Neuer Wunschzettel</h1>
      </div>
      <form onSubmit={handleNameSubmit}>
        <div className="row mt-3 mb-5">
          <label htmlFor="name">Name des Beschenkten:</label>
          <input id="name" type="text" />
        </div>
        <button type="submit">Weiter</button>
      </form>
    </div>
  );
}

export default NeuerWunschzettel;
