import type { FormValues } from "../types/formTypes";
import TableHeader from "./Table/TableHeader";
import TableRow from "./Table/TableRow";

interface DataTableProps {
  data: FormValues[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onEdit, onDelete }) => {
  // if(data.length===0){
  //     return(
  //         <div className="tableData">
  //             <div className="record-box">
  //             <h1>Patient Health Records</h1>
  //         </div>
  //         <p>Record not submited</p>

  //         </div>
  //     );
  // };

  return (
    <>
      <div className="tableData">
        <div className="record-box">
          <h1>Patient Health Records</h1>
        </div>
        <div className="listing">
          <table>
            <TableHeader />
            <tbody>
              {data.map((record) => (
                <TableRow
                  key={record.id}
                  record={record}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
