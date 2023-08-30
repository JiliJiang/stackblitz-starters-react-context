import React, { useState, useContext } from 'react';
import { colorContext } from '../colorContext';

export default function Name() {
  const { value, setValue } = useContext(colorContext);
  const [name, setName] = useState('');

  return (
    <div style={{ color: value }}>
      <h2>My Name is ... </h2>
      <label name="name">Name: </label>
      <input
        name="name"
        type="text"
        placeholder="please put in your name here"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h2>{name}</h2>
    </div>
  );
}
