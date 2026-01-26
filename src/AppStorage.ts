import type { PatientForm } from "./models/types";

// STEP 4:STORE DATA IN LOCAL STORAGE.

const RECORDS_KEY='patient_records';
const THEME_KEY='theme_toggler';

export class AppStorage{
  static saveRecords(records:PatientForm[]):void{
    console.log("SAVING",records);
    localStorage.setItem(RECORDS_KEY,JSON.stringify(records));
  }

  static loadRecords():PatientForm[]{
    const data=localStorage.getItem(RECORDS_KEY);
    return data?JSON.parse(data):[];
  }

  static saveTheme(isDark:boolean):void{
    localStorage.setItem(THEME_KEY,JSON.stringify(isDark));
  }

  static loadTheme():boolean{
    const data=localStorage.getItem(THEME_KEY);
    return data?JSON.parse(data):false;
  }
}