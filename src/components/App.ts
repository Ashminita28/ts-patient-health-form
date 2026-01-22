
import { createForm } from './form-manager/create-form';
import { Table } from './table';
import { createElement } from "../utils/dom";


export function renderApp(): void {
  const root = document.getElementById('app');

  if (!root) {
    throw new Error('Root element #app not found');
  }

  root.innerHTML = ''; // Clear existing DOM

  const layout: HTMLDivElement = document.createElement('div');
  layout.className = 'app';
  const mainDiv=createElement('div',{className:'main'}) as HTMLDivElement ;
  const titleDiv=createElement('div',{className:'logo-box'});
  const headingForm=createElement('h1');
  headingForm.textContent='Patient Health Form';

  titleDiv.appendChild(headingForm);

mainDiv.append(titleDiv);
  mainDiv.appendChild(createForm())
  // Append components (order matters)
  const page=createElement('div',{className:'full-content'});
      page.appendChild(mainDiv);
      page.appendChild(Table());
  
      
  
  layout.appendChild(page);
  // layout.appendChild(Table());
  root.appendChild(layout);
}
