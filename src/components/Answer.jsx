import React from "react";
export const Answer = ({ id, labelText, onChange, checked, image }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="question"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>
        {image}
        {labelText}
      </label>
    </li>
  );
};
