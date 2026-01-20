
import {createInput, element} from "../utils/dom";


export function createForm():HTMLFormElement{
    const form=element('form') as HTMLFormElement;

    const nameInput=createInput('text','fullName','fullName','Enter your name');
    const dateInput=createInput('date','dob','dob','Enter birth date');
    const phoneInput=createInput('tel','phone','phone','Enter phone number');
    // const addressInput=createInput('text','Enter name');
    const emailInput=createInput('email','email','email','Enter your email');
    const heightInput=createInput('number','height','height','Enter name');
    const weightInput=createInput('number','weight','weight','Enter name');
    const bloodPressureInput=createInput('number','bloodPressure','bloodPressure','Enter name');
    const bloodTempInput=createInput('number','bloodTemp','bloodTemp','Enter name');
    const allergiesInput=createInput('text','allergy','allergy','Enter name');
    const currMedInput=createInput('text','currMed','currMed','Enter name');

    const diseases=['a','b','c'];
    const diseaseBox=element('div');
    diseases.forEach(d=>{
        const checkbox=element('input') as HTMLInputElement;
        checkbox.type='checkbox';
        checkbox.value=d;
        checkbox.name='disease'


        const label=element('label');
        label.textContent='CHRONIC DISEASE'
        label.append(checkbox,d);

        diseaseBox.appendChild(label);
    })
    

    const exerciseBox=element('div');
    const exercises=['a','b','c'];
    exercises.forEach(r=>{
        const radio=element('input') as HTMLInputElement;
        radio.type='radio';
        radio.value=r;
        radio.name='exercise'

        const label=element('lable');
        label.append(radio,r);

        exerciseBox.appendChild(label);
    })

    const dietType=element('select') ;
    const diets=['1','2','3','4'];
    diets.forEach(t=>{
        const option=element('option') as HTMLOptionElement;
        option.value=t;
        option.textContent=t;
        dietType.appendChild(option);
    })

    

    const privacy=element('input') as HTMLInputElement;
    privacy.setAttribute('type','checkbox');

    const submitBtn=element('button') as HTMLButtonElement;
    submitBtn.textContent='Submit'
        form.append(nameInput,dateInput,emailInput,phoneInput,heightInput,weightInput,bloodPressureInput,bloodTempInput,dietType,diseaseBox,allergiesInput,currMedInput,submitBtn,exerciseBox);
        form.addEventListener('submit', (e: SubmitEvent): void => {
    e.preventDefault();

    // mutate state here
    // persist if required
    // renderApp();

    alert("form submitted successfully")
  });

  return form;
}



