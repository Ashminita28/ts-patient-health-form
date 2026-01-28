import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  step?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  step,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step={step}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextInput;
