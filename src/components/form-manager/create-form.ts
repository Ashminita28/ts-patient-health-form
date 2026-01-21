
import { element} from "../../utils/dom";
import { state } from "../../app.state";
import type { PatientForm } from "../../types/patientForm-types";
import { addRecord, updateRecord } from "../../app.logic";
import { renderApp } from "../App";
import { validateFields } from "../../utils/validations";



export function createForm():HTMLFormElement{

    const container=document.createElement('div');
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
    const nameerror=document.createElement('span');

    // input fields
    const fullName=createInput('fullName','Enter your name','text');
    fullName.addEventListener('input',function(){
        const error=validateFields('fullName',fullName.value);
        if(error){
            nameerror.textContent=error;
        }else{
            nameerror.textContent='';
        }
    })
    form.appendChild(nameerror);

    // const doberror=document.createElement('span');
    const dob=createInput('dob','Enter birth date','Date');

    const emailerror=document.createElement('span');
    const email=createInput('phone','Enter email id','text');
    email.addEventListener('input',function(){
        const error=validateFields('email',email.value);
        if(error){
            emailerror.textContent=error;
        }else{
            emailerror.textContent='';
        }
    })
    form.appendChild(emailerror);


    const addresserror=document.createElement('span');
    const address=createInput('address','Enter you address','textArea');
    address.addEventListener('input',function(){
        const error=validateFields('address',address.value);
        if(error){
            addresserror.textContent=error;
        }else{
            addresserror.textContent='';
        }
    })
    form.appendChild(addresserror);


    
    const phone=createInput('phone','Enter your phone number','tel');
    const phoneerror=document.createElement('span');
    phone.addEventListener('input',function(){
        const error=validateFields('phone',phone.value);
        if(error){
            phoneerror.textContent=error;
        }else{
            phoneerror.textContent='';
        }
    })
    form.appendChild(phoneerror);
    const height=createInput('height','Enter your height in cm','number');
    const heighterror=document.createElement('span');
    height.addEventListener('input',function(){
        const error=validateFields('height',height.value);
        if(error){
            heighterror.textContent=error;
        }else{
            heighterror.textContent='';
        }
    })
    form.appendChild(heighterror);

    const weight=createInput('weight','Enter your weight in kg','number');
    const weighterror=document.createElement('span');
    weight.addEventListener('input',function(){
        const error=validateFields('height',height.value);
        if(error){
            weighterror.textContent=error;
        }else{
            weighterror.textContent='';
        }
    })
    form.appendChild(weighterror);

    const bloodPressure=createInput('bloodPressure','Enter your blood pressure in mm Hg','number');
    const bperror=document.createElement('span');
    bloodPressure.addEventListener('input',function(){
        const error=validateFields('bloodPressure',bloodPressure.value);
        if(error){
            bperror.textContent=error;
        }else{
            bperror.textContent='';
        }
    })
    form.appendChild(bperror);

    const bloodTempreture=createInput('bloodTempreture','Enter your blood tempreture in celsius','number');
    const bterror=document.createElement('span');
    bloodTempreture.addEventListener('input',function(){
        const error=validateFields('bloodTempreture',bloodTempreture.value);
        if(error){
            bterror.textContent=error;
        }else{
            bterror.textContent='';
        }
    })
    form.appendChild(bterror);
    const allergies=createInput('allergies','allergy','Mention your allergies');
    const medication=createInput('medication','Mention your current medications');
    const sleepHours=createInput('sleepHours','Enter your sleep hours','number');



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
        rd.checked=state.editIndex!==null?state.records[state.editIndex].exerciseFrequency.includes(r):false;
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





