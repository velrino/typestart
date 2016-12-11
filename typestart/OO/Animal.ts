export class Animal 
{

    private nome : string;

    constructor(nome)
    {
        this.nome = nome;    
    }

    public mover(distanciaEmMetros : number) : void 
    {
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
    }

}