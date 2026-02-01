import { TableHeader, TableHead, TableRow } from '@/components/ui/table';

const TableHeading: React.FC = () => {
  return (
    <TableHeader className="bg-indigo-400">
      <TableRow>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          NAME
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          DOB
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          EMAIL
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          PHONE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          ADDRESS
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          HEIGHT
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          WEIGHT
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          BLOOD PRESSURE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          BLOOD TEMPRATURE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          BLOOD TYPE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          DIET TYPE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          ALLERGIES
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          SLEEP HOURS
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          DISEASE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          EXERCISE
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          MEDICATION
        </TableHead>
        <TableHead className="px-4 py-3 text-left text-sm font-medium text-white">
          ACTIONS
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeading;
