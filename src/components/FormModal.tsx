import type { FormValues } from '@/utils/validation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import HealthForm from './HealthForm';

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  editingId?: string | null;
  addRecord: (data: FormValues) => void;
  updateRecord: (id: string, data: FormValues) => void;
  setConfirmation: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      title: string;
      message: string;
    }>
  >;
}

const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  editingId,
  addRecord,
  updateRecord,
  setConfirmation,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingId ? 'Edit Record' : 'Add Record'}</DialogTitle>
        </DialogHeader>
        <HealthForm
          addRecord={addRecord}
          updateRecord={updateRecord}
          onClose={onClose}
          setConfirmation={setConfirmation}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
