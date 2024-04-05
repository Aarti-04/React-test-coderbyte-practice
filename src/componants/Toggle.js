import React, { useState } from "react";

const Toggle = () => {
  const [onOfdData, setOnOf] = useState(false);
  const toggleHandler = (e) => {
    setOnOf(!onOfdData);
  };
  return (
    <>
      <div></div>
      <button onClick={toggleHandler}>{onOfdData ? "ON" : "OFF"} </button>
    </>
  );
};

export default Toggle;
