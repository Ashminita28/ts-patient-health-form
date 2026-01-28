import type React from "react";
import type { FormErrors, FormValues } from "../types/formTypes";
import { initialFormData } from "../utils/initialFormData";
import { useState, useRef } from "react";
import { validateField } from "../utils/validation";
import { validateForm } from "../utils/validation";

interface FormManagementReturn {
  formData: FormValues;
  errors: FormErrors;
  formRef: React.RefObject<HTMLFormElement | null>;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleCheckboxChange: (disease: string) => void;
  resetForm: () => void;
  validateAllFields: () => FormErrors;
}

export const FormManagement = (): FormManagementReturn => {
  const [formData, setFormData] = useState<FormValues>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((previousData) => ({
      ...previousData,
      [name]: newValue,
    }));

    const error = validateField(name, newValue);
    setErrors((previousError) => ({
      ...previousError,
      [name]: error,
    }));
  };

  const handleCheckboxChange = (disease: string) => {
    const updatedDisease = formData.chronicDiseases.includes(disease)
      ? formData.chronicDiseases.filter((d) => d !== disease)
      : [...formData.chronicDiseases, disease];

    setFormData((previousData) => ({
      ...previousData,
      chronicDiseases: updatedDisease,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const validateAllFields = (): FormErrors => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    return validationErrors;
  };

  return {
    formData,
    errors,
    formRef,
    handleInputChange,
    handleCheckboxChange,
    resetForm,
    validateAllFields,
  };
};
