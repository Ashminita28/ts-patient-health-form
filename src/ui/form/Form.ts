import { createElement } from "../../utils/dom";
import { personalSection } from "./formSections/personalSection";
import { healthSection } from "./formSections/healthSection";
import { agreementSection } from "./formSections/agreementSection";
import { createButton } from "../primitives/button";

export function Form():HTMLFormElement{
    const form=createElement('form');
    const personal=personalSection();
    const health=healthSection();
    const agreement=agreementSection();
    const submitBtn=createButton('Submit','submit');
    submitBtn.className='btn'
    form.append(personal.section,health.section,agreement.section,submitBtn);
    return form;
}