import type { PatientForm } from "../../models/types";

export function preFillData(form:HTMLFormElement,data:Partial<PatientForm>):void{
    Object.entries(data).forEach(([key,value])=>{
        if(key=='id') return;
        const inputs=form.querySelectorAll<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>(`[name="${key}"]`);
        inputs.forEach((element)=>{
            if(element instanceof HTMLInputElement && element.type==='checkbox'){
                if(Array.isArray(value)){
                    element.checked=value.includes(element.value);
                }else{
                    element.checked=Boolean(value);
                }
                return;
            }
            if(element instanceof HTMLInputElement && element.type==='radio'){
                element.checked=element.value===value;
                return;
            }else{
                element.value=value!=null?String(value):"";
            }
        });
    });
}