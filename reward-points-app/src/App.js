import React from 'react';
import './App.css';
import RewardCalculator from './RewardCalculator';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Reward App</h1>
      </header>
      <main>
        <RewardCalculator />
      </main>
    </div>
  );
};

export default App;
