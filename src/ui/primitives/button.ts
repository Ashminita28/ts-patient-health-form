import { createElement } from "../../utils/dom";

export function createButton(text:string,type:"button"|"submit"="button"):HTMLButtonElement{
    const button=createElement('button');
    button.textContent=text;
    button.type=type;

    return button;
}