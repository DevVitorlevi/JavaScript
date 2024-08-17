const Box = document.querySelector('.box')
const btn1 = document
const Cursos = [...document.querySelectorAll('.curso')] 

Box.addEventListener('click', () =>{
    console.log('Ainnn Nobruzera Apelão')
})

Cursos.map((el) =>{
    el.addEventListener('click', (evt) =>{
        evt.stopPropagation()
        
    })
})

