// STRUCTURE OF PATIENT DATA

export interface PatientForm{
    id:number,
    fullName:string,
    dob:string,
    email:string,
    phone:string,
    address:string,
    height:string,
    weight:string,
    bloodPressure:string,
    bloodTempreture:string,
    bloodType:string,
    dietType:string,
    disease:string[],
    exercise:string,
    allergies:string,
    sleepHours:string,
    medication:string,
    agreement:boolean
}