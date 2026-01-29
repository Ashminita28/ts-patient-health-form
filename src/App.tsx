import React from "react";
import { FormManagement } from "./hooks/FormManagement";
import { formSubmission } from "./services/submissionServices";
import HealthForm from "./componenets/HealthForm";
import { DataManagement } from "./hooks/DataManagement";
import DataTable from "./componenets/DataTable";
import { useTheme } from "./contexts/ThemeContext";
import { useState } from "react";
import Button from "./componenets/Common/Button";
import "./App.css";
import "./styles/table.css";
import "./styles/style.css";
import "./styles/submitConfirmation.css";
import Modal from "./componenets/Common/Modal";

const App: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const {
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
  } = FormManagement();

  const { submitedData, addRecord, updateRecord, deleteRecord, getRecordById } =
    DataManagement();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAllFields();

    const result = formSubmission(formData, validationErrors);
    console.log("FORM DATA", formData);

    if (!result.success) {
      alert("Fix validations");
      return;
    }
    if (editingId) {
      updateRecord(editingId, formData);
      onConfirm();
    } else {
      addRecord(formData);
      onConfirm();
    }
    resetForm();
    clearEditingMode();
  };

  const [open, setOpen] = useState(false);

  const onConfirm = () => {
    console.log("Accepted Data:");
    setOpen(true);
  };

  const onCancel = () => {
    console.log("rejected Data:");
    setOpen(false);
  };

  const handleEdit = (id: string) => {
    const record = getRecordById(id);
    if (record) {
      setFormDataForEdit(record, id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDelete = (id: string) => {
    const success = deleteRecord(id);
    if (success) {
      if (editingId === id) {
        resetForm();
        clearEditingMode();
      }
    }
  };

  return (
    <>
      <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
        <div className="container">
          <div className="theme-container">
            <Button onClick={toggleTheme} className="theme-button">
              {isDarkTheme ? "light mode" : "dark mode"}
            </Button>
          </div>
          <div className="full-content">
            <HealthForm
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
              onCheckboxChange={handleCheckboxChange}
              onSubmit={handleFormSubmit}
              formRef={formRef}
            />
            <DataTable
              data={submitedData}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
        <Modal
          isOpen={open}
          title="Submitted"
          message="FORM SUBMITTED SUCCESSFULLY"
          type="success"
          confirmText="OK"
          onConfirm={onCancel}
          onCancel={onCancel}
        ></Modal>
      </div>
    </>
  );
};

export default App;
