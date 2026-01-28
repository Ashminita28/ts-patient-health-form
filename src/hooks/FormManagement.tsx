import type React from "react";
import type { FormErrors, FormValues } from "../types/formTypes";
import { initialFormData } from "../utils/initialFormData";
import { useState, useRef } from "react";
import { validateField } from "../utils/validation";
import { validateForm } from "../utils/validation";

interface FormManagementReturn {
  formData: FormValues;
  errors: FormErrors;
  editingId: string | null;
  formRef: React.RefObject<HTMLFormElement | null>;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleCheckboxChange: (disease: string) => void;
  resetForm: () => void;
  validateAllFields: () => FormErrors;
  setFormDataForEdit: (data: FormValues, id: string) => void;
  clearEditingMode: () => void;
}

export const FormManagement = (): FormManagementReturn => {
  const [formData, setFormData] = useState<FormValues>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [editingId, setEditingId] = useState<string | null>(null);
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
    setEditingId(null);
  };

  const validateAllFields = (): FormErrors => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    return validationErrors;
  };

  const setFormDataForEdit = (data: FormValues, id: string) => {
    setFormData(data);
    setEditingId(id);
  };

  const clearEditingMode = () => {
    setEditingId(null);
  };

  return {
    formData,
    errors,
    editingId,
    formRef,
    handleInputChange,
    handleCheckboxChange,
    resetForm,
    validateAllFields,
    setFormDataForEdit,
    clearEditingMode,
  };
};
