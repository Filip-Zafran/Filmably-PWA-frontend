import React, { useState } from "react";
import CheckOff from "./CheckOff";
import CheckOn from "./CheckOn";

export const Checkbox = (active) => {
  const [change, setChange] = useState({ active });

  return (
    <div
      onClick={() => {
        setChange(!change);
      }}
    >
      {change ? <CheckOff /> : <CheckOn />}
    </div>
  );
};
