import React from 'react';
import './App.css';

function App() {
  const [option, setOption] = React.useState("meat");
  return (
    <div className="App">
      <h3>Hello</h3>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="select">Select</option>
        <option value="fruit">Fruit</option>
        <option value="veg">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
    </div>
  );
}

export default App;
