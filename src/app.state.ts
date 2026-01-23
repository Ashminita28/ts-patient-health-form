import type { PatientForm } from "./types/patientForm-types";

export const state={
    records:[] as PatientForm[],
    editIndex:null as number|null,
    showModal:false as boolean,
};



