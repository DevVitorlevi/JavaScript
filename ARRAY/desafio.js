const alunos = [
    {
        nome: 'maria',
        nota: 7.23,
        bolsista: false
    },
    {
        nome: 'Bruna',
        nota: 7.23,
        bolsista: true
    },
    {
        nome: 'Vitor',
        nota: 7.23,
        bolsista: true
    }
];

// Função que verifica se todos os valores são verdadeiros
const TodosBolsistas = (res, bolsa) => res && bolsa;

// Extrai a propriedade 'bolsista' de cada aluno, aplica o reduce para verificar se todos são bolsistas
console.log(alunos.map(a => a.bolsista).reduce(TodosBolsistas));

//false && true =false
//false && true = false

const AlgumBolsista = (res,bolsa)=> res||bolsa

console.log(alunos.map(a => a.bolsista).reduce(AlgumBolsista));

//false || true = true
// true || true = true