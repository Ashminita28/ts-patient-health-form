import { createButton } from "../primitives/button";
import { logic, renderApp } from "../App";
    

export function tableAction(index:number):HTMLTableCellElement{
    
    const actionId=document.createElement('td');
        const editBtn=createButton('EDIT','button');
        editBtn.className='icon-btn edit-btn';
        editBtn.onclick=()=>{
            logic.editRecord(index);
            renderApp();
        };
        const delBtn=createButton('DELETE','button');
        delBtn.className='icon-btn delete-btn'
        delBtn.onclick=()=>{
            logic.deleteRecord(index);
            renderApp();
        };
        actionId.appendChild(editBtn);
        actionId.appendChild(delBtn);

        return actionId;


}

