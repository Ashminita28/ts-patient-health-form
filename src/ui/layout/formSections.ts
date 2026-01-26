import { createElement } from "../../utils/dom";

export function createSection(title:string):HTMLDivElement{
    const div=createElement('div');
    div.className='form';
    const h2=createElement('h2');
    h2.textContent=title;
    h2.className='section-title';
    div.appendChild(h2);
    return div;
}