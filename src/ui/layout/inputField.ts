import { createElement } from "../../utils/dom";
// import { createLabel } from "./label";

export function inputField():HTMLDivElement{
    const div=createElement('div');
    div.className='input-field';
    return div;
}