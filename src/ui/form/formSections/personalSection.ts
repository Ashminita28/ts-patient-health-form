
import { createInput } from "../../primitives/textInput";
import { createLabel } from "../../primitives/label";
import { createSection } from "../../layout/formSections";
import { createTextArea } from "../../primitives/textArea";
import { createElement } from "../../../utils/dom";
import { fields } from "../../layout/fields";
import { inputField } from "../../layout/inputField";

export function personalSection(){
    const section=createSection('Personal Details');

    const infocard=createElement('div');
    infocard.className='info-card';
    infocard.innerHTML='<strong>Important:</strong>All fields marked with an asterik (*) are required.'


    const field1=fields();  //MAGIC HAPPENING.
    const nameDiv=inputField();
    const nameLabel=createLabel('*Full Name','fullName');
    const nameInput=createInput('text','fullName','fullName','Enter your name');
    const errorDiv=createElement('span');
    errorDiv.dataset.error='fullName'
    errorDiv.className='error'
    nameDiv.append(nameLabel,nameInput,errorDiv);
    
    const dobDiv=inputField();
    const dobLabel=createLabel("*Date of Birth",'dob');
    const dobInput=createInput('date','dob','dob','Enter birth date');
    dobDiv.append(dobLabel,dobInput);
    field1.append(nameDiv,dobDiv);


    const field2=fields();
    const emailDiv=inputField();
    const emailLabel=createLabel('*Email','email');
    const emailInput=createInput('email','email','email','Enter your email');
    emailDiv.append(emailLabel,emailInput);

    const phoneDiv=inputField();
    const phoneLabel=createLabel('*Phone Number','phone');
    const phoneInput=createInput('tel','phone','phone','Enter phone number');
    phoneDiv.append(phoneLabel,phoneInput);
    field2.append(emailDiv,phoneDiv);


    const field3=createElement('div');
    field1.className='fields full';
    const addresDiv=createElement('div');
    addresDiv.className='input-field';
    const addressLabel=createLabel('*Address','address');
    const addressInput=createTextArea('address','address','Enter your address');
    addresDiv.append(addressLabel,addressInput);
    field3.append(addresDiv);

    section.append(infocard,field1,field2,field3);

    return {section,nameInput,nameLabel,dobInput,dobLabel,emailInput,emailLabel,phoneInput,phoneLabel,addressInput,addressLabel};

}