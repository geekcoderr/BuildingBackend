// src/App.js
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; // Make sure to create some basic styles for the cards in App.css

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwpskNWvdj7qQGI-EmktSArgbGKXcNITZakEx8xQM6f8c-BrkFOmvv34cvjnOPJAMhu6A/exec') // Replace with your actual endpoint URL
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data from Google Sheets</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.Title} content={item.Content} />
        ))}
      </div>
    </div>
  );
}

export default App;
