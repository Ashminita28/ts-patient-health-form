// import { createContainer } from "../../../primitives/div";
import { createCheckbox } from "../../primitives/checkbox";
import { createLabel } from "../../primitives/label";
import { createSection } from "../../layout/formSections";
import { createElement } from "../../../utils/dom";

export function agreementSection(){


    const section=createSection('Privacy Agreement');
    const checkboxGrp=createElement('div');
    checkboxGrp.className='checkbox-group';
    const agreementLabel=createLabel('*Privacy Agreement','agreement');
    const agreementInput=createCheckbox('agreement','agreement');
    checkboxGrp.append(agreementInput,agreementLabel)
    section.append(checkboxGrp);
    return{section,agreementInput};

}