function fundo (){
    let c= document.getElementById('caixa')
    let f = document.getElementById('fundo')
    let b1= document.getElementById('btn1')
    let b2= document.getElementById('btn2')
    c.addEventListener('click', () =>{
        f.style.background='#4B0082'
        f.style.transition='all ease-in-out 1s'
        c.style.background='white'
        c.innerHTML='Clicou!!'
        c.style.color='#000000'
        b1.style.background='#4B0082'
        b2.style.background='#4B0082'
    })
    c.addEventListener('mouseenter',()=>{
        f.style.background='#8B0000'
        f.style.transition='all ease-in-out 1s'
        c.style.background='white'
        c.innerHTML='Entrou!!'
        c.style.color='#000000'
        b1.style.background='#8B0000'
        b2.style.background='#8B0000'
        b2.style.boxShadow='none'
        b1.style.boxShadow='none'
    })
    c.addEventListener('mouseout',()=>{
        f.style.background='#191970'
        f.style.transition='all ease-in-out 1s'
        c.style.background='white'
        c.innerHTML='Saiu!!'
        c.style.color='#000000'
        b1.style.background='#191970'
        b2.style.background='#191970'
        b1.style.transition='all ease-in-out 1s'
        b2.style.transition='all ease-in-out 1s'
    })
}
function caixa(){
    let box = document.getElementById('caixa')
    box.addEventListener('click',()=>{
        box.style.transition='all ease-in-out 1s'
        box.style.background='#4B0082'
        box.innerHTML='Clicou!!'
        box.style.color='white'
        box.style.boxShadow= '10px 10px 325px #DA70D6'
    })
    box.addEventListener('mouseenter',()=>{
        box.style.transition='all ease-in-out 1s'
        box.style.background='#8B0000'
        box.innerHTML='Entrou!!'
        box.style.color='white'
        box.style.boxShadow= '10px 10px 125px #FA8072'
    })
    box.addEventListener('mouseout',()=>{
        box.style.transition='all ease-in-out 1s'
        box.style.background='#191970'
        box.innerHTML='Saiu!'
        box.style.color='white'
        box.style.boxShadow= '10px 10px 125px #3838ce'
    })
}