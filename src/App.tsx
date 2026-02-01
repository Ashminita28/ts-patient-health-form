import React from 'react';
import { FormManagement } from './hooks/FormManagement';
import { DataManagement } from './hooks/DataManagement';
import DataTable from './componenets/DataTable';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModeToggle } from './componenets/ModeToggle';

const App: React.FC = () => {
  const { editingId, resetForm, setFormDataForEdit, clearEditingMode } =
    FormManagement();

  const { submitedData, addRecord, updateRecord, deleteRecord, getRecordById } =
    DataManagement();
  console.log('yuyuyu', submitedData);

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
          data={submitedData}
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
