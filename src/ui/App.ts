import { AppStorage } from "../AppStorage";
import { AppLogic } from "../logic/app.logic";
import { AppState } from "../state/AppState";
import { FormState } from "../state/FormState";
import { ThemeState } from "../state/ThemeState";
import { ThemeToggler } from "./ThemeToggler";
import { container } from "./layout/container";

export const appState = new AppState();
export const formState = new FormState();
export const themeState = new ThemeState();
appState.setRecords(AppStorage.loadRecords());
themeState.setTheme(AppStorage.loadTheme());
export const logic = new AppLogic(appState, formState, themeState);
const themeToggle = new ThemeToggler(themeState);


export function renderApp(): void {
  const root = document.getElementById("app");

  if (!root) {
    throw new Error("Root element #app not found");
  }
  root.innerHTML = ""; 
  const layout: HTMLDivElement = document.createElement("div");
  layout.className = "app";
  layout.appendChild(themeToggle.getElement());
  layout.appendChild(container());

  root.appendChild(layout);
}
