import type { FormInputProps } from "../models/inputTypes";
import '../css/style.css'

export const FormInput = ({ label, name, type, value, onChange, error }: FormInputProps) => (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full border p-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );