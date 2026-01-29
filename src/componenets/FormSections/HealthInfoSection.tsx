import React from "react";

import type { FormErrors, FormValues } from "../../types/formTypes";
import TextArea from "../FormFields/TextArea";
import TextInput from "../FormFields/TextInput";
import {
  bloodTypeOptions,
  chronicDiseasesOptions,
  dietTypeOptions,
  exerciseFrequencyOptions,
} from "../../constants/FormOptions";
import Dropdown from "../FormFields/Dropdown";
import CheckboxGroup from "../FormFields/CheckboxGroup";
import RadioGroup from "../FormFields/RadioGroup";

interface HealthInfoSectionProps {
  formData: FormValues;
  errors: FormErrors;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  onCheckboxChange: (disease: string) => void;
}

const HealthInfoSection: React.FC<HealthInfoSectionProps> = ({
  formData,
  errors,
  onChange,
  onCheckboxChange,
}) => {
  return (
    <>
      <div className="form">
        <h2 className="section-title">Health Information</h2>
        <div className="fields">
          <TextInput
            id="height"
            name="height"
            label="Height"
            type="number"
            value={formData.height}
            onChange={onChange}
            placeholder="Enter your height in CM"
            error={errors.height}
            required
          />
          <TextInput
            id="weight"
            name="weight"
            label="Weight"
            type="number"
            value={formData.weight}
            onChange={onChange}
            placeholder="Enter your weight in KG"
            error={errors.weight}
            required
          />
        </div>
        <div className="fields">
          <TextInput
            id="bloodPressure"
            name="bloodPressure"
            label="Blood Pressure(Optional)"
            type="number"
            value={formData.bloodPressure}
            onChange={onChange}
            placeholder="Enter your blood pressure in mmhg"
            error={errors.bloodPressure}
          />
          <TextInput
            id="bloodTempreture"
            name="bloodTempreture"
            label="Blood Tempreture(Optional)"
            type="number"
            value={formData.bloodTempreture}
            onChange={onChange}
            placeholder="Enter your blood tempreture in degree celsius"
            error={errors.bloodTempreture}
          />
        </div>
        <div className="fields">
          <Dropdown
            id="bloodType"
            name="bloodType"
            label="Blood Type"
            value={formData.bloodType}
            onChange={onChange}
            options={bloodTypeOptions}
            error={errors.bloodType}
            placeholder="Select Blood Type"
            required
          />
          <Dropdown
            id="dietType"
            name="dietType"
            label="Diet Type(Optional)"
            value={formData.dietType}
            onChange={onChange}
            options={dietTypeOptions}
            error={errors.dietType}
            placeholder="Select Diet Type"
          />
        </div>
        <div className="fields">
          <CheckboxGroup
            id="chronicDiseases"
            name="chronicDiseases"
            label="Chronic diseases(Optional)"
            options={chronicDiseasesOptions}
            selectedValues={formData.chronicDiseases}
            onChange={onCheckboxChange}
          />
          <RadioGroup
            id="exerciseFrequency"
            name="exerciseFrequency"
            label="Exercise Frequency"
            options={exerciseFrequencyOptions}
            selectedValue={formData.exerciseFrequency}
            onChange={onChange}
            error={errors.exerciseFrequency}
            required
          />
        </div>
        <div className="fields">
          <TextInput
            id="allergies"
            name="allergies"
            label="Allergies(Optional)"
            value={formData.allergies}
            onChange={onChange}
            placeholder="Mention your allergies"
            error={errors.allergies}
          />
          <TextInput
            id="sleepHours"
            name="sleepHours"
            label="Sleep Hours(Optional)"
            type="number"
            value={formData.sleepHours}
            onChange={onChange}
            placeholder="Enter your sleep hours"
            error={errors.sleepHours}
          />
        </div>
        <div className="fields full">
          <TextArea
            id="medication"
            name="medication"
            label="Current Medication(Optional)"
            value={formData.medication}
            onChange={onChange}
            placeholder="Mention your current medications(if any)"
            error={errors.medication}
            rows={3}
          />
        </div>
      </div>
    </>
  );
};

export default HealthInfoSection;
