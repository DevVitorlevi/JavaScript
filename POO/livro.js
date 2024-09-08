class Livro{
    #cod
    #title
    #desc
    #autor
    #ano
    getInfo(){
        return [this.#cod,this.#title,this.#desc,this.#autor,this.#ano]
    }

    setInfo(cod,title,desc,autor,ano){

        this.#cod = cod
        this.#title = title
        this.#desc = desc
        this.#autor = autor
        this.#ano = ano 

    }
}
const Book_1 = new Livro()
const Book_2 = new Livro()
const Book_3 = new Livro()
const Book_4 = new Livro()
const Book_5 = new Livro()

Book_1.setInfo(69,'A Volta de Quem Não Foram','xxxxx','xxxxx',1900)
Book_2.setInfo(79,'Corrida Dos Alejados','xxxxx','xxxxx',1200)
Book_3.setInfo(39,'Água Seca','xxxxx','xxxxx',1721)
Book_4.setInfo(365,'As Rodovias Do Mar','xxxxx','xxxxx',2021)
Book_5.setInfo(335,'Pescadores do Deserto','xxxxx','xxxxx',2022)

console.log(Book_1.getInfo())
console.log(Book_2.getInfo())
console.log(Book_3.getInfo())
console.log(Book_4.getInfo())
console.log(Book_5.getInfo())