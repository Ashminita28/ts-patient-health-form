import { createInput } from "../../primitives/textInput";
import { createSection } from "../../layout/formSections";
import { createLabel } from "../../primitives/label";
import { createSelect } from "../../primitives/dropDown";
import { createCheckbox } from "../../primitives/checkbox";
import { createRadio } from "../../primitives/radio";
import { createTextArea } from "../../primitives/textArea";
import { createElement } from "../../../utils/dom";
import { fields } from "../../layout/fields";
import { inputField } from "../../layout/inputField";

export function healthSection(){

    const section=createSection('Health Details');

    const field1=fields();
    const heightDiv=inputField();
    const heightLabel=createLabel('*Height','height');
    const heightInput=createInput('number','height','height','Enter height in cm');
    heightDiv.append(heightLabel,heightInput);
    
    const weightDiv=inputField();
    const weightLabel=createLabel('*Weight','weight');
    const weightInput=createInput('number','weight','weight','Enter weight in kg');
    weightDiv.append(weightLabel,weightInput)

    field1.append(heightDiv,weightDiv)

    const field2=fields();
    const bloodPressureDiv=inputField();
    const bloodPressureLabel=createLabel('*Blood Pressure','bloodPressure');
    const bloodPressureInput=createInput('number','bloodPressure','bloodPressure','Enter blood pressure in mmHg');
    bloodPressureDiv.append(bloodPressureLabel,bloodPressureInput);

    const bloodTempretureDiv=inputField();
    const bloodTempretureLabel=createLabel('*Blood Tempreture','bloodTempreture');
    const bloodTempretureInput=createInput('number','bloodTempreture','bloodTempreture','Enter blood tempreture in degree celsius');
    bloodTempretureDiv.append(bloodTempretureLabel,bloodTempretureInput)

    field2.append(bloodPressureDiv,bloodTempretureDiv);


    const field3=fields();
    const bloodTypeDiv=inputField(); 
    const bloodTypeLabel=createLabel('*Blood Type','bloodType');
    const bloodTypeInput=createSelect('bloodType','bloodType',['select blood type','A +ve','A -ve','B +ve','B -ve','AB +ve','AB -ve','O +ve','O -ve']);
    bloodTypeDiv.append(bloodTypeLabel,bloodTypeInput);

    const dietTypeDiv=inputField();
    const dietTypeLabel=createLabel('*Diet Type','dietType');
    const dietTypeInput=createSelect('dietType','dietType',['select diet type','Mediterranean Diet','DASH Diet','Plant-Based and Vegan Diets']);
     dietTypeDiv.append(dietTypeLabel,dietTypeInput);

     field3.append(bloodTypeDiv,dietTypeDiv);

     const field4=fields();
     const allergyDiv=inputField();
    const allergyLabel=createLabel('*Allergies','allergies');
    const allergyInput=createInput('text','allergies','allergies','Mention your allergies');
    allergyDiv.append(allergyLabel,allergyInput);

    const sleepHrsDiv=inputField()
    const sleepHoursLabel=createLabel('*Sleep Hours','sleepHours');
    const sleepHoursInput=createInput('number','sleepHours','sleepHours','Enter your sleep hours');
    sleepHrsDiv.append(sleepHoursLabel,sleepHoursInput);

    field4.append(allergyDiv,sleepHrsDiv);

    const field5=fields();
    const diseasesDiv=inputField();
    const diseasesLabel=createLabel('*Chronic Diseases','disease');
    const diseaseBox=['Heart','Diabetes','Cancer'];
    const selectedDiseases:HTMLInputElement[]=[];
    const diseaseContainer=createElement('div');
    diseaseContainer.className='checkbox-group';

    diseaseBox.forEach(disease=>{
        const diseasesInput=createCheckbox('disease',disease,disease);
        const eachDiseaseLabel=createLabel(disease,disease);

        selectedDiseases.push(diseasesInput);
        diseaseContainer.append(diseasesInput,eachDiseaseLabel);
    });

    diseasesDiv.append(diseasesLabel,diseaseContainer);

    const exerciseDiv=inputField();
    const exerciseLabel=createLabel('*Exercise Frequency','exercise');
    const exerciseBox=['Daily','weekly','Never'];
    const selectedExercises:HTMLInputElement[]=[];
    const exerciseContainer=createElement('div');
    exerciseContainer.className='checkbox-group'


    exerciseBox.forEach(exercise=>{
        const exerciseInput=createRadio('exercise',exercise,exercise);
        const eachExerciseLabel=createLabel(exercise,exercise);

        selectedExercises.push(exerciseInput);
        exerciseContainer.append(exerciseInput,eachExerciseLabel);
    });
    exerciseDiv.append(exerciseLabel,exerciseContainer);

    field5.append(diseasesDiv,exerciseDiv);

    const field6=createElement('div');
    field1.className='fields full';
    const medicationDiv=inputField();
    const medicationLabel=createLabel('Current Medications','medication');
    const medicationInput=createTextArea('medication','medication','Mention your current medications');
    medicationDiv.append(medicationLabel,medicationInput);
    field6.append(medicationDiv);
    section.append(field1,field2,field3,field4,field5,field6);

    return {section,heightInput,weightInput,bloodPressureInput,bloodTempretureInput,bloodTypeInput,dietTypeInput,selectedDiseases,selectedExercises,medicationInput};

    
}