function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Por favor digite um número')//verificando se a caixa está vazia
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''//vazia pois irá receber um valor 
        while(c <=10){
            let item = document.createElement('option')// Create 
            item.text=`${n}  X  ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}