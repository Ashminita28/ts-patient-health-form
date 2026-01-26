import { createElement } from "../../utils/dom";

export function fields():HTMLDivElement{
    const div=createElement('div');
    div.className='fields';
    return div;
}