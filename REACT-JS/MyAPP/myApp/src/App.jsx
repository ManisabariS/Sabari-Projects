import React, { useState } from 'react';
import CreateCard from './components/CreateCard';
import './css/CreateCard.css';
import './App.css';

function App() {
  const [showCard, setShowCard] = useState(false);

  const displayItems = () => {
    setShowCard(true);
  };

  return (
    <div className="app-container">
      <button className="btn-mobiles" onClick={displayItems}>
        Mobiles
      </button>
      {showCard && <CreateCard />}
    </div>
  );
}

export default App;
