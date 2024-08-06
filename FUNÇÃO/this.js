function aluno (nome,nota){
    this.nome=nome
    this.nota=nota

    this.arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },1000)
    }
}
const al1 =new aluno("Levi",10)
al1.arrow();