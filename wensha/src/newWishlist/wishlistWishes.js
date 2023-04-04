import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Wunschzettel(props) {
    const navigate = useNavigate();
    const [wishes, setWishes] = useState([]);
  
    const handleAddWish = (event) => {
      event.preventDefault();
      const wish = event.target.elements.wish.value;
      setWishes([...wishes, wish]);
      event.target.reset();
    };
  
    const handleWishesSubmit = (event) => {
        event.preventDefault();
        const wishes = event.target.elements.wishes.value.split('\n');
        setWishes(wishes);
        const name = props.match.params.name;
        navigate(`/wunschzettel/bestaetigung/${name}`);
    };
  
    const handleConfirm = () => {
        const name = window.location.pathname.split('/').pop();
        navigate(`/wunschzettel/bestaetigung/${name}`, { state: { wishes: wishes } });
     };
      
  
    return (
      <div className="container-md">
        <div className="row mt-3 mb-5">
          <h1 className="text-center">Neuer Wunschzettel</h1>
        </div>
        <form onSubmit={handleAddWish}>
          <div className="row mt-3 mb-5">
            <label htmlFor="wish">Wunsch hinzufügen:</label>
            <input id="wish" type="text" />
          </div>
          <button type="submit">Wunsch hinzufügen</button>
        </form>
        {wishes.length > 0 && (
          <div className="row mt-3 mb-5">
            <h2>Wünsche:</h2>
            <ul>
              {wishes.map((wish, index) => (
                <li key={index}>{wish}</li>
              ))}
            </ul>
          </div>
        )}
        <button type="button" onClick={handleConfirm}>
          Bestätigen
        </button>
      </div>
    );
  }
  

export default Wunschzettel;
