import { deleteRecord, editRecord } from "../app.logic";
import { state } from "../app.state";
import { renderApp } from "./App";

export function Table():HTMLElement{
    const container=document.createElement('div');

    const table=document.createElement('table');
    const thead=document.createElement('thead');
    const tbody=document.createElement('tbody');

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
            rec.fullName,rec.dob,rec.email,rec.phone,rec.address,rec.height,rec.weight,rec.bloodPressure,rec.bloodTempreture,rec.bloodType,rec.dietType,rec.diseases.join(', '),rec.exerciseFrequency,rec.sleepHours,rec.allergies,rec.medication
        ];

        cells.forEach(c=>{
            const td=document.createElement('td');
            td.textContent=c;
            trow.append(td);
        });

        const actionId=document.createElement('td');
        const editBtn=document.createElement('button');
        editBtn.textContent="EDIT";
        editBtn.onclick=()=>{
            editRecord(i);
            renderApp();
        };

        const delBtn=document.createElement('button');
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
    container.appendChild(table);
    return container;

}