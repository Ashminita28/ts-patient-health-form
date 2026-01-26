import { createElement } from "../../utils/dom";

export function createSelect(id:string,name:string,options:string[]):HTMLSelectElement{
    const select=createElement('select');
    select.id=id;
    select.name=name;

    options.forEach(optionText=>{
        const option=createElement('option');
        option.value=optionText;
        option.textContent=optionText;
        select.appendChild(option);
    });
    return select;
}