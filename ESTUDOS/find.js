const arr = document.getElementById('array')
const pesqui = document.getElementById('txt_pesquisar')
const btn = document.getElementById('btnPesquisar')
const res = document.getElementById('resultado')
const elArr= ['OPALA','SIENA','CORSA','PALIO']

arr.innerHTML="["+elArr+"]"

btn.addEventListener('click',()=>{
    res.innerHTML='Valor não Encontrado'
    elArr.find((el,i)=>{
        if(el.toUpperCase()==pesqui.value.toUpperCase()){
            res.innerHTML=`Valor encontrado ${el} e sua Posição é ${i+1}`
            return e
        }
    })
})
document.addEventListener('keydown',(k)=>{
    if(k.key =='Enter'){
        res.innerHTML='Valor não Encontrado'
        elArr.find((el,i)=>{
        if(el.toUpperCase() == pesqui.value.toUpperCase()){
            res.innerHTML=`Valor encontrado ${el} e sua Posição é ${i+1}`
            return e
        }
    })
    }
})// Find serve para voce fazer um pesquisa dentro de um arr, ele retorna o primeiro elemente que ele encontrar e sua posição