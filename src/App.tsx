import React from 'react';
// import { FormManagement } from './hooks/FormManagement';
// import { DataManagement } from './hooks/DataManagement';
import DataTable from './componenets/DataTable';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModeToggle } from './componenets/ModeToggle';
import { formStore } from './hooks/form-store';

const App: React.FC = () => {
  // const { editingId, resetForm, setFormDataForEdit, clearEditingMode } =
  //   FormManagement();

  const {
    submittedData,
    editingId,
    resetForm,
    setFormDataForEdit,
    clearEditingMode,
    addRecord,
    updateRecord,
    deleteRecord,
    getRecordById,
  } = formStore();

  console.log('yuyuyu', submittedData);

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
      <ThemeProvider storageKey="vite-ui-theme">
        <ModeToggle />

        <DataTable
          data={submittedData}
          addRecord={addRecord}
          updateRecord={updateRecord}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
