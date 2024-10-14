const arr =document.getElementById('array')
const btn_P =document.getElementById('btnVerificar')
const res =document.getElementById('resultado')

const ElArray=[13,12,64,82]

arr.innerHTML=`[${ElArray}]`

btn_P.addEventListener('click',()=>{
    const ret = ElArray.every((el,i)=>{
        if(el<18){
            res.innerHTML=`Array nao esta nos conformes na posição: ${i+1}`  
        }return el>=18

    })

    if(ret){
        res.innerHTML='OK'
    }
})
document.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
    const ret = ElArray.every((el,i)=>{
        if(el<18){
            res.innerHTML=`Array nao esta nos conformes na posição: ${i+1}`  
        }return el>=18

    })
    if(ret){
        res.innerHTML=el
    }
    }
})// Every serve para demostrar se ele segue os conformes de uma condição, verificando se os elementos obedecem a condição