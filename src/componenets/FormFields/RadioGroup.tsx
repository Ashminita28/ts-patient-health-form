import React from "react";

interface RadioOption {
  value: string;
  label: string;
}
interface RadioGroupProps {
  id: string;
  name: string;
  label: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  selectedValue,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className="input-field">
      <label>
        {label}
        {required && "*"}
      </label>
      <div className="checkbox-group">
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <input
              id={option.value}
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </React.Fragment>
        ))}
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default RadioGroup;
