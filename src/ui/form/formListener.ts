import type { AppLogic } from "../../logic/app.logic";
import { validateFields } from "../../validation/validationRules";
import { confirmationModal } from "../ConfirmationModal";

export function formListener(form:HTMLFormElement,appLogic:AppLogic):void{
    form.addEventListener('submit',(e)=>{
                e.preventDefault();
                let firstError:HTMLElement|null=null;

                const inputs=form.querySelectorAll<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>('[name]');
                inputs.forEach((input)=>{
                    const value=input instanceof HTMLInputElement && input.type==='checkbox'?input.checked:input.value;

                    const error=validateFields(input.name,value);
                const errorElement=form.querySelector(`[data-error="${input.name}"]`) as HTMLElement;

                if(error){
                    errorElement.textContent=error;
                    if(!firstError){
                        firstError=errorElement;
                    }else{
                        errorElement.textContent="";
                    }
                }
                });

                if(firstError){
                    // firstError.scrollIntoView({
                    //     behaviour:"smooth",
                    //     block:"center"
                    // });
                    return;
                }
                confirmationModal('FORM SUBMITTED',()=>{form.reset()})
                appLogic.submitForm();
                form.reset();
        
            });
}