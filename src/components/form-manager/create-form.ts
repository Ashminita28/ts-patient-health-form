
import { createElement} from "../../utils/dom";
import { state } from "../../app.state";
import type { PatientForm } from "../../types/patientForm-types";
import { addRecord, updateRecord } from "../../app.logic";
import { renderApp } from "../App";
import { validateFields } from "../../utils/validations";


export function createForm():HTMLFormElement{


    const form=createElement('form',{className:'form-content'}) as HTMLFormElement ;

    // FIRST DIV FOR PERSONAL DETAILS.
    const div1=createElement('div',{className:'form'});
    const divHeading=createElement('h2',{className:'section-title'});
    divHeading.textContent="Personal Details";
    const infoCard=createElement('div',{className:'info-card'});
    infoCard.textContent=`Important:All fields marked with an asterik (*)
              are required.`

    // NAME FIELD
    const field1=createElement('div',{className:'fields'});
    const nameDiv=createElement('div',{className:'input-field'})
    const nameLabel=createElement('label',{text:'Full Name *'});
    const nameInput=createElement('input',{attributes:{type:'text',id:'fullName'}}) as HTMLInputElement;
    const nameError=createElement('span',{className:'error'});
    nameInput.addEventListener('input',function(){
        const error=validateFields('fullName',nameInput.value);
        if(error){
            nameError.textContent=error;
        }else{
            nameError.textContent='';
        }
    });
    nameDiv.append(nameLabel,nameInput,nameError);

    // DOB FIELD
    const dobDiv=createElement('div',{className:'input-field'})
    const dobLabel=createElement('label',{text:'Date Of Birth *'});
    const dobInput=createElement('input',{attributes:{type:'Date',id:'dob'}}) as HTMLInputElement;
    const dobError=createElement('span',{className:'error'});
    dobInput.addEventListener('input',function(){
        const error=validateFields('dob',dobInput.value);
        if(error){
            dobError.textContent=error;
        }else{
            dobError.textContent='';
        }
    });
    dobDiv.append(dobLabel,dobInput,dobError);
    field1.append(nameDiv,dobDiv);

    // EMAIL FIELD
    const field2=createElement('div',{className:'fields'});
    const emailDiv=createElement('div',{className:'input-field'})
    const emailLabel=createElement('label',{text:'Email *'});
    const emailInput=createElement('input',{attributes:{type:'email',id:'email'}}) as HTMLInputElement;
    const emailError=createElement('span',{className:'error'});
    emailInput.addEventListener('input',function(){
        const error=validateFields('email',emailInput.value);
        if(error){
            emailError.textContent=error;
        }else{
            emailError.textContent='';
        }
    });
    emailDiv.append(emailLabel,emailInput,emailError);

    // PHONE FIELD
    const phoneDiv=createElement('div',{className:'input-field'})
    const phoneLabel=createElement('label',{text:'Phone Number *'});
    const phoneInput=createElement('input',{attributes:{type:'number',id:'phone'}}) as HTMLInputElement;
    const phoneError=createElement('span',{className:'error'});
    phoneInput.addEventListener('input',function(){
        const error=validateFields('phone',phoneInput.value);
        if(error){
            phoneError.textContent=error;
        }else{
            phoneError.textContent='';
        }
    });
    phoneDiv.append(phoneLabel,phoneInput,phoneError);
    field2.append(emailDiv,phoneDiv);

    // ADDRESS FIELD
    const field3=createElement('div',{className:'fields full'})
    const addressDiv=createElement('div',{className:'input-field'})
    const addressLabel=createElement('label',{text:'Address *'});
    const addressInput=createElement('textarea',{attributes:{id:'address'}});
    const addressError=createElement('span',{className:'error'});
    addressInput.addEventListener('input',function(){
        const error=validateFields('address',addressInput.value);
        if(error){
            addressError.textContent=error;
        }else{
            addressError.textContent='';
        }
    });
    addressDiv.append(addressLabel,addressInput,addressError);
    field3.append(addressDiv);

    div1.append(divHeading,infoCard,field1,field2,field3);


    //  SECOND DIV FOR HEALTH DETAILS
    const div2=createElement('div',{className:'form'});
    const div2Heading=createElement('h2',{className:'section-title'});
    div2Heading.textContent='Health Details'
    // HEIGHT FIELD
    const field4=createElement('div',{className:'fields'});
    const heightDiv=createElement('div',{className:'input-field'})
    const heightLabel=createElement('label',{text:'Height *'});
    const heightInput=createElement('input',{attributes:{type:'number',id:'height'}}) as HTMLInputElement;
    const heightError=createElement('span',{className:'error'});
    heightInput.addEventListener('input',function(){
        const error=validateFields('height',heightInput.value);
        if(error){
            heightError.textContent=error;
        }else{
            heightError.textContent="";
        }
    });
    heightDiv.append(heightLabel,heightInput,heightError);

    //WEIGHT FIELD
    const weightDiv=createElement('div',{className:'input-field'})
    const weightLabel=createElement('label',{text:'Weight *'});
    const weightInput=createElement('input',{attributes:{type:'number',id:'weight'}}) as HTMLInputElement;
    const weightError=createElement('span',{className:'error'});
    weightInput.addEventListener('input',function(){
        const error=validateFields('weight',weightInput.value);
        if(error){
            weightError.textContent=error;
        }else{
            weightError.textContent='';
        }
    });
    weightDiv.append(weightLabel,weightInput,weightError);
    field4.append(heightDiv,weightDiv);

    // BP FIELD
    const field5=createElement('div',{className:'fields'});
    const bpDiv=createElement('div',{className:'input-field'})
    const bpLabel=createElement('label',{text:'Blood Pressure *'});
    const bpInput=createElement('input',{attributes:{type:'number',id:'bloodPressure'}}) as HTMLInputElement;
    const bpError=createElement('span',{className:'error'});
    bpInput.addEventListener('input',function(){
        const error=validateFields('bloodPressure',bpInput.value);
        if(error){
            bpError.textContent=error;
        }else{
            bpError.textContent='';
        }
    });
    bpDiv.append(bpLabel,bpInput,bpError);

    //BT FIELD
    const btDiv=createElement('div',{className:'input-field'})
    const btLabel=createElement('label',{text:'Blood Tempreture *'});
    const btInput=createElement('input',{attributes:{type:'number',id:'bloodTempreture'}}) as HTMLInputElement;
    const btError=createElement('span',{className:'error'});
    btInput.addEventListener('input',function(){
        const error=validateFields('bloodTempreture',btInput.value);
        if(error){
            btError.textContent=error;
        }else{
            btError.textContent='';
        }
    });
    btDiv.append(btLabel,btInput,btError);
    field5.append(bpDiv,btDiv);

    // BLOOD TYPE FIELD
    const field6=createElement('div',{className:'fields'});
    const bDiv=createElement('div',{className:'input-field'});
    const bLabel=createElement('label',{text:'Blood Type *'});
    bDiv.append(bLabel);
    const bSelect=createElement('select',{attributes:{name:'bloodType'}}) as HTMLSelectElement;
    const bloodArr=['A +ve','A -ve','B +ve','B -ve','AB +ve','AB -ve','O +ve','O -ve']
    const bplaceholder=createElement('option',{text:'Select Blood Type',attributes:{value:''}});
    bSelect.append(bplaceholder);
    bloodArr.forEach(type=>{
        const opt=createElement('option',{text:type,attributes:{value:type}});
        bSelect.append(opt);
    })
    const bError=createElement('span',{className:'error'});
    bDiv.append(bSelect,bError);

    //DIET TYPE FIELD
    const dDiv=createElement('div',{className:'input-field'})
    const dLabel=createElement('label',{text:'Diet Type *'});
    dDiv.append(dLabel);
    const dSelect=createElement('select',{attributes:{name:'dietType'}}) as HTMLSelectElement;
    const dietArr=['Mediterranean Diet','DASH Diet','Plant-Based and Vegan Diets'];
    const placeholder=createElement('option',{text:'Select Diet Type',attributes:{value:''}});
    dSelect.append(placeholder);

    dietArr.forEach(type=>{
        const opt=createElement('option',{text:type,attributes:{value:type}});
        dSelect.append(opt);
    });
    const dError=createElement('span',{className:'error'});
    dDiv.append(dSelect,dError);
    field6.append(bDiv,dDiv);


    // ALLERGY FIELD
    const field7=createElement('div',{className:'fields'});
    const aDiv=createElement('div',{className:'input-field'})
    const aLabel=createElement('label',{text:'Allergy *'});
    const aInput=createElement('input',{attributes:{type:'text',id:'allergies'}}) as HTMLInputElement;
    const aError=createElement('span',{className:'error'});
    aInput.addEventListener('input',function(){
        const error=validateFields('allergies',aInput.value);
        if(error){
            aError.textContent=error;
        }else{
            aError.textContent='';
        }
    });
    aDiv.append(aLabel,aInput,aError);


    //SLEEP HOURS FIELD
    const sDiv=createElement('div',{className:'input-field'});
    const sLabel=createElement('label',{text:'Sleep Hours *'});
    const sInput=createElement('input',{attributes:{type:'number',id:'sleepHours'}}) as HTMLInputElement;
    const sError=createElement('span',{className:'error'});
    sInput.addEventListener('input',function(){
        const error=validateFields('sleepHours',sInput.value);
        if(error){
            sError.textContent=error;
        }else{
            sError.textContent='';
        }
    });
    sDiv.append(sLabel,sInput,sError);
    field7.append(aDiv,sDiv);


    // CHRONIC DISEASE FIELD
    const field8=createElement('div',{className:'fields'});
    const cdDiv=createElement('div',{className:'input-field'});
    const cdLabel=createElement('label',{text:'Chronic Diseases *'});
    cdDiv.append(cdLabel);
    const diseaseBox=['Heart','Diabetes','Cancer'];
    const checkBoxGrp1=createElement('div',{className:'checkbox-group'});
    diseaseBox.forEach(r=>{
        const cd=createElement('input',{attributes:{type:'checkbox',name:'disease',value:r}}) as HTMLInputElement;
        const cLabel=createElement('label',{text:r});
        checkBoxGrp1.append(cd);
        checkBoxGrp1.append(cLabel);
    });
    const cdError=createElement('span',{className:'error'});
    cdDiv.append(checkBoxGrp1,cdError);

    //EXERCISE FREQ. FIELD
    const eDiv=createElement('div',{className:'input-field'});
    const eLabel=createElement('label',{text:'Exercise Frequency *'});
    eDiv.append(eLabel);
    const exerciseBox=['Daily','Weekly','Never'];
    // let selectedRadio='';
    const checkBoxGrp2=createElement('div',{className:'checkbox-group'});
    exerciseBox.forEach(r=>{
        const rd=createElement('input',{attributes:{type:'radio',name:'exercise',value:r}}) as HTMLInputElement;
        const rlabel=createElement('label',{text:r});
        rd.addEventListener('change',()=>{
            // selectedRadio=r;
        })
        checkBoxGrp2.append(rd);
        checkBoxGrp2.append(rlabel);
    
    });
    const eError=createElement('span',{className:'error'});
    eDiv.append(checkBoxGrp2,eError);
    field8.append(cdDiv,eDiv);


    // CURRENT MEDICATION FIELD
    const field9=createElement('div',{className:'fields full'})
    const cmDiv=createElement('div',{className:'input-field'})
    const cmLabel=createElement('label',{text:'Current Medications *'});
    const cmInput=createElement('textarea',{attributes:{id:'currMedication'}}) ;
    const cmError=createElement('span',{className:'error'});
    cmInput.addEventListener('input',function(){
        const error=validateFields('phone',cmInput.value);
        if(error){
            cmError.textContent=error;
        }else{
            cmError.textContent='';
        }
    });
    cmDiv.append(cmLabel,cmInput,cmError);
    field9.append(cmDiv);

    div2.append(div2Heading,field4,field5,field6,field7,field8,field9);

    // THIRD DIV FOR PRIVACY AGREEMENT
    const div3=createElement('div',{className:'form  submit-section'});
    const div3Heading=createElement('h2',{className:'section-title'});
    div3Heading.textContent='Privacy Agreement'
    const checkBoxGrp=createElement('div',{className:'checkbox-group'});
    const checkBoxLabel=createElement('label',{text:'I agree to the privacy policy *'});
    const checkBoxInput=createElement('input',{attributes:{type:'checkbox',id:'address'}}) as HTMLInputElement;
    checkBoxGrp.append(checkBoxInput,checkBoxLabel);

    const checkBoxError=createElement('span',{className:'error'});
    checkBoxInput.addEventListener('change',function(){
        const error=validateFields('phone',checkBoxInput.value);
        if(error){
            checkBoxError.textContent=error;
        }else{
            checkBoxError.textContent='';
        }
    });
    const submitButtun=createElement('button',{className:'btn'});
    submitButtun.textContent='Submit';
    div3.append(div3Heading,checkBoxGrp,checkBoxError,submitButtun);


    form.addEventListener('submit', (e: SubmitEvent): void => {
    e.preventDefault();
    const selectedDiseases=Array.from(document.querySelectorAll('input[name="disease"]:checked') as NodeListOf<HTMLInputElement>).map(d=>d.value);
    const selectedExercises=(document.querySelector('input[name="exercise"]:checked') as HTMLInputElement)?.value || "";
    const data:PatientForm={
        fullName:nameInput.value.trim(),
        dob:dobInput.value,
        email:emailInput.value.trim(),
        phone:phoneInput.value.trim(),
        address:addressInput.value.trim(),
        height:heightInput.value.trim(),
        weight:weightInput.value.trim(),
        bloodPressure:bpInput.value.trim(),
        bloodTempreture:btInput.value.trim(),
        bloodType:bSelect.value.trim(),
        dietType:dSelect.value.trim(),
        diseases:selectedDiseases,
        exerciseFrequency:selectedExercises,
        allergies:aInput.value.trim(),
        sleepHours:sInput.value.trim(),
        medication:cmInput.value.trim(),
        privacy:checkBoxInput.checked
    };
    if(state.editIndex===null){
        addRecord(data)
    }else{
        updateRecord(data);
    }
    // const successMsg=document.querySelector(".success_msg");
    // successMsg.showModal();
    alert("form submitted")
    renderApp();
  });
  form.append(div1,div2,div3);
  
  return form;
}





