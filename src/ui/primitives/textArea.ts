import { createElement } from "../../utils/dom";


export function createTextArea(name:string,id:string,placeholder?:string):HTMLTextAreaElement{
    const textarea=createElement('textarea');
    textarea.name=name;
    textarea.id=id;
    if (placeholder) {
    textarea.placeholder = placeholder;
  }

  return textarea;
}