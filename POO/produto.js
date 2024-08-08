class Produto{
    #nome
    #quant
    #cod
    #preco
    getinfo(){
        return [this.#nome,this.#quant,this.#cod,this.#preco]
    }
    setinfo(nome,quant,cod,preco){
        this.#nome=nome
        this.#quant=quant
        this.#cod=cod
        this.#preco=preco 
    }
}
const p1 = new Produto()
p1.setinfo("Farinha",80,1,8.98)
console.log(p1.getinfo())