import { appState } from "./app.state";
import { saveState } from "./app.storage";
import type { Datas } from "./types";

export function addPatient(patient:Datas){
   appState.patients.push(patient);
   saveState();
}