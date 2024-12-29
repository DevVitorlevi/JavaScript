// Declara o array de objetos que representa uma lista de produtos
const produtos = [
    {
        nome: 'Notebook',
        preco: 2500,
        fragil: true // Produto frágil
    },
    {
        nome: 'Ipad Pro',
        preco: 2581,
        fragil: true // Produto frágil
    },
    {
        nome: 'Vidro',
        preco: 500,
        fragil: true // Produto frágil
    },
    {
        nome: 'Plastico',
        preco: 10,
        fragil: false // Produto não frágil
    },
];

// Usa o método filter para criar um novo array contendo apenas os produtos
// que possuem preço maior ou igual a 500 E são frágeis (fragil: true)
const result = produtos.filter(produtos => produtos.preco >= 500 && produtos.fragil);

// Imprime o array filtrado no console
console.log(result);
