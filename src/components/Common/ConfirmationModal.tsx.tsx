import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title,
  message,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p className="mt-4 w-full" onClick={onClose}>
          {message}
        </p>
        <Button className="mt-4 w-full" onClick={onClose}>
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
