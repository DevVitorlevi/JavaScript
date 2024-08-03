function* cores(){
    yield 'Amarelo'
    yield 'Branco'
    yield 'Azul'
}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
// a Função geradoratem a caracteristica de percores o codio ate achar um yield, quando ele é achado o valor dele é retornado, mas tambem posso adicionar um valor a ele através de variaveis