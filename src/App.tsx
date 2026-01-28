import React from "react";
import { FormManagement } from "./hooks/FormManagement";
import {
  formSubmission,
  showSuccessNotification,
} from "./services/submissionServices";
import HealthForm from "./componenets/HealthForm";
import { DataManagement } from "./hooks/DataManagement";
import DataTable from "./componenets/DataTable";
import { useTheme } from "./contexts/ThemeContext";
import Button from "./componenets/Common/Button";
import "./App.css";
import "./styles/table.css";
import "./styles/style.css";

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

    // if(Object.keys(validationErrors).length>0){
    //   scrollToFirstError(validationErrors,formRef);
    //   return;
    // }

    const result = formSubmission(formData, validationErrors);
    console.log("FORM DATA", formData);

    if (!result.success) {
      alert("jkjkjkj");
      return;
    }

    if (editingId) {
      updateRecord(editingId, formData);
      showSuccessNotification("hurry");
    } else {
      addRecord(formData);
      showSuccessNotification("hihihihi");
    }

    resetForm();
    clearEditingMode();
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
          <h1 className="app-title">
            <strong>Patient Health Management</strong>
          </h1>
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
      </div>
    </>
  );
};

export default App;
