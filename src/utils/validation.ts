import type { FormValues, FormErrors } from "../types/formTypes";

export const validateField = (
  name: string,
  value: string | boolean,
): string => {
  switch (name) {
    case "name":
      if (typeof value === "string") {
        if (!value || value.trim() === "") {
          return "Name is required";
        }
        if (/[^A-Za-z]+$/.test(value)) {
          return "*Letters only";
        }
      }
      return "";

    case "email":
      if (typeof value === "string") {
        if (!value || value.trim() === "") {
          return "*Email required";
        }
        const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!ePattern.test(value)) {
          return "*Invalid email format";
        }
      }
      return "";

    case "dob":
      if (typeof value === "string") {
        const currentDate = new Date();
        const dobDate = new Date(value);
        if (!value || value.trim() === "") {
          return "*Date of Birth required";
        }
        if (dobDate > currentDate) {
          return "*Date of Birth cannot be in future";
        }
        let age = currentDate.getFullYear() - dobDate.getFullYear();
        const month = currentDate.getMonth() - dobDate.getMonth();

        if (
          month < 0 ||
          (month === 0 && currentDate.getDate() < dobDate.getDate())
        ) {
          age--;
        }
        if (age < 18) {
          return "*Age should be above 18";
        }
      }
      return "";

    case "phone":
      if (typeof value === "string") {
        if (value.length > 10) {
          return "10 digits only";
        }
        if (value === "") {
          return "*Phone number required";
        }
      }

      return "";

    case "address":
      if (typeof value === "string") {
        if (!value) {
          return "*Address required";
        }
      }

      return "";

    case "height":
      if (typeof value === "string") {
        if (!value || value.trim() === "") {
          return "*Height required";
        }
        if (Number(value) < 30 || Number(value) > 250) {
          return "*Height must be between (30 to 250)cm";
        }
      }

      return "";
    case "weight":
      if (typeof value === "string") {
        if (!value || value.trim() === "") {
          return "*Weight required";
        }
        if (Number(value) < 30 || Number(value) > 200) {
          return "*Weight must be between (30 to 200)kg";
        }
      }

      return "";

    case "bloodPressure":
      if (typeof value === "string") {
        if (!value || value.trim() === "") {
          return "";
        }
        if (Number(value) < 70 || Number(value) > 250) {
          return "*Blood Pressure must be between (70-250 mmHg)";
        }
      }

      return "";

    case "bloodTempreture":
      if (typeof value === "string") {
        if (!value || value.trim() === "") {
          return "";
        }
        if (Number(value) < 30 || Number(value) > 45) {
          return "*Blood temprature must be between (30 - 45 degree celcius)";
        }
      }

      return " ";

    case "bloodType":
      if (typeof value === "string") {
        if (!value || value === "") {
          return "*Select blood group";
        }
      }

      return "";

    case "exerciseFrequency":
      if (typeof value === "string") {
        if (!value || value === "") {
          return "*Select exercise frequency";
        }
      }
      return "";

    case "sleepHours":
      if (typeof value === "string") {
        if (Number(value) < 0 || Number(value) > 24)
          return "*Sleep hour must be betwwen 0 to 24 hours";
      }

      return "";

    case "privacyConsent":
      if (typeof value === "boolean") {
        if (!value) {
          return "*Please agree to the privacy policy";
        }
      }
      return "";

    default:
      return "";
  }
};

export const validateForm = (formData: FormValues): FormErrors => {
  const errors: FormErrors = {};
  const nameError = validateField("name", formData.name);
  if (nameError) errors.name = nameError;
  const phoneError = validateField("phone", formData.phone);
  if (phoneError) errors.phone = phoneError;
  const dobError = validateField("dob", formData.dob);
  if (dobError) errors.dob = dobError;
  const emailError = validateField("email", formData.email);
  if (emailError) errors.email = emailError;
  const addressError = validateField("address", formData.address);
  if (addressError) errors.address = addressError;
  const tempError = validateField("bloodTempreture", formData.bloodTempreture);
  if (tempError) errors.bloodTempreture = tempError;
  const pressureError = validateField("bloodPressure", formData.bloodPressure);
  if (pressureError) errors.bloodPressure = pressureError;
  const bloodTypeError = validateField("bloodType", formData.bloodType);
  if (bloodTypeError) errors.bloodType = bloodTypeError;
  const heightError = validateField("height", formData.height);
  const exerciseFrequencyError = validateField(
    "exerciseFrequency",
    formData.exerciseFrequency,
  );
  if (exerciseFrequencyError) errors.exerciseFrequency = exerciseFrequencyError;
  if (heightError) errors.height = heightError;
  const weightError = validateField("weight", formData.weight);
  if (weightError) errors.weight = weightError;
  const sleepHoursError = validateField("sleepHours", formData.sleepHours);
  if (sleepHoursError) errors.sleepHours = sleepHoursError;
  const privacyError = validateField("privacyConsent", formData.privacyConsent);
  if (privacyError) errors.privacyConsent = false;
  return errors;
};
