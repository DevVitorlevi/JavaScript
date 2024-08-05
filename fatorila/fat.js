function calcular(){
 let num = document.getElementById('n1')
 let res = document.querySelector('.res')
 if(num.value.length==0){
    alert("Erro Digite Um Numero")
    res.innerHTML="Impossivel Calcular"
 }else{  
    res.innerHTML="Calculando.."
    resultado=1
  let n = Number(num.value)
    for(let c = 1;c<=n;c++){
        resultado*=c
    }
res.innerHTML+=`<br> Fatorial de ${n} é  ${resultado}`
}
}
