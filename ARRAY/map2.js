const carinho = [
    '{"nome":"Borracha","preco":2.34}',
    '{"nome":"Caderno","preco":56.2}'
]

const obj = json=>JSON.parse(json)//transforma em obj
const preco = produto => produto.preco//pega o preço

const total = carinho.map(obj).map(preco)
    let soma = total[0] + total[1]

console.log(soma)
