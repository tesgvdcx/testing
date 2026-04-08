export class Logger{
    constructor(name){
        this.name=name;
    }
    log(message){
        return `${this.name}->${message}`
    }
}

export const list={
    "movie":"harry potter",
    "bike":"gixxer sf 250"
};