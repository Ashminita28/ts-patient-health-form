// // import type { FormErrors, FormValues } from "../types/formTypes";
// import React from "react";

// interface SubmissionResult {
//   success: boolean;
//   message: string;
//   data?: FormValues;
// }

// export const scrollToFirstError = (
//   errors: FormErrors,
//   formRef: React.RefObject<HTMLFormElement | null>,
// ): void => {
//   const firstError = Object.keys(errors)[0];

//   if (firstError && formRef.current) {
//     const errorElement = formRef.current.querySelector(
//       `[name="${firstError}"]`,
//     );

//     if (errorElement) {
//       errorElement.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//       (errorElement as HTMLElement).focus();
//     }
//   }
// };

// // export const formSubmission = (
// //   formData: FormValues,
// //   errors: FormErrors,
// // ): SubmissionResult => {
// //   const hasErrors = Object.values(errors).some(
// //     (error) => error && error.trim() !== "",
// //   );
// //   const duplicateValue=Object.values(formData).some(
// //     (formValue)=>formValue ==="email" && formValue==="phone",
// //   );

// //   if (hasErrors) {
// //     return {
// //       success: false,
// //       message: "Please fix all validations",
// //     };
// //   }
// //   if(duplicateValue){
// //     return{
// //       success:false,
// //       message:"Duplicate values not allowed",
// //     }
// //   }

// //   return {
// //     success: true,
// //     message: "Form submitted successfully",
// //     data: formData,
// //   };
// // };
