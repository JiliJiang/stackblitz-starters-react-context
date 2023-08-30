import React, { useState, useContext } from 'react';
import { colorContext } from '../colorContext';

export default function Color() {
  const { value, setValue } = useContext(colorContext);

  return (
    <div style={{ color: value }}>
      <label name="color">Color ... </label>
      <input
        name="color"
        type="text"
        placeholder="please put in your color here"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <h2>Your color is: {value}</h2>
    </div>
  );
}
