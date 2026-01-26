// GENERIC 

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag:K
):HTMLElementTagNameMap[K]{
   return document.createElement(tag);
}


