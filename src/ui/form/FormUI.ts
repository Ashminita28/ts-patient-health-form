import type { AppLogic } from "../../logic/app.logic";
import type { FormState } from "../../state/FormState";
import { Form } from "./Form";
import { formListener } from "./formListener";
import { listenFormInputs } from "./inputHandler";
import { preFillData } from "./preFillFormData";

export function FormUi(formState:FormState,appLogic:AppLogic):HTMLFormElement{
    const form=Form();
    listenFormInputs(form,formState);
    formListener(form,appLogic);
    preFillData(form,formState.getAll());
    return form;
}