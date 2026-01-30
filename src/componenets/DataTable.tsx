import type { FormValues } from '@/utils/validation';
import TableHeading from './Table/TableHeading';
import TableRows from './Table/TableRows';
import { Table, TableBody } from '@/components/ui/table';

interface DataTableProps {
  data: FormValues[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onEdit, onDelete }) => {
  if (data.length === 0) {
    return (
      <div className="tableData">
        <div className="record-box">
          <h1>Patient Health Records</h1>
        </div>
        <p>No Records</p>
      </div>
    );
  }
  return (
    <>
      <div className="space-y-6">
        <div className="record-box">
          <h1>Patient Health Records</h1>
        </div>
        <div className="table-auto">
          <Table>
            <TableHeading />
            <TableBody>
              {data.map((record) => (
                <TableRows
                  // key={record.id}
                  record={record}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
              ;
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
