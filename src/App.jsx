import data from './Data/data.json'
import Card from './Card/card'
import './App.css'
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [AllData, setAllData] = useState([])
  const [book, setBook] = useState([])



  useEffect(() => {
    const addId = data.map((book, index) => {
      return { ...book, id: index };
    });
    setAllData(addId)
  }, [])
  function handleRandom() {
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomBook = data[randomIndex];
    setBook(randomBook)
    console.log(book);
  }

  return (
    <>
      <div className='wrapper'>
        <div className='texta'>
          <h1>Random Book</h1>
          <button className='button' onClick={handleRandom}>Random</button>
        </div>
        <div>
          {
            book && <Card data={book}></Card>
          }
        </div>
      </div>
    </>
  );
}

export default App;

