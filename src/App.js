import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === '') {
          return val;
        } else if (
          val.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((elem, index) => {
        return (
          <div key={index}>
            <p>{elem.first_name} </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
