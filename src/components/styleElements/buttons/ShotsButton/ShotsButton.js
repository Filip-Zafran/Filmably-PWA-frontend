import React from "react";
import { Check, X } from "../../icons";
import "./ShotsButton.css";

export const ShotsButton = ({ like }) => {
  return (
    <div
      className={`shotsButton ${
        like ? "shotsButtonLike" : "shotsButtonDislike"
      }`}
    >
      {like ? <Check /> : <X />}
    </div>
  );
};
