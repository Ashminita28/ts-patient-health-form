import type { FormValues } from '@/utils/validation';
import TableHeading from './Table/TableHeading';
import TableRows from './Table/TableRows';
import { Table, TableBody } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import HealthForm from './HealthForm';

interface DataTableProps {
  data: FormValues[];
  addRecord: (data: FormValues) => void;
  updateRecord: (id: string, data: FormValues) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  addRecord,
  updateRecord,
  onEdit,
  onDelete,
}) => {
  const [showForm, setShowForm] = useState(false);

  // console.log('Table data:-', data);
  // console.log("RECORDS:-",record);
  return (
    <>
      <div className="min-h-screen flex justify-center bg-grey-100 px-4">
        {!showForm ? (
          <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4 text-center">
              <h1 className="text-2xl font-semibold text-gray-800">
                Patient Health Records
              </h1>
              <Button
                onClick={() => setShowForm(true)}
                className="flex items-center justify-center bg-indigo-400"
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
        ) : (
          <HealthForm
            addRecord={addRecord}
            updateRecord={updateRecord}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </>
  );
};

export default DataTable;
