import React from "react";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | boolean;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  error,
  required = false,
}) => {
  return (
    <>
      <div className="checkbox-group">
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={name}>
          {label}
          {required && "*"}
        </label>
      </div>
      {error && <span className="error">{error}</span>}
    </>
  );
};

export default Checkbox;
