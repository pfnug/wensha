import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../customized.css';
import WishTitle from './wishTitle';
import Wunschzettel from './wishlistWishes';

function calculateWishPositions(numWishes, angleStep) {
  const radius = 250;
  const center = { x: 0, y: 0 };
  const positions = [];

  for (let i = 0; i < numWishes; i++) {
    const angle = i * angleStep;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    positions.push({ x, y });
  }

  return positions;
}

function WunschzettelBestaetigung(props) {
  const { name, wishes } = props.match.params;

  return (
    <div className="container-md">
      <div className="row mt-3 mb-5">
        <h1 className="text-center">Wunschzettel-Bestätigung</h1>
      </div>
      <div className="row mt-3">
        <p>Vielen Dank, {name}!</p>
        <p>Folgende Wünsche haben wir notiert:</p>
        <ul>
          {wishes.split(',').map((wish, index) => (
            <li key={index}>{wish}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WunschzettelBestaetigung;