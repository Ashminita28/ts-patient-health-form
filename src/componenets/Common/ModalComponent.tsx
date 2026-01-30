import React from 'react';
// import Button from "./ButtonComponent";
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  showCancelButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  type = 'info',
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  showCancelButton,
}) => {
  if (!isOpen) return null;
  const getNotify = () => {
    switch (type) {
      case 'success':
        return 'SUCCESS';
      case 'error':
        return 'ERROR';
      case 'warning':
        return 'WARNING';
      case 'info':
        return 'INFO';
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={'modal-content'}>
        <div>{getNotify()}</div>
        <div className="">
          <h2 className="success_msg_head">{title}</h2>
          <p className="success_msg_note">{message}</p>
        </div>

        {showCancelButton && (
          <Button onClick={onCancel} className={'close-btn'}>
            {cancelText}
          </Button>
        )}
        <Button onClick={onConfirm} className={'close-btn'}>
          {confirmText}
        </Button>
      </div>
    </div>
  );
};
export default Modal;
