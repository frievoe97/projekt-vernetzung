import React from "react";
import { Slider } from "antd";
const Filter = () => {
  const marks = {
    0: "0 km",
    250: "250 km",
    500: "500 km",
  };

  return (
    <div className="w-full mb-4 p-4 px-8">
      <h2>Alter</h2>
      <Slider range defaultValue={[0, 18]} />
      <h2>Entfernung (in km)</h2>
      <Slider marks={marks} defaultValue={[0, 500]} max={500} />
    </div>
  );
};
export default Filter;
