import type { FormValues } from "../../types/formTypes";
import Button from "../Common/Button";
import React from "react";

interface TableRowProps {
  record: FormValues;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ record, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{record.name}</td>
      <td>{record.dob}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      <td>{record.address}</td>
      <td>{record.height}</td>
      <td>{record.weight}</td>
      <td>{record.bloodPressure || "-"}</td>
      <td>{record.bloodTempreture || "-"}</td>
      <td>{record.bloodType}</td>
      <td>{record.dietType || "-"}</td>
      <td>{record.allergies || "-"}</td>
      <td>{record.sleepHours || "-"}</td>
      <td>
        {record.chronicDiseases.length > 0
          ? record.chronicDiseases.join(", ")
          : "-"}
      </td>
      <td>{record.exerciseFrequency}</td>
      <td>{record.medication || "-"}</td>
      <td>
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
      </td>
    </tr>
  );
};

export default TableRow;
