// Startseite.js

import React from 'react';
import { Link } from 'react-router-dom';
import neuerWunschzettel from './neuerWunschzettel'; 

function Startseite() {
  const handleNeuerWunschzettel = () => {
    neuerWunschzettel();  
  };

  return (
    <div className="container-md">
      <div className="row mt-3 mb-5">
        <h1 className="text-center">Willkommen bei Wensha</h1>
      </div>
      <div className="row mt-3 mb-5">
        <p className="text-center">Hier kannst du einen neuen Wunschzettel erstellen:</p>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
          <div className="card" style={{width: 12 +'em' }}>
            
            <div className="card-body">
              <Link to="/neuer-wunschzettel">
                <button className="btn btn-primary btn-block">Neuen Wunschzettel erstellen</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{width: 12 +'em' }}>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-6">
                {/* <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Wunschzettel-Code eingeben" /> */}
                <button className="btn btn-secondary btn-block">Wunschzettel aufrufen</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </div>
  );
}

export default Startseite;
