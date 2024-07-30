function fundo(){
    let f = document.getElementById('fundo')
    let c = document.getElementById('caixa')
    let b1= document.getElementById('btn1')
    let b2= document.getElementById('btn2')
    c.addEventListener("mouseenter",entro)
    c.addEventListener("mouseout",Sai)
    c.addEventListener('click',Clico)
    function entro(){
        f.style.background='#8B0000'
        f.style.transition='all ease-in-out 1s'
        c.style.background='white'
        c.innerHTML='Entrou'
        c.style.color='black'
        b1.style.background='#8B0000'
        b2.style.background='#8B0000'
        b2.style.boxShadow='none'
        b1.style.boxShadow='none'
      
        
    }
    function Sai(){
        f.style.background='#191970'
        f.style.transition='all ease-in-out 1s'
        c.style.background='white'
        c.innerHTML='Saiu'
        c.style.color='black'
        b1.style.background='#191970'
        b2.style.background='#191970'
        b1.style.transition='all ease-in-out 1s'
        b2.style.transition='all ease-in-out 1s'
    }
    function Clico(){
        f.style.background='#4B0082'
        f.style.transition='all ease-in-out 1s'
        c.style.background='white'
        c.innerHTML='Clicou'
        c.style.color='black'
        b1.style.background='#4B0082'
        b2.style.background='#4B0082'
    }
}
function caixa(){
    let c = document.getElementById('caixa')
    c.addEventListener("mouseenter",entrou)
    c.addEventListener("mouseout",Saiu)
    c.addEventListener('click',Clicou)
    function entrou(){
        
        c.style.transition='all ease-in-out 1s'
        c.style.background='#8B0000'
        c.innerHTML='Entrou'
        c.style.color='white'
        c.style.boxShadow= '10px 10px 125px #FA8072'

    }
    function Saiu(){
       
        c.style.transition='all ease-in-out 1s'
        c.style.background='#191970'
        c.innerHTML='Saiu'
        c.style.color='white'
        c.style.boxShadow= '10px 10px 125px #3838ce'

    }
    function Clicou(){
       
        c.style.transition='all ease-in-out 1s'
        c.style.background='#4B0082'
        c.innerHTML='Clicou'
        c.style.color='white'
        c.style.boxShadow= '10px 10px 325px #DA70D6'
    }
}