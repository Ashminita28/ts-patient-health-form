
import type { PatientForm } from "../models/types";

export class AppState{
    private records:PatientForm[]=[]; 
    private editingId:number|null=null;

    // STORE AND MANAGE RECORDS OF PATIENTS.
    getRecords():PatientForm[]{
        return this.records;
    }
    
    setRecords(records:PatientForm[]):void{
        this.records=records;
    }
    
    // STORE AND MANAGE EDIT INDEX.
    getEditingId():number|null{
        return this.editingId;
    }
    setEditingId(id:number|null):void{
       this.editingId=id;
    }
}


