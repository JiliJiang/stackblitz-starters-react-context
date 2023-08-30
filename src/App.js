import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Name from './components/Name';
import Color from './components/Color';
import { colorContext } from './colorContext';

export default function App() {
  const [value, setValue] = useState(null);

  return (
    // <colorContext.Provider value={{value, setValue}}>

    //     <h1 style={{color: value}}>welcome</h1>
    //     <Color/>

    //     <Name/>

    // </colorContext.Provider>

    <Router>
      <colorContext.Provider value={{ value, setValue }}>
        <h1 style={{ color: value, textAlign: 'center' }}>welcome</h1>
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>
            <Link to="/name">Name</Link>
          </h3>
          <h3>
            <Link to="/color">Color</Link>
          </h3>
        </nav>
        <Routes>
          <Route path="/color" element={<Color />}></Route>
          <Route path="/name" element={<Name />}></Route>
        </Routes>
      </colorContext.Provider>
    </Router>
  );
}
