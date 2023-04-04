import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Startseite from './start/startseite';
import NeuerWunschzettel from './start/neuerWunschzettel';
import WunschzettelName from './newWishlist/wishlistName';
import Wunschzettel from './newWishlist/wishlistWishes';
import WunschzettelBestaetigung from './newWishlist/wishlistConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/neuer-wunschzettel" element={<NeuerWunschzettel />} />
        <Route path="/neuer-wunschzettel/wuensche/:name" element={<Wunschzettel />} />
        
        <Route path="/wunschzettel/name" element={<WunschzettelName />} />
        {/* <Route path="/wunschzettel/bestaetigung/:name" element={<WunschzettelBestaetigung />} /> */}

        <Route path="/wunschzettel/bestaetigung/:name/:wishes" element={<WunschzettelBestaetigung />} />
      </Routes>
    </Router>
  );
}

export default App;
