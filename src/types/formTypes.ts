export interface FormValues {
  id?: number;
  name: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  height: string;
  weight: string;
  bloodPressure: string;
  bloodTempreture: string;
  bloodType: string;
  dietType: string;
  allergies: string;
  sleepHours: string;
  chronicDiseases: string[];
  exerciseFrequency: string;
  medication: string;
  privacyConsent: boolean;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  dob?: string;
  address?: string;
  height?: string;
  weight?: string;
  bloodPressure?: string;
  bloodTempreture?: string;
  bloodType?: string;
  dietType?: string;
  allergies?: string;
  sleepHours?: string;
  exerciseFrequency?: string;
  medication?: string;
  privacyConsent?: boolean;
}
