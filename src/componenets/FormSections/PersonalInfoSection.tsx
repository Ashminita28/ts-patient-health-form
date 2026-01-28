import React from "react";

import type { FormErrors, FormValues } from "../../types/formTypes";
import TextArea from "../FormFields/TextArea";
import TextInput from "../FormFields/TextInput";

interface PersonalInfoSectionProps {
  formData: FormValues;
  errors: FormErrors;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <>
      <div className="form">
        <h2 className="section-title">Personal Information</h2>
        <div className="info-card">
          <strong>Important:</strong>All fields marked with an asterik (*) are
          required.
        </div>
        <div className="fields">
          <TextInput
            id="name"
            name="name"
            label="Full Name"
            value={formData.name}
            onChange={onChange}
            error={errors.name}
            required
          />
          <TextInput
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={onChange}
            error={errors.dob}
            required
          />
        </div>
        <div className="fields">
          <TextInput
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={onChange}
            error={errors.email}
            required
          />
          <TextInput
            id="phone"
            name="phone"
            label="Phone Number"
            type="number"
            value={formData.phone}
            onChange={onChange}
            error={errors.phone}
            required
          />
        </div>
        <div className="fields full">
          <TextArea
            id="address"
            name="address"
            label="Address"
            value={formData.address}
            onChange={onChange}
            error={errors.address}
            rows={3}
            required
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfoSection;
