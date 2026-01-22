import { createElement } from "../../../utils/dom";



export function confirmationModal() :HTMLElement{
    const dialogBox=createElement('dialog',{className:'success_msg'});
    // const successMsg=document.querySelector(".success_msg");
    const successBox=createElement('div',{className:'success_msg_container'});
    const confirmationHeading=createElement('h2',{className:'success_msg_head'});
    confirmationHeading.textContent='FORM SUBMITTED SUCCESSFULLY!!';
    const paraHeading=createElement('p',{className:'success_msg_note'});
    const okBtn=createElement('button',{className:'ok_btn'});
    okBtn.textContent='OK';
    okBtn.addEventListener('click',function(){
    //   successMsg?.closest();
    //   document.getElementById('patientForm').reset ();
    });

    successBox.append(confirmationHeading,paraHeading,okBtn);
    dialogBox.appendChild(successBox);
    return dialogBox;

    

     
}