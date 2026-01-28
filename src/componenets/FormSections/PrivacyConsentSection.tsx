import React from "react";

import type { FormErrors, FormValues } from "../../types/formTypes";
import Checkbox from "../FormFields/Checkbox";

interface PrivacyConsentSectionProps {
  formData: FormValues;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrivacyConsentSection: React.FC<PrivacyConsentSectionProps> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <>
      <div className="form submit-section">
        <h2 className="section-title">Privacy Agreement</h2>
        <Checkbox
          id="privacyConsent"
          name="privacyConsent"
          label="Privacy Consent"
          checked={formData.privacyConsent}
          onChange={onChange}
          error={errors.privacyConsent}
          required
        />
      </div>
    </>
  );
};

export default PrivacyConsentSection;
