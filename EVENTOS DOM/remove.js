const Box =document.querySelector('.box')
const Carros = ['Opala','UNO','Chevette','Palio','Corsa','Ford KA','Siena',]

Carros.map((el)=>{
    const NovoElemento = document.createElement('div')
    NovoElemento.setAttribute("class","curso")
    NovoElemento.innerHTML =el

    const del = document.createElement('img')
    del.setAttribute('src','./lixeira.png')
    del.setAttribute('class','btn')
    del.addEventListener('click',(evt)=>{
        Box.removeChild(evt.target.parentNode)
    })
    
    NovoElemento.appendChild(del)
    Box.appendChild(NovoElemento)
})