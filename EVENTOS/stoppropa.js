const Cursos = [...document.querySelectorAll('.curso')]

Cursos.map((el) =>{
    el.addEventListener('click', (evt) =>{
        const curso = evt.target
        curso.classList.toggle('selecionado')
       
    })
})



