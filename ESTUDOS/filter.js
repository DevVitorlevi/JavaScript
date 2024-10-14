const idade = [16,27,92,62,84,12,34]

const maior =idade.filter((val,indice)=>{
    if(val >= 18)
        return val
})

const menor =idade.filter((val,indice)=>{
    if(val < 18)
        return val
})

console.log(` Todos os Maiores de Idade: [${maior}] `)
console.log(`Todos os Menores de Idade: [${menor}] `)
console.log(`Todas das Idades: [${idade}]`)
//Filter ele retorna ate 3 coisas: valor , indice e o arr, atraves de uma condição ele consegue filtar o conteudo do arr