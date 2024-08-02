const soma = (...valores)=>{
    const somar = val =>{//o paremetro "val" recebe os dados do parametro "valores"
        let res = 0 
        for (v of val)
            res+=v
        return res//retorna a reposta da função "somar"
    }
    return somar(valores)//este return é da função soma que esta retornando os valores da função no caso 10,5,15
}
console.log(soma(10,5,15))  