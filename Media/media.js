function calcular(){
    let m1=document.getElementById('n1')
    let m2=document.getElementById('n3')
    let m3=document.getElementById('n3')
    let m4=document.getElementById('n4')
    let res=document.querySelector('.res')
        if(m1.value.length==0 || m2.value.length==0 || m3.value.length==0 || m4.value.length==0){
            res.innerHTML='Impossivel Calcular'
            alert('[ERRO] Digite Dados')
        }else{
            res.innerHTML='Calculando...'
            let media = (Number(m1.value) + Number(m2.value) + Number(m3.value) + Number(m4.value)) /4
            if(media>=6){
              res.innerHTML+=`<br/>A Média do Aluno é ${media.toFixed(1)} ele está Aprovado`
            }else{
                res.innerHTML+=`</br>A Média do aluno é ${media.toFixed(1)} ele está Reprovado `
            }
        }}
