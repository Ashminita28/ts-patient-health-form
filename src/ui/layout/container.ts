
import { createElement } from "../../utils/dom";
import { logic, formState } from "../App";
import { FormUi } from "../form/FormUI";
import { Table } from "../table/Table";

export function container():HTMLDivElement{
    const fullContent=createElement('div');
    fullContent.className='full-content';

    // FORM CONTAINER
    const formContainer=createElement('div');
    formContainer.className='main';
    const logoBox=createElement('div');
    logoBox.className='logo-box';
    const formHeading=createElement('h1');
    formHeading.textContent='Patient Health Form'
    const formContent=FormUi(formState,logic);
    formContent.className='form-content';
    logoBox.appendChild(formHeading);
    formContainer.append(logoBox,formContent);
    
    // TABLE CONTAINER
    const tableContent=createElement('div');
    tableContent.className='tableData';
    const recordBox=createElement('div');
    recordBox.className='record-box';
    const tableTitle=createElement('h1');
    tableTitle.textContent="Patient Records";
    recordBox.append(tableTitle);

    const listingTable=createElement('div');
    listingTable.className='listing';
    const table=Table();
    listingTable.append(table);
    tableContent.append(recordBox,listingTable);
    
    fullContent.append(formContainer,tableContent);
    return fullContent;
}