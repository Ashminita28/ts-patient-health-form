import type { FormState } from "../../state/FormState";
import type { PatientForm } from "../../models/types";
import { validateFields } from "../../validation/validationRules";

export function listenFormInputs(form:HTMLFormElement,formState:FormState):void{
    form.addEventListener('input',(e)=>{
                const target=e.target as HTMLInputElement;
                if(!target.name) return;
    
                const field=target.name as keyof PatientForm;
            
    
                // FOR CHECKBOX ARRAY.
                if(target.type==="checkbox"){
                    const current=(formState.getField(field) as string[]||[]);
                    if(target.checked){
                        formState.setField(field,[...current,target.value]);
                    }else{
                        formState.setField(field,current.filter(v=>v!==target.value))
                    }
                    return;
                }    
                formState.setField(field,target.value);

                const error=validateFields(target.name,target.value);
                const errorElement=form.querySelector(`[data-error="${target.name}"]`) as HTMLElement;

                if(errorElement){
                    errorElement.textContent=error??"";
                }
            });
}