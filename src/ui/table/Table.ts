
import { appState } from "../App";
import { createElement } from "../../utils/dom";
import { tableAction } from "./tableActionHandler";
import { tableHeader } from "./tableHeader";
import { tableRow } from "./tableRowRender";


export function Table():HTMLTableElement{
  const table=createElement('table');
  const tbody=createElement('tbody');
  table.appendChild(tableHeader());
   appState.getRecords().forEach((record)=>{
    const row=tableRow(record);
    row.appendChild(tableAction(record.id));
    tbody.appendChild(row);
   })
    table.appendChild(tbody);
    return table;
}