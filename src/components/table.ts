import { deleteRecord, editRecord } from "../app.logic";
import { state } from "../app.state";
import { renderApp } from "./App";
import { createElement } from "../utils/dom";

export function Table():HTMLElement{
    const container=createElement('div',{className:'tableData'});
    const headingDiv=createElement('div',{className:'record-box'});
    const tableTitle=createElement('h1');
    tableTitle.textContent="Records";
    headingDiv.append(tableTitle);

    const listingTable=createElement('div',{className:'listing'});
    
    const table=createElement('table');
    const thead=createElement('thead');
    const tbody=createElement('tbody');
    

    const row=document.createElement('tr');
    const headers=['NAME','DOB','EMAIL','PHONE','ADDRESS','HEIGHT','WEIGHT','BLOOD PRESSURE','BLOOD TEMPRETURE','BLOOD TYPE','DIET TYPE','CHRONIC DISEASES','EXERCISE FREQUENCY','SLEEP HOURS','ALLERGIES','CURRENT MEDICATION','ACTIONS'];

    headers.forEach(h=>{
        const th=document.createElement('th');
        th.textContent=h;
        row.appendChild(th);
    });

    thead.appendChild(row);

    state.records.forEach((rec,i )=>{
        const trow=document.createElement('tr');
        const cells=[
            rec.fullName,rec.dob,rec.email,rec.phone,rec.address,rec.height,rec.weight,rec.bloodPressure,rec.bloodTempreture,rec.bloodType,rec.dietType,rec.diseases,rec.exerciseFrequency,rec.sleepHours,rec.allergies,rec.medication
        ];

        cells.forEach(c=>{
            const td=document.createElement('td');
            if(Array.isArray(c)){
                td.textContent=c.length?c.join(', '):'-';
            }else{
                td.textContent=c||'_';
            }
            trow.append(td);
        });

        const actionId=document.createElement('td');
        const editBtn=createElement('button',{className:'icon-btn edit-btn'});
        editBtn.textContent="EDIT";
        editBtn.onclick=()=>{
            editRecord(i);
            renderApp();
        };

        const delBtn=createElement('button',{className:'icon-btn delete-btn'});
        delBtn.textContent="DELETE";
        delBtn.onclick=()=>{
            deleteRecord(i);
            renderApp();
        };

        actionId.appendChild(editBtn);
        actionId.appendChild(delBtn);
        trow.appendChild(actionId);
        tbody.appendChild(trow);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    listingTable.append(table);
    container.append(headingDiv,listingTable);
    return container;
}