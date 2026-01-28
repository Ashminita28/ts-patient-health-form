import React from "react";
interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  rows = 3,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextArea;
