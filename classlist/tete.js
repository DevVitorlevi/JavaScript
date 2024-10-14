const box = document.querySelector('.box')
const box2 = document.querySelector('#box2')
const Cursos =[...document.querySelectorAll('.curso')]
const transferir= document.getElementById('transferir')

Cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const Curso = evt.target
        Curso.classList.toggle('selecionado')
    })
})
transferir.addEventListener('click',()=>{
    const select = [...document.querySelectorAll('.selecionado')]
    const NotSelect = [...document.querySelectorAll('.curso:not(.selecionado')]
    select.map((el)=>{
        box2.appendChild(el)
    })
    NotSelect.map((el)=>{
        box.appendChild(el)
    })
})