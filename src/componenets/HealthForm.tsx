import Button from "./Common/Button";
import React from "react";
import type { FormValues, FormErrors } from "../types/formTypes";
import PersonalInfoSection from "./FormSections/PersonalInfoSection";
import HealthInfoSection from "./FormSections/HealthInfoSection";
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
  isEditing?: boolean;
}

const HealthForm: React.FC<HealthFormProps> = ({
  formData,
  errors,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  formRef,
  isEditing = false,
}) => {
  console.log("RENDER");

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
            {isEditing ? "Update" : "Submit"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default HealthForm;
