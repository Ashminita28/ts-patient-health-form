import { createElement } from "../../utils/dom";

export function tableHeader():HTMLTableSectionElement{
    const thead=createElement('thead');
    const row=document.createElement('tr');
    const headers=['NAME','DOB','EMAIL','PHONE','ADDRESS','HEIGHT','WEIGHT','BLOOD PRESSURE','BLOOD TEMPRETURE','BLOOD TYPE','DIET TYPE','CHRONIC DISEASES','EXERCISE FREQUENCY','SLEEP HOURS','ALLERGIES','CURRENT MEDICATION','ACTIONS'];
    headers.forEach(h=>{
        const th=document.createElement('th');
        th.textContent=h;
        row.appendChild(th);
    });
    thead.appendChild(row);
    return thead;
}