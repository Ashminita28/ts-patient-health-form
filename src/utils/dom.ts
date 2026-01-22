
export function createElement<K extends keyof HTMLElementTagNameMap>(tag:K,options:{
  className?:string;
  text?:string;
  attributes?:{
    [key:string]:string
  };
}={}):HTMLElementTagNameMap[K]{
  const element=document.createElement(tag);
  if(options.className){
    element.className=options.className;
  }
  if(options.text){
    element.textContent=options.text;
  }
  if(options.attributes){
    for(const key in options.attributes){
      element.setAttribute(key,options.attributes[key]);
    }
  }
  return element;
}
