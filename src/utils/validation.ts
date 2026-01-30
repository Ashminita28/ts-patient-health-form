import { z } from 'zod';

export const patientSchema = z.object({
  id: z.string(),

  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .regex(/^[A-Za-z\s]+$/, 'Name should contain only letters'),

  email: z.email(),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine(
      (val) => /^\d{10}$/.test(val.replace(/[-\s]/g, '')),
      'Please enter a valid 10-digit phone number',
    ),

  dob: z.string().min(1, 'Date of birth is required'),

  address: z.string().min(1, 'Address is required'),

  bloodTempreture: z
    .string()
    .min(1, 'Blood temperature is required')
    .refine((val) => {
      const temp = parseFloat(val);
      return !isNaN(temp) && temp >= 95 && temp <= 105;
    }, 'Temperature should be between 95°F and 105°F'),

  bloodPressure: z
    .string()
    .min(1, 'Blood pressure is required')
    .regex(/^\d{2,3}\/\d{2,3}$/, 'Format should be like 120/80'),

  height: z
    .string()
    .min(1, 'Height is required')
    .refine((val) => {
      const height = parseFloat(val);
      return !isNaN(height) && height > 0;
    }, 'Please enter a valid height'),

  weight: z
    .string()
    .min(1, 'Weight is required')
    .refine((val) => {
      const weight = parseFloat(val);
      return !isNaN(weight) && weight > 0;
    }, 'Please enter a valid weight'),

  bloodType: z
    .string()
    .min(1, 'Blood type is required')
    .refine(
      (val) => ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].includes(val),
      'Invalid blood type',
    ),
  dietType: z.string(),
  chronicDiseases: z.array(z.string()),

  exerciseFrequency: z.string().min(1, 'Exercise frequency is required'),

  allergies: z.string(),
  medication: z.string(),
  sleepHours: z.string(),

  privacyConsent: z
    .boolean()
    .refine((val) => val === true, 'You must accept the privacy policy'),
});

export type FormValues = z.infer<typeof patientSchema>;
