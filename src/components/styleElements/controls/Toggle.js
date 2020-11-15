import React, { useState } from "react";
import SwitchOff from "./SwitchOff";
import SwitchOn from "./SwitchOn";

export const Toggle = ({ active }) => {
  const [change, setChange] = useState(active);

  return (
    <div
      onClick={() => {
        setChange(!change);
      }}
    >
      {change ? <SwitchOn /> : <SwitchOff />}
    </div>
  );
};
