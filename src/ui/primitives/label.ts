import { createElement } from "../../utils/dom";

export function createLabel(
    text:string,
    htmlFor?:string
):HTMLLabelElement{
    const label=createElement('label');
    label.textContent=text;
    if(htmlFor){
        label.htmlFor=htmlFor;
    }
    return label
}