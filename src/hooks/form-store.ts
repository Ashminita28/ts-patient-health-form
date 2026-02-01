import { create } from 'zustand';
import type { FormValues } from '@/utils/validation';
import { initialFormData } from '@/utils/initialFormData';
import { persist } from 'zustand/middleware';

interface FormStoreReturn {
  // TABLE STATE
  submittedData: FormValues[];

  // FORM STATE
  formData: FormValues;
  editingId: string | null;

  // TABLE ACTIONS
  addRecord: (record: FormValues) => void;
  updateRecord: (id: string, record: FormValues) => void;
  deleteRecord: (id: string) => boolean;
  getRecordById: (id: string) => FormValues | undefined;

  //   FORM ACTIONS
  resetForm: () => void;
  setFormDataForEdit: (data: FormValues, id: string) => void;
  clearEditingMode: () => void;
}

export const formStore = create<FormStoreReturn>()(
  persist(
    (set, get) => ({
      // INITIAL STATE
      submittedData: [],
      formData: initialFormData,
      editingId: null,

      // ADD RECORD
      addRecord: (record) => {
        const newRecord = { ...record, id: Date.now().toString() };
        set((state) => ({
          submittedData: [...state.submittedData, newRecord],
        }));
      },

      // UPDATE RECORD
      updateRecord: (id, record) => {
        set((state) => ({
          submittedData: state.submittedData.map((item) =>
            item.id === id ? { ...record, id } : item,
          ),
        }));
      },

      // DELETE RECORD
      deleteRecord: (id) => {
        const confirmed = window.confirm(
          'are you sure you want to delete the record?',
        );
        if (!confirmed) return false;
        set((state) => ({
          submittedData: state.submittedData.filter((item) => item.id !== id),
        }));
        return true;
      },

      // GET RECORD BY ID
      getRecordById: (id) => {
        return get().submittedData.find((item) => item.id === id);
      },

      // RESET FORM
      resetForm: () => {
        set({
          formData: initialFormData,
          editingId: null,
        });
      },

      setFormDataForEdit: (data, id) => {
        set({
          formData: data,
          editingId: id,
        });
      },

      clearEditingMode: () => {
        set({ editingId: null });
      },
    }),

    {
      name: 'form-storage',
    },
  ),
);
