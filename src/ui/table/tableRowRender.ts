import type { PatientForm } from "../../models/types";

export function tableRow(rec:PatientForm):HTMLTableRowElement{
    const trow=document.createElement('tr');
        const cells=[
            rec.fullName,rec.dob,rec.email,rec.phone,rec.address,rec.height,rec.weight,rec.bloodPressure,rec.bloodTempreture,rec.bloodType,rec.dietType,rec.disease,rec.exercise,rec.sleepHours,rec.allergies,rec.medication
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

        return trow;
}