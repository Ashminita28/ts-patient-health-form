
import { ReusableForm } from "./Form";

const fields = [
    { name: "name", label: "*Full Name",type:'text', required: true },
    {name:'dob',label:'*Date of Birth',type:'text',required:true},
    { name: "email", label: "*Email", type: "email", required: true },
    { name: "phone", label: "*Phone Number" ,type:"tel",required:true },
    


  ];
  
  export default function FormPage() {
    const handleSubmit = (data: Record<string, string>) => {
      console.log("Form Submitted", data);
    };
  
    return <ReusableForm fields={fields} onSubmit={handleSubmit} />;
  }