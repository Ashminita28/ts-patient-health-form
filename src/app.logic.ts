import { saveState } from "./app.storage";
import type { PatientForm } from "./types/patientForm-types";
import { state } from "./app.state";
// import { createElement } from "./utils/dom";
// import { createForm } from "./components/form-manager/create-form";

export function addRecord(data:PatientForm){
    state.records.push(data);
    saveState();
}

export function updateRecord(data:PatientForm){
    if(state.editIndex!=null){
        state.records[state.editIndex]=data;
        state.editIndex=null;
        saveState();
    }
}

export function deleteRecord(index:number){
    state.records.splice(index,1);
    saveState();
}
// const nameInput=createElement('input',{attributes:{type:'text',id:'fullName'}}) as HTMLInputElement;
// const dobInput=createElement('input',{attributes:{type:'Date',id:'dob'}}) as HTMLInputElement;
// const emailInput=createElement('input',{attributes:{type:'Email',id:'email'}}) as HTMLInputElement;
// const phoneInput=createElement('input',{attributes:{type:'number',id:'phone'}}) as HTMLInputElement;
// const addressInput=createElement('textarea',{attributes:{id:'address'}});
// const heightInput=createElement('input',{attributes:{type:'number',id:'height'}}) as HTMLInputElement;
//  const weightInput=createElement('input',{attributes:{type:'number',id:'weight'}}) as HTMLInputElement;
//   const bpInput=createElement('input',{attributes:{type:'number',id:'bloodPressure'}}) as HTMLInputElement;
//   const btInput=createElement('input',{attributes:{type:'number',id:'bloodTempreture'}}) as HTMLInputElement;
//   const bInput=createElement('input',{attributes:{type:'radio',id:'bloodType'}}) as HTMLInputElement;
//   const dInput=createElement('input',{attributes:{type:'dropdown',id:'dietType'}}) as HTMLInputElement;
//   const aInput=createElement('input',{attributes:{type:'text',id:'allergies'}}) as HTMLInputElement;
//    const sInput=createElement('input',{attributes:{type:'number',id:'sleepHours'}}) as HTMLInputElement;
//    const cmInput=createElement('textarea',{attributes:{id:'currMedication'}}) ;
//    const checkBoxInput=createElement('input',{attributes:{type:'checkbox',id:'address'}}) as HTMLInputElement;

   const name=document.getElementById('fullName') as HTMLInputElement;

export function editRecord(index:number){
    const patient=state.records[index];
    state.editIndex=index;
    name.value=patient.fullName;

}



