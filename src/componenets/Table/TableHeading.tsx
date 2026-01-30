import { TableHeader, TableHead, TableRow } from '@/components/ui/table';

const TableHeading: React.FC = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>NAME</TableHead>
        <TableHead>DOB</TableHead>
        <TableHead>EMAIL</TableHead>
        <TableHead>PHONE</TableHead>
        <TableHead>ADDRESS</TableHead>
        <TableHead>HEIGHT</TableHead>
        <TableHead>WEIGHT</TableHead>
        <TableHead>BLOOD PRESSURE</TableHead>
        <TableHead>BLOOD TEMPRATURE</TableHead>
        <TableHead>BLOOD TYPE</TableHead>
        <TableHead>DIET TYPE</TableHead>
        <TableHead>ALLERGIES</TableHead>
        <TableHead>SLEEP HOURS</TableHead>
        <TableHead>DISEASE</TableHead>
        <TableHead>EXERCISE</TableHead>
        <TableHead>MEDICATION</TableHead>
        <TableHead>ACTIONS</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeading;
