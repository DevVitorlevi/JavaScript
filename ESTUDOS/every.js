const arr =document.getElementById('array')
const btn_P =document.getElementById('btnVerificar')
const res =document.getElementById('resultado')

const ElArray=[18,29,25,29,29,18]

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
        res.innerHTML=' Tudo OK'
    }
    }
})