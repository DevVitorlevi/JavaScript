function soma(...valores){
    let tam = valores.length//quantidade de valores passsados
    let res =0
    for (let i=0;i<tam;i++){
        res+=valores[i]//na posição do indice
    }
    return res
}console.log(soma(10,20,30,40))
//rest posibilita voce passar quantos parametros voce desejar em uma função