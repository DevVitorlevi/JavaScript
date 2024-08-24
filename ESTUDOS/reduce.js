const arr =document.getElementById('array')
const btn_P =document.getElementById('btnVerificar')
const res =document.getElementById('resultado')

const ElArray=[2,4,6,8,10]
let ant=[]
let atu=[]
let dobro=[]


arr.innerHTML=`[${ElArray}]`

btn_P.addEventListener('click',()=>{
    res.innerHTML=ElArray.reduce((anterior,atual)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
    return anterior+atual//0+2=2 2+4 =6 6+6 =12 12+10=20 20+10= 30
    })
    res.innerHTML+=`<br/> V.anterior:${ant} + V.atual:${atu} Dobro: ${dobro}`
})// Reduz o array de acrodo com a função passada por você para cada elemento array, retornando o elemento anterior que no caso é a interação e o elemento atual que são a posição dos elementos no array