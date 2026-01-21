import { saveState } from "./app.storage";
import type { PatientForm } from "./types/patientForm-types";
import { state } from "./app.state";

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

export function editRecord(index:number){
    state.editIndex=index;
}

