export function element(tag: string) {
  return document.createElement(tag);
}

export function createInput(
  type: string,
  name: string,
  id: string,
  placeholder?: string,
  value?: string,
): HTMLInputElement {
  const input = document.createElement("input") as HTMLInputElement;
  input.type = type;
  input.name = name;
  input.id = id;
  if (placeholder) {
    input.placeholder = placeholder;
  }
  if (value) {
    input.value = value;
  }
  return input;
}
