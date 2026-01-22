export function validateFields(fieldName: string, value: string) {
  let error = "";

  //  VALIDATE NAME FIELD
  if (fieldName === "fullName") {
    if (value.trim() === "") {
      error = "*Name is required";
    }
    if (/[^A-Za-z]+$/.test(value.trim())) {
      error = "*Letters only";
    }
  }
 

  // VALIDATE  EMAIL FIELD
  if (fieldName === "email") {
    const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      error = "*Email required";
    }
    if (!ePattern.test(value.trim())) {
      error = "*Invalid email format";
    }
  }
  
  // VALIDATE PHONE FIELD
  if (fieldName === "phone") {
    let pval = value.trim();
    if (pval.length > 10) {
      pval = pval.slice(0, 10);
    }
    if (pval === "") {
      error = "*Phone number required";
    }
  }
  
  // VALIDATE ADDRESS FIELD

  if(fieldName==='address'){
    const aval = value.trim();
    if (!aval) {
      error="*Address required";
    }
  }

  // VALID HEIGHT FIELD

  if(fieldName==='height'){
    const hval = Number(value);
  if (!hval) {
    error = "*Height required";
  }
  if (hval < 30 || hval > 250) {
   error = "*Height must be between 100 to 250";
  }
  }

  // VALID WEIGHT FIELD
  if(fieldName==='weight'){
    const wval = Number(value);
  if (!wval) {
    error = "*Height required";
  }
  if (wval < 30 || wval > 200) {
   error = "*Height must be between 100 to 250";
  }
  }

  // VALIDATE DROP-DOWN FIELD
  if(fieldName==='bloodType'){
    if (value==="") {
    error= "*Select blood group";
  }
  }

  // VALIDATE BP INPUT FIELD
  if(fieldName==='bloodPressure'){
    const bpval=Number(value);
  if(!bpval){
    error="";
  }
  if (bpval < 70 || bpval > 250) {
    error = "*Blood Pressure must be between (70-250 mmHg)";
  }
  }

  // VALIDATE BT FIELD
  if(fieldName==='bloodTempreture'){
   
    const btval = Number(value);
  if(!btval){
    error="";
  } 
  if (btval < 30 || btval > 45) {
    error =
      "*Blood temprature must be between (30 - 45 degree celcius)";
  }
  }

  // VALIDATE SLEEPHOURS FIELD
  if(fieldName==='sleepHours')
  {
    const sval = Number(value);
  if (sval < 0 || sval > 24) {
    error = "*Sleep hour must be betwwen 0 to 24 hours";
    return false;
  }
  }


  // PRIVACY VALIDATION
  if (fieldName === "privacy") {
    if (!value) {
      error = "*Please agree to the privacy policy";
      return false;
    }
  }

  // CHECKBOX VALIDATION

  


  return error;
}

// import { PatientForm } from "../types/patientForm-types";

// export default{
//   required:(value:string|boolean)=>{
//     if(typeof value==='boolean')
//     {
//       return value===true;
//     }
//     return value.trim() !=='';
//   },


// }
