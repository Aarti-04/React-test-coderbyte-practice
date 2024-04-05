import React, { useState } from "react";

const ColorSelector = () => {
  const colors = { red: "red", yellow: "Yellow", blue: "Blue" };
  const [color, setColor] = useState(colors.red);
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div>ColorSelector</div>
      <select onChange={colorHandler} value={color}>
        <option value={colors.red}>{colors.red}</option>
        <option value={colors.blue}>{colors.blue}</option>
        <option value={colors.yellow}>{colors.yellow}</option>
      </select>
      <div>You have selected {color}</div>
    </>
  );
};

export default ColorSelector;
