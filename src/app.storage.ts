import { state } from "./app.state";

// STORE DATA IN LOCAL STORAGE.
export function saveState(){
  localStorage.setItem('patients-data',JSON.stringify(state.records));
}

// GET DATA FROM LOCAL STORAGE.
export function loadState(){
    const data=localStorage.getItem('patients-data');
    return data?JSON.parse(data):[];
}