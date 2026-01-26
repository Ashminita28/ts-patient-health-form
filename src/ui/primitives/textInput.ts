import { createElement } from "../../utils/dom";

export function createInput(type:string,name:string,id:string,placeholder?:string){
  const textinput=createElement('input');
  textinput.type=type;
  textinput.name=name;
  textinput.id=id;
  if (placeholder) {
    textinput.placeholder = placeholder;
  }
  return textinput;

}


