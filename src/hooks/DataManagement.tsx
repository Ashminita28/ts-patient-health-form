import type { FormValues } from "../types/formTypes";
import { useState } from "react";

interface TableState {
  submitedData: FormValues[];
  addRecord: (record: FormValues) => void;
  updateRecord: (id: string, record: FormValues) => void;
  deleteRecord: (id: string) => boolean;
  getRecordById: (id: string) => FormValues | undefined;
}

export const DataManagement = (): TableState => {
  const [submitedData, setSubmitedData] = useState<FormValues[]>([]);

  const addRecord = (record: FormValues) => {
    console.log("ADD RECORD CALLED", record);

    const newRecord = { ...record, id: Date.now().toString() };
    setSubmitedData((prevData) => [...prevData, newRecord]);
  };
  const updateRecord = (id: string, record: FormValues) => {
    setSubmitedData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...record, id } : item)),
    );
  };

  const deleteRecord = (id: string): boolean => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this record?",
    );
    if (confirmed) {
      setSubmitedData((prevData) => prevData.filter((item) => item.id !== id));
      return true;
    }
    return false;
  };

  const getRecordById = (id: string): FormValues | undefined => {
    return submitedData.find((record) => record.id === id);
  };
  return { submitedData, addRecord, updateRecord, deleteRecord, getRecordById };
};
