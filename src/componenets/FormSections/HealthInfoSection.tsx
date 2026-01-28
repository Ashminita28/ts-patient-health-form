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
            error={errors.weight}
            required
          />
        </div>
        <div className="fields">
          <TextInput
            id="bloodPressure"
            name="bloodPressure"
            label="Blood Pressure"
            type="number"
            value={formData.bloodPressure}
            onChange={onChange}
            error={errors.bloodPressure}
          />
          <TextInput
            id="bloodTempreture"
            name="bloodTempreture"
            label="Blood Tempreture"
            type="number"
            value={formData.bloodTempreture}
            onChange={onChange}
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
            label="Diet Type"
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
            label="Chronic diseases"
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
            label="Allergies"
            value={formData.allergies}
            onChange={onChange}
            error={errors.allergies}
          />
          <TextInput
            id="sleepHours"
            name="sleepHours"
            label="Sleep Hours"
            type="number"
            value={formData.sleepHours}
            onChange={onChange}
            error={errors.sleepHours}
          />
        </div>
        <div className="fields full">
          <TextArea
            id="medication"
            name="medication"
            label="Current Medication"
            value={formData.medication}
            onChange={onChange}
            error={errors.medication}
            rows={3}
          />
        </div>
      </div>
    </>
  );
};

export default HealthInfoSection;
