const Box =document.querySelector('.box')
const Carros = ['Opala','UNO','Chevette','Palio','Corsa','Ford KA','Siena',]

Carros.map((el)=>{
    const NovoCarro = document.createElement('div')
    NovoCarro.setAttribute("class","curso")
    NovoCarro.innerHTML =el
    

    Box.appendChild(NovoCarro)
})

