import React from "react";
import { FormManagement } from "./hooks/FormManagement";
import { formSubmission } from "./services/submissionServices";
import HealthForm from "./componenets/HealthForm";

const App: React.FC = () => {
  const {
    formData,
    errors,
    formRef,
    handleInputChange,
    handleCheckboxChange,
    resetForm,
    validateAllFields,
  } = FormManagement();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAllFields();

    // if(Object.keys(validationErrors).length>0){
    //   scrollToFirstError(validationErrors,formRef);
    //   return;
    // }

    const result = formSubmission(formData, validationErrors);

    if (!result.success) {
      alert("jkjkjkj");
      return;
    }

    resetForm();
  };

  return (
    <HealthForm
      formData={formData}
      errors={errors}
      onInputChange={handleInputChange}
      onCheckboxChange={handleCheckboxChange}
      onSubmit={handleFormSubmit}
      formRef={formRef}
    />
  );
};

export default App;
