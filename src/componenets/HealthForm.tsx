import Button from "./Common/Button";
// import TextInput from "./FormFields/TextInput";
import React from "react";
import type { FormValues, FormErrors } from "../types/formTypes";
// import CheckboxGroup from "./FormFields/CheckboxGroup";
// import { chronicDiseasesOptions } from "../constants/FormOptions";

import PersonalInfoSection from "./FormSections/PersonalInfoSection";
import HealthInfoSection from "./FormSections/HealthInfoSection";
import "../styles/style.css";
import PrivacyConsentSection from "./FormSections/PrivacyConsentSection";

interface HealthFormProps {
  formData: FormValues;
  errors: FormErrors;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onCheckboxChange: (disease: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}

const HealthForm: React.FC<HealthFormProps> = ({
  formData,
  errors,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  formRef,
}) => {
  return (
    <>
      <div className="main">
        <div className="logo-box">
          <h1>Patient Health Form</h1>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="form-content">
          <PersonalInfoSection
            formData={formData}
            errors={errors}
            onChange={onInputChange}
          />
          <HealthInfoSection
            formData={formData}
            errors={errors}
            onChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
          />
          <PrivacyConsentSection
            formData={formData}
            errors={errors}
            onChange={onInputChange}
          />
          <Button type="submit" className="btn">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default HealthForm;
