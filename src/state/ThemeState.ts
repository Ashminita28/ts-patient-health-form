export class ThemeState{
    private isDarkMode:boolean=false;

    getTheme():boolean{
        return this.isDarkMode;
    }

    setTheme(value:boolean):void{
        this.isDarkMode=value;
    }
}