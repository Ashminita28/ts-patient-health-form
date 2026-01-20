export type BloodType=''|'A+'|'A-'|'B+'|'B-'|'O+'|'O-'|'AB+'|'AB-';

export type ExerciseFreq='Daily'|'Weekly'|'Never';

export type DietType=''|'Mediterranean Diet'|'DASH Diet'|'Plant-Based and Vegan Diets';

// export type Diseases='Heart'|'Diabetes'|'Cancer'|'BP';

export interface Datas{
    fullName: string,
    dob:string,
    email:string,
    phone:number,
    address:string,
    height:number,
    weight:number,
    bloodPressure:number,
    bloodTemp:number,
    bloodType:BloodType,
    dietType:DietType,
    privacy:string,
    disease:string[],
    exercise:ExerciseFreq,
    sleepHours:number,
    currentMed:string,
    allergies:string,
}

