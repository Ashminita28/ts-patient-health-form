import React from "react";

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  id: string;
  name?: string;
  label: string;
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
  required?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  required = false,
}) => {
  return (
    <>
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
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => onChange(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckboxGroup;
