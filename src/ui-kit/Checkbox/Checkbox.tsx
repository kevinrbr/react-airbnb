import React from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
