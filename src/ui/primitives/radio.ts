import { createElement } from "../../utils/dom"

export function createRadio(name:string,id:string,value?:string,checked:boolean=false):HTMLInputElement{
    const radio=createElement('input');
    radio.type='radio';
    radio.name=name;
    radio.id=id;
    if (value) {
    radio.value = value;
    }
    radio.checked=checked;
    return radio;
}