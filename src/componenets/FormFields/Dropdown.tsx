import React from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownOption[];
  error?: string;
  placeholder?: string;
  required?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
  placeholder = "Select an option",
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Dropdown;
