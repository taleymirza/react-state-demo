import React from 'react';
import './App.css';
import ImageContainer from './Components/ImageContainer/ImageContainer';

function App() {
  const [option, setOption] = React.useState("select");
  return (
    <div className="App">
      <h1>Select Image</h1>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="select">Select</option>
        <option value="fruit">Fruit</option>
        <option value="veg">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
      <ImageContainer imageName={option} />
    </div>
  );
}

export default App;
