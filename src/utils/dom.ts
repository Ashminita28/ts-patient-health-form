export function element(tag:string){
    return document.createElement(tag);
}

// export function createInput(type:string,placeholder:string){
//     const input=document.createElement('input');
//     input.type=type;
//     input.placeholder=placeholder;
//     return input;
// }


// import { createElement } from '../../lib/createElement';



export function createInput(

  type: string,

  name: string,

  id: string,

  placeholder?: string,

  value?: string,

): HTMLInputElement {

  const input =document.createElement('input') as HTMLInputElement;

  input.type = type;

  input.name = name;

  input.id = id;

  if (placeholder) {

    input.placeholder = placeholder;

  }

  if (value) {

    input.value = value;

  }

  return input;

}