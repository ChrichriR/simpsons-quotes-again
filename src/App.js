import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';
import React from 'react';

const sampleSimpson = {
  character : "Homer Simpson",
  image: 	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  quote: 	"Gah, stupid sexy Flanders!",
};

function App() {
  const [simpson, setSimpson] = React.useState(sampleSimpson);
  const getSimpson = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setSimpson(data[0]);
    });
  
};
  return (
    <div>
      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get another one !</button>
    </div>
  );
}

export default App;
