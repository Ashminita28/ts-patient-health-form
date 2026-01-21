// import './style.css'
import { loadState } from "./app.storage";
import { renderApp } from "./components/App";

document.addEventListener('DOMContentLoaded',()=>{
    loadState();
    renderApp();
});
