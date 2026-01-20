import { appState } from "./app.state";

export function saveState(){
  localStorage.setItem('patients-data',JSON.stringify(appState.patients));
}

export function loadState(){
    const data=localStorage.getItem('patients-data');
    if(data){
        appState.patients=JSON.parse(data);
    }
}