import { saveState } from "./app.storage";
import type { PatientForm } from "./types/patientForm-types";
import { state } from "./app.state";

// ADD RECORD 
export function addRecord(data: PatientForm): void {
  state.records.push(data);
  state.editIndex = null;
  saveState();
}

// UPDATE RECORD IN THE TABLE AND STORAGE
export function updateRecord(data: PatientForm) {
  if (state.editIndex != null) {
    state.records[state.editIndex] = data;
    state.editIndex = null;
    saveState();
  }
}

// DELETE RECORD
export function deleteRecord(index: number) {
  state.records.splice(index, 1);
  saveState();
}

// EDIT RECORD
export function editRecord(index: number) {
  const patient = state.records[index];
  state.editIndex = index;

  const name = document.getElementById("fullName") as HTMLInputElement;
  const dob = document.getElementById("dob") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const phone = document.getElementById("phone") as HTMLInputElement;
  const address = document.getElementById("address") as HTMLTextAreaElement;
  const height = document.getElementById("height") as HTMLInputElement;
  const weight = document.getElementById("weight") as HTMLInputElement;
  const bloodPressure = document.getElementById(
    "bloodPressure",
  ) as HTMLInputElement;
  const bloodTempreture = document.getElementById(
    "bloodTempreture",
  ) as HTMLInputElement;
  const bloodType = document.getElementById("bloodType") as HTMLSelectElement;
  const dietType = document.getElementById("dietType") as HTMLSelectElement;
  const sleepHours = document.getElementById("sleepHours") as HTMLInputElement;
  const allergies = document.getElementById("allergies") as HTMLInputElement;
  const medication = document.getElementById("currMedication") as HTMLInputElement;


//   PRE-FILLS THE DATA INTO THE FORM.
  name.value = patient.fullName;
  dob.value = patient.dob;
  email.value = patient.email;
  phone.value = patient.phone;
  address.value = patient.address;
  height.value = patient.height;
  weight.value = patient.weight;
  bloodPressure.value = patient.bloodPressure;
  bloodTempreture.value = patient.bloodTempreture;
  bloodType.value = patient.bloodType;
  dietType.value = patient.dietType;
  allergies.value = patient.allergies;
  sleepHours.value = patient.sleepHours;
  medication.value = patient.medication;

  const diseases = document.querySelectorAll(
    'input[name="disease"]',
  ) as NodeListOf<HTMLInputElement>;
  diseases.forEach((c) => {
    c.checked = patient.diseases.includes(c.value);
  });

  const exercises = document.querySelectorAll(
    'input[name="exercise"]',
  ) as NodeListOf<HTMLInputElement>;
  exercises.forEach((r) => {
    r.checked = r.value === patient.exerciseFrequency;
  });  
}
