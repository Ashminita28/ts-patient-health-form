import React from 'react';

import DataTable from './DataTable';
import { ModeToggle } from './ModeToggle';
import { formStore } from '../hooks/form-store';
import { useState } from 'react';
import ConfirmationModal from './Common/ConfirmationModal.tsx';
import FormModal from './FormModal.tsx';

const HomePage: React.FC = () => {
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
  const [showForm, setShowForm] = useState(false);
  const [confirmation, setConfirmation] = useState({
    open: false,
    title: '',
    message: '',
  });

  const handleEdit = (id: string) => {
    const record = getRecordById(id);
    if (record) {
      setFormDataForEdit(record, id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowForm(true);
    }
  };

  const handleDelete = (id: string) => {
    const success = deleteRecord(id);
    setConfirmation({
      open: true,
      title: success ? 'Deleted' : 'Error',
      message: success ? 'Deleted successfully' : 'failed to delete',
    });
    if (success) {
      if (editingId === id) {
        resetForm();
        clearEditingMode();
      }
    }
  };

  return (
    <>
      <ModeToggle />
      <DataTable
        data={submittedData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setShowForm={setShowForm}
      />
      <FormModal
        open={showForm}
        onClose={() => setShowForm(false)}
        editingId={editingId}
        addRecord={addRecord}
        updateRecord={updateRecord}
        setConfirmation={setConfirmation}
      />
      <ConfirmationModal
        open={confirmation.open}
        title={confirmation.title}
        message={confirmation.message}
        onClose={() => setConfirmation({ open: false, title: '', message: '' })}
      />
    </>
  );
};

export default HomePage;
