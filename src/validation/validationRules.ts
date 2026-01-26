type FieldValue=string|string[]|boolean;

type Rule=(value:FieldValue)=> string|null;

export const validationRules:Record<string, Rule[]>={
  fullName:[
    (val)=>(val as string).trim()===""?("Name is required"):null,(val)=>/[^A-Za-z\s]/.test(val as string)? "Letters only": null
  ],

  dob:[
    (val)=>(val as string).trim()===""?"Date of Birth is required" : null,
    (val)=>{
      const date=new Date(val as string);
      const today=new Date();
      if(date>today) return "Cannot select future date";

      let age=today.getFullYear()-date.getFullYear();
      const maxAge=today.getMonth()<date.getMonth()||( today.getMonth()=== date.getMonth() && today.getDate()<date.getDate());

      if(maxAge){
        age--;
      }
      return age<18?"Must be 18 or older":null;
    }
  ],

  phone:[
    (val)=>(val as string).trim()===""?"Phone Number required":null,
    (val)=>(val as string).length!==10?"Must be 10 digits":null,

  ],
 
  email:[
    
    (val)=>(val as string).trim()===""?"Email required":null,
    (val)=>!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val as string))?"Invalid email format":null,
    
  ],

  address:[
    (val)=>(val as string).trim()===""?"Address required":null,
  ],

  height:[
    (val)=>(val as string).trim()===""?"Height required":null,
    (val)=>{const num=Number(val);
      return (num>=100 && num<=250) ? null : "Height must be between 100-250 cm";
    }
  ],

  weight:[
    (val)=>(val as string).trim()===""?"Weight required":null,
    (val)=>{
      const num=Number(val);
      return (num>=30 && num<=200) ? null:"Weight must be 30-200 kg";
    }
  ],

  bloodPressure:[
    (val)=>{
      const num=Number(val);
      return (num>=70 && num <=250)?null:"BP must be between 70-250 mmHg";
    }
  ],

  bloodTempreture:[
    (val)=>{
      const num=Number(val);
      return (num>=30 && num<=45)?null:"Tempreture must be between 30-45 degree celcius";
    }
  ],

  sleepHours:[
    (val)=>{
      const num=Number(val);
      return (num>=0 && num<=24)?null:"Must be between 0-24 hrs";
    }
  ],

  bloodType:[
    (val)=>(val as string).trim()===""?"Select a blood type":null
  ],

  disease:[
    (val)=>(val as string[]).length===0?"Select at least one disease":null
  ],

  exercise:[
    (val)=>(val as string).trim()===""?"select exercise frequency":null
  ],

  privacy:[
    (val)=>val===false?"You must agree to continue":null
  ]
}

export function validateFields(fieldName:string,value:FieldValue):string|null{
  const rules=validationRules[fieldName];
  if(!rules) return null;
  for(const test of rules){
    const error=test(value);
    if(error) return error;
  }

  return null;
}


