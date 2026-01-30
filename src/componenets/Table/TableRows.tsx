import type { FormValues } from '../../types/formTypes';
import { Button } from '@/components/ui/button';
import React from 'react';
import { TableRow, TableCell } from '@/components/ui/table';

interface TableRowProps {
  record: FormValues;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TableRows: React.FC<TableRowProps> = ({ record, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{record.name}</TableCell>
      <TableCell>{record.dob}</TableCell>
      <TableCell>{record.email}</TableCell>
      <TableCell>{record.phone}</TableCell>
      <TableCell>{record.address}</TableCell>
      <TableCell>{record.height}</TableCell>
      <TableCell>{record.weight}</TableCell>
      <TableCell>{record.bloodPressure || '-'}</TableCell>
      <TableCell>{record.bloodTempreture || '-'}</TableCell>
      <TableCell>{record.bloodType}</TableCell>
      <TableCell>{record.dietType || '-'}</TableCell>
      <TableCell>{record.allergies || '-'}</TableCell>
      <TableCell>{record.sleepHours || '-'}</TableCell>
      <TableCell>
        {record.chronicDiseases.length > 0
          ? record.chronicDiseases.join(', ')
          : '-'}
      </TableCell>
      <TableCell>{record.exerciseFrequency}</TableCell>
      <TableCell>{record.medication || '-'}</TableCell>
      <TableCell>
        <Button
          onClick={() => onEdit(record.id!)}
          className="icon-btn edit-btn"
        >
          Edit
        </Button>
        <Button
          onClick={() => onDelete(record.id!)}
          className="icon-btn delete-btn"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRows;
