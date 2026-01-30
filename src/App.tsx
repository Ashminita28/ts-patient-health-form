import React from 'react';
import { FormManagement } from './hooks/FormManagement';
// import { formSubmission } from "./services/submissionServices";
import HealthForm from './componenets/HealthForm';
import { DataManagement } from './hooks/DataManagement';
import DataTable from './componenets/DataTable';
import { useTheme } from './contexts/ThemeContext';
import { useState } from 'react';
import { Button } from './components/ui/button';
import Modal from './componenets/Common/ModalComponent';

const App: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { editingId, resetForm, setFormDataForEdit, clearEditingMode } =
    FormManagement();

  const { submitedData, deleteRecord, getRecordById } = DataManagement();

  const [open, setOpen] = useState(false);

  const onCancel = () => {
    console.log('rejected Data:');
    setOpen(false);
  };

  const handleEdit = (id: string) => {
    const record = getRecordById(id);
    if (record) {
      setFormDataForEdit(record, id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <div className="container">
          <div className="theme-container">
            <Button onClick={toggleTheme} className="theme-button">
              {isDarkTheme ? 'light mode' : 'dark mode'}
            </Button>
          </div>
          <div className="full-content">
            <HealthForm />
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
