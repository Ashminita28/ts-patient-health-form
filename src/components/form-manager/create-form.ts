
import { element} from "../../utils/dom";
import { state } from "../../app.state";
import type { PatientForm } from "../../types/patientForm-types";
import { addRecord, updateRecord } from "../../app.logic";
import { renderApp } from "../App";
import { validateRecord } from "../../app.logic";


export function createForm():HTMLFormElement{

    const container=document.createElement('div');
    container.className='form-container';


    const form=document.createElement('form') as HTMLFormElement;
// helper
    const createInput=(name:keyof PatientForm,placeholder:string,type='text')=>{
         const input=document.createElement('input');
         input.type=type;
         input.placeholder=placeholder;
         input.value=state.editIndex!==null?(state.records[state.editIndex][name] as string):"";
         form.appendChild(input);
         return input;
    }

    // input fields
    const fullName=createInput('fullName','Enter your name');
    const dob=createInput('dob','Enter birth date');
    const email=createInput('phone','Enter phone number');
    const address=createInput('address','Enter name');
    const phone=createInput('phone','Enter your email');
    const height=createInput('height','Enter name');
    const weight=createInput('weight','Enter name');
    const bloodPressure=createInput('bloodPressure','Enter name');
    const bloodTempreture=createInput('bloodTempreture','Enter name');
    const allergies=createInput('allergies','Enter name');
    const medication=createInput('medication','Enter name');
    const sleepHours=createInput('sleepHours','enter')

    // dropdown
    const bloodType=document.createElement('select');
    ['','A +ve','A -ve','B +ve','B -ve','AB +ve','AB -ve','O +ve','O -ve'].forEach(v=>{
        const opt=document.createElement('option');
        opt.value=v;
        opt.textContent=v===''?'Blood Type':v;
        bloodType.appendChild(opt);
    });
    bloodType.value=state.editIndex!==null?state.records[state.editIndex].bloodType:'';
    form.appendChild(bloodType);

    const dietType=document.createElement('select');
    ['','Mediterranean Diet','DASH Diet','Plant-Based and Vegan Diet'].forEach(v=>{
        const opt=document.createElement('option');
        opt.value=v;
        opt.textContent=v===''?'Diet Type':v;
        dietType.appendChild(opt);
    });
    dietType.value=state.editIndex!==null?state.records[state.editIndex].dietType:'';
    form.appendChild(dietType);

    
    // multi checkbox
    const diseases:string[]=['a','b','c'];
    const diseaseBox:HTMLInputElement[]=[];
    diseases.forEach(d=>{
        const cb=document.createElement('input');
        cb.type='checkbox';
        cb.value=d;
        cb.checked=state.editIndex!==null?state.records[state.editIndex].diseases.includes(d):false;
        diseaseBox.push(cb);
        form.appendChild(cb);
        const label=element('label');
        label.textContent=d
        form.appendChild(label);

    });
    

    const exercises=['Daily','Weekly','Never'];
    const exerciseBox:HTMLInputElement[]=[];
    exercises.forEach(r=>{
        const rd=document.createElement('input');
        rd.type='radio';
        rd.value=r;
        rd.checked=state.editIndex!==null?state.records[state.editIndex].diseases.includes(r):false;
        exerciseBox.push(rd);
        form.appendChild(rd);
        const label=element('label');
        label.textContent=r
        form.appendChild(label);
    })

    // privacy checkbox
    const privacy=document.createElement('input');
    privacy.type='checkbox';
    privacy.checked=state.editIndex!==null?state.records[state.editIndex].privacy:false;
    form.appendChild(privacy);

    const submitBtn=element('button') as HTMLButtonElement;
    submitBtn.type='submit';
    submitBtn.textContent=state.editIndex!==null?'Update':'Create';
    form.appendChild(submitBtn);
    form.addEventListener('submit', (e: SubmitEvent): void => {
    e.preventDefault();
    const selectedDiseases=diseaseBox.filter(d=>d.checked).map(d=>d.value);
    const selectedExercises=exerciseBox.find(d=>d.checked)?.value||'';
    const data:PatientForm={
        fullName:fullName.value.trim(),
        dob:dob.value,
        email:email.value.trim(),
        phone:phone.value.trim(),
        address:address.value.trim(),
        height:height.value.trim(),
        weight:weight.value.trim(),
        bloodPressure:bloodPressure.value.trim(),
        bloodTempreture:bloodTempreture.value.trim(),
        bloodType:bloodType.value.trim(),
        dietType:dietType.value.trim(),
        diseases:selectedDiseases,
        exerciseFrequency:selectedExercises,
        allergies:allergies.value.trim(),
        sleepHours:sleepHours.value.trim(),
        medication:medication.value.trim(),
        privacy:privacy.checked
    };

    const errors=validateRecord(data);
    if(errors.length>0){
       alert(errors.join('\n'));
       return;
    }
    if(state.editIndex===null){
        addRecord(data)
    }else{
        updateRecord(data);
    }

    alert("form submitted successfully")
    renderApp();
  });
  container.appendChild(form);
  return form;
}





