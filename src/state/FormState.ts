import type { PatientForm } from "../models/types";

// USED TO MANAGE FORM INPUT VALUES.
export class FormState{
    private values:Partial<PatientForm>={};
    setField<K extends keyof PatientForm>(name:K,value:PatientForm[K]):void{
        this.values[name]=value;
    }
    getField<K extends keyof PatientForm>(name:K):PatientForm[K]|undefined{
        return this.values[name];
    }
    getAll():Partial<PatientForm>{
        return this.values;
    }
    clear():void{
        this.values={};
    }
}