import type { FormErrors, FormValues } from "../types/formTypes";

interface SubmissionResult {
  success: boolean;
  message: string;
  data?: FormValues;
}

export const scrollToFirstError = (
  errors: FormErrors,
  formRef: React.RefObject<HTMLFormElement | null>,
): void => {
  const firstError = Object.keys(errors)[0];

  if (firstError && formRef.current) {
    const errorElement = formRef.current.querySelector(
      `[name="${firstError}"]`,
    );

    if (errorElement) {
      errorElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      (errorElement as HTMLElement).focus();
    }
  }
};

export const formSubmission = (
  formData: FormValues,
  errors: FormErrors,
): SubmissionResult => {
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix all validations",
    };
  }

  return {
    success: true,
    message: "Form submitted successfully",
    data: formData,
  };
};

export const showSuccessNotification = (message: string): void => {
  alert(message);
};

// export const showErrorNotification = (message: string): void => {
//   alert(message);
// };
