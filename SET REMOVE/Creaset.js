const Box =document.querySelector('.box')
const Carros = ['Opala','UNO','Chevette','Palio','Corsa','Ford KA']

Carros.map((el)=>{
    const NovoCarro = document.createElement('div')
    NovoCarro.setAttribute("class","curso")
    NovoCarro.innerHTML =el
    

    Box.appendChild(NovoCarro)
})
//set attribute tem a capacidade de adicionar um atributo a um elemento
//appendchild adiciona um elemento 
//createElement cria um elemnto dinamicamente
