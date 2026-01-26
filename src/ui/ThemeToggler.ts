import { ThemeState } from "../state/ThemeState";
import { createElement } from "../utils/dom";

export class ThemeToggler{
    private button:HTMLButtonElement;
    private themeState:ThemeState;

    constructor(themeState:ThemeState){
        this.themeState=themeState;
        this.button=createElement('button');
        this.button.className='theme-toggle-button';
        this.button.textContent='Toggle';

        this.button.addEventListener('click',()=>{
            this.toggleTheme();
        });
    }

    getElement():HTMLButtonElement{
        return this.button;
    }

    private toggleTheme():void{
        const isDark=!this.themeState.getTheme();
        this.themeState.setTheme(isDark);

        document.body.classList.toggle("dark",isDark);
    }
}