import { createElement } from "../utils/dom";

export function confirmationModal(message:string,onConfirm:()=>void) :void{
    const dialogBox=createElement('dialog');
    dialogBox.className='success_msg';
    const successBox=createElement('div');
    successBox.className='success_msg_container';
    const confirmationHeading=createElement('h2');
    confirmationHeading.textContent=message;
    confirmationHeading.className='success_msg_head';
    const actions=createElement('div');
    actions.className='modal-actions';

    const confirmBtn=createElement('button');
    confirmBtn.className='ok_btn';
    confirmBtn.textContent='Confirm';

    const cancelBtn=createElement('button');
    cancelBtn.className='ok_btn';
    cancelBtn.textContent='Cancel';

    confirmBtn.addEventListener('click',()=>{
        onConfirm();
        dialogBox.close();
        dialogBox.remove();
    });

    cancelBtn.addEventListener('click',()=>{
        dialogBox.close();
        dialogBox.remove();
    });

    actions.append(confirmBtn,cancelBtn);
    successBox.append(confirmationHeading,actions);
    dialogBox.append(successBox);

    console.log("HIIIIIII")

    document.body.appendChild(dialogBox);
    dialogBox.showModal();    
}

