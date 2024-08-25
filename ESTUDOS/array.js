const caixa = document.querySelector('.box')

let carros =['Opala','Hilux','Velar',["branca","Preta","Azul"]]
let arr =['Html','CSS','Python',carros]

// arr.push('Flamengo')//Push serve para adicionar um elemento ao array
// arr.push('JavaScript')
// arr.pop()//Serve para apagar o ultimo elemento do array
// arr.pop()
// arr.unshift("Flamengo")//Adicionar o elemento ao inicio do array
// arr.shift()//retira do inicio

console.log(arr[3][3][1])//[3]== array carros, [3]==posição 3 no array carros, [1]== Posição que esta dentros de outro array no array carros que no caso é preta 

arr.map((el)=>{
    let Curso = document.createElement('p')
    Curso.innerHTML=el
    caixa.appendChild(Curso)
})
