const arr =document.getElementById('array')
const btn_P =document.getElementById('btnVerificar')
const res =document.getElementById('resultado')

const ElArray=[18,12,15,11,9,13]

arr.innerHTML=`[${ElArray}]`

btn_P.addEventListener('click',()=>{
    const ret = ElArray.some((el,i)=>{
        if(el<18){
            res.innerHTML=`Array nao esta nos conformes na posição: ${i+1}`  
        }return el>=18

    })
    if(ret){
        res.innerHTML='Tudo Ok'
    }
})
document.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
    const ret = ElArray.some((el,i)=>{
        if(el<18){
            res.innerHTML=`Array nao esta nos conformes na posição: ${i+1}`  
        }return el>=18

    })
    if(ret){
        res.innerHTML='Tudo ok'
    }
    }
})// Some é parecido como o every, a unica diferença é que para valiadr o array é preciso tem somente um Elemento nos conformes