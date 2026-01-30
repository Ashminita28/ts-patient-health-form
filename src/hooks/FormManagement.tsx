import type React from 'react';
import type { FormValues } from '../utils/validation';
import { initialFormData } from '../utils/initialFormData';
import { useState, useRef } from 'react';

interface FormManagementReturn {
  formData: FormValues;
  editingId: string | null;
  formRef: React.RefObject<HTMLFormElement | null>;
  resetForm: () => void;
  setFormDataForEdit: (data: FormValues, id: string) => void;
  clearEditingMode: () => void;
}

export const FormManagement = (): FormManagementReturn => {
  const [formData, setFormData] = useState<FormValues>(initialFormData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
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
    editingId,
    formRef,
    resetForm,
    setFormDataForEdit,
    clearEditingMode,
  };
};
