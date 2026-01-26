
import { renderApp } from "./ui/App";

// Entry point: bootstrap application state and UI
document.addEventListener('DOMContentLoaded', (): void => {
  renderApp();         // Deterministic initial render
});