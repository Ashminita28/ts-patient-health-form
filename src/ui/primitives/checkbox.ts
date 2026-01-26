import { createElement } from "../../utils/dom";

export function createCheckbox(name:string,id:string,value?:string,checked:boolean=false):HTMLInputElement{
    const checkbox=createElement('input');
    checkbox.type='checkbox';
    checkbox.name=name;
    checkbox.id=id;
    if(value){
        checkbox.value=value;
    }
    checkbox.checked=checked;

    return checkbox;
}