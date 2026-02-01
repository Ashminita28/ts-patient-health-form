import type { FormValues } from '@/utils/validation';
import TableHeading from './Table/TableHeading';
import TableRows from './Table/TableRows';
import { Table, TableBody } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface DataTableProps {
  data: FormValues[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  onEdit,
  onDelete,
  setShowForm,
}) => {
  console.log('Table data:-', data);
  // console.log("RECORDS:-",record);
  return (
    <>
      <div className="min-h-screen flex justify-center bg-grey-100 px-4">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4 text-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Patient Health Records
            </h1>
            <Button
              onClick={() => setShowForm(true)}
              className="flex items-center justify-center bg-[#ff6b6b]"
            >
              <Plus />
              Add Record
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse rounded-lg overflow-hidden">
              <TableHeading />
              <TableBody>
                {data.map((record) => {
                  return (
                    <TableRows
                      key={record.id}
                      record={record}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  );
                })}
                ;
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
