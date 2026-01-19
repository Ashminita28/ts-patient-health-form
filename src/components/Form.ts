import {el} from "../utils/dom";


export function createForm():HTMLFormElement{
    const form=el("form");

    const inputName=el("input");
    inputName.type="text";
    inputName.placeholder="Name";

    const inputEmail=el('input');
    inputEmail.type="email";
    inputEmail.placeholder='Email';

    form.append(inputName,inputEmail);
    return form;
}

