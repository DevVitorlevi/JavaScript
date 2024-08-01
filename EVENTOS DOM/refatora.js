function Bottom (){ 
    let Box= document.getElementById('bx')
    let Bottom = document.getElementById('bottom')
    let ButtonBottom= document.getElementById('btn1')
    let ButtonColor= document.getElementById('btn2')
    Box.addEventListener('click', () => {
        Bottom.style.background='#4B0082'
        Bottom.style.transition='all ease-in-out 1s'
        Box.style.background='#ffffff'
        Box.innerHTML='Clicou!!'
        Box.style.color='#000000'
        ButtonBottom.style.background='#4B0082'
        ButtonColor.style.background='#4B0082'
        ButtonBottom.style.transition='all ease-in-out 1s'
        ButtonColor.style.transition='all ease-in-out 1s'
    })
    Box.addEventListener('mouseenter',() => {
        Bottom.style.background='#8B0000'
        Bottom.style.transition='all ease-in-out 1s'
        Box.style.background='#ffffff'
        Box.innerHTML='Entrou!!'
        Box.style.color='#000000'
        ButtonBottom.style.background='#8B0000'
        ButtonColor.style.background='#8B0000'
        ButtonColor.style.boxShadow='none'
        ButtonBottom.style.boxShadow='none'
        ButtonBottom.style.transition='all ease-in-out 1s'
        ButtonColor.style.transition='all ease-in-out 1s'
        
    })
    Box.addEventListener('mouseout',()=>{
        Bottom.style.background='#191970'
        Bottom.style.transition='all ease-in-out 1s'
        Box.style.background='#FFFFFF'
        Box.innerHTML='Saiu!!'
        Box.style.color='#000000'
        ButtonBottom.style.background='#191970'
        ButtonColor.style.background='#191970'
        ButtonBottom.style.transition='all ease-in-out 1s'
        ButtonColor.style.transition='all ease-in-out 1s'
    })
}
function Box(){
    let box = document.getElementById('bx')
    box.addEventListener('click',()=>{
        box.style.transition='all ease-in-out 1s'
        box.style.background='#4B0082'
        box.innerHTML='Clicou!!'
        box.style.color='#ffffff'
        box.style.boxShadow= '10px 10px 325px #DA70D6'
    })
    box.addEventListener('mouseenter',()=>{
        box.style.transition='all ease-in-out 1s'
        box.style.background='#8B0000'
        box.innerHTML='Entrou!!'
        box.style.color='#ffffff'
        box.style.boxShadow= '10px 10px 125px #FA8072'
    })
    box.addEventListener('mouseout',()=>{
        box.style.transition='all ease-in-out 1s'
        box.style.background='#191970'
        box.innerHTML='Saiu!'
        box.style.color='#ffffff'
        box.style.boxShadow= '10px 10px 125px #3838ce'
    })
}