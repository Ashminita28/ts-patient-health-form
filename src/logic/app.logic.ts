import type { PatientForm } from "../models/types";
import type { AppState } from "../state/AppState";
import type { FormState } from "../state/FormState";
import type { ThemeState } from "../state/ThemeState";
import { AppStorage } from "../AppStorage";
import { renderApp } from "../ui/App";

export class AppLogic{
  private appState:AppState;
  private formState:FormState;
  private themeState:ThemeState;
  constructor(appState:AppState,formState:FormState,themeState:ThemeState){
    this.appState=appState;
    this.formState=formState;
    this.themeState=themeState;
  }

  submitForm():void{
    const editingId=this.appState.getEditingId();
    const formData=this.formState.getAll();
    console.log("FORM DATA",formData)

    const typeData=formData as PatientForm;

    const record:PatientForm={
      id:editingId??Date.now(),
      fullName:typeData.fullName,
      dob:typeData.dob,
      email:typeData.email,
      phone:typeData.phone,
      address:typeData.address,
      height:typeData.height,
      weight:typeData.weight,
      bloodPressure:typeData.bloodPressure,
      bloodTempreture:typeData.bloodTempreture,
      bloodType:typeData.bloodType,
      dietType:typeData.dietType,
      disease:typeData.disease,
      exercise:typeData.exercise,
      allergies:typeData.allergies,
      sleepHours:typeData.sleepHours,
      medication:typeData.medication,
      agreement:typeData.agreement
    };

    console.log("RECORD",record);
    
    if(editingId===null){
      this.appState.setRecords([...this.appState.getRecords(),record]);
    }else{
      const updated=this.appState.getRecords().map(r=>r.id===editingId?record:r);

      this.appState.setRecords(updated);
      this.appState.setEditingId(null);
    }
    console.log("YEAHHH SUBMITTED!!")
    AppStorage.saveRecords(this.appState.getRecords());
     
    this.formState.clear();
    renderApp();
  }

  deleteRecord(id:number):void{
    const filtered=this.appState.getRecords().filter(r=>r.id!==id);
    this.appState.setRecords(filtered);
    AppStorage.saveRecords(filtered);
  }

  editRecord(id:number):void{
    const record=this.appState.getRecords().find(r=>r.id===id);
    if(!record) return;
    this.appState.setEditingId(id);

    // PRE-FILL THE FORM STATE
    Object.entries(record).forEach(([key,value])=>{
      if(key!=='id'){
        this.formState.setField(key as keyof PatientForm,value);
      }
    });
  }

  toggleTheme():void{
    this.themeState.setTheme(!this.themeState.getTheme());
    AppStorage.saveTheme(!this.themeState.getTheme());
    
  }
}

