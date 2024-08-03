function* contador(){
    let i = 0 
    while(true){
        yield i++
        if(i>69)
            break
    }// aqui temos um loop infinito, mas com  o auxilio do break a contagem irá parar em 69
}
const itc =contador()
for (c of itc){
    console.log(c)
}//o for of ira percorer os elementos de itc
