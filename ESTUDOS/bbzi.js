const Box =document.querySelector('.box')
const Carros = ['Opala','Fiesta','Chevette','Palio','Corsa','Ford KA','Siena']
const CursosSelect =document.getElementById('btnCursoSelecionado')
const RemoveElement =document.getElementById('btnRemoverCurso')
const AddElementBefore =document.getElementById('btnAdicionarNovoCursoa')
const AddElementAfter =document.getElementById('btnAdicionarNovoCursod')
const NameCourse = document.getElementById('nomeCurso')


const CriarElemento=(curso)=>{
    const NovoElemento = document.createElement('div')
    NovoElemento.setAttribute("class","curso")
    NovoElemento.innerHTML =curso

   const comandos = document.createElement('div')
   comandos.setAttribute('class','comandos')

   const radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','rb_curso')


    comandos.appendChild(radio)
    NovoElemento.appendChild(comandos)
    return NovoElemento
}
Carros.map((el)=>{
    const NovoElemento = CriarElemento(el)
    Box.appendChild(NovoElemento)
})
const RadioSelect=()=>{
        const radios =[...document.querySelectorAll('input[type=radio')]
        const radioSelect=radios.filter((ele)=>{
        return ele.checked
    })
    return radioSelect[0]
}
CursosSelect.addEventListener('click',()=>{
    try{
        const RadioS = RadioSelect()
        const Course = RadioS.parentNode.previousSibling.textContent
        alert(`Selecionou O Carro: ${Course}`)
    }catch(ex){
        alert('Selecione Um Curso')
    }
   
})
RemoveElement.addEventListener('click',()=>{
    try{
        const RadioS = RadioSelect()
        const Course = RadioS.parentNode.parentNode
        Course.remove()
    }catch(ex){
        alert('Selecione Um Curso')
    }
})
AddElementBefore.addEventListener('click',()=>{
     try{
        if(NameCourse.value != ""){
            const RadioS = RadioSelect()
            const Course = RadioS.parentNode.parentNode
            const NewCourse=CriarElemento(NameCourse.value)
            Box.insertBefore(NewCourse,Course)
        }else{
            alert('Digite Algo')
        }
        }catch(ex){
        alert('Selecione Um Curso')
     }
})
AddElementAfter.addEventListener('click',()=>{
     try{
        if(NameCourse.value!=""){
            const RadioS = RadioSelect()
            const Course = RadioS.parentNode.parentNode
            const NewCourse=CriarElemento(NameCourse.value)
            Box.insertBefore(NewCourse,Course.nextSibling)
        }else{
         alert('Digite Algo')
         }
        }catch(ex){
        alert('Selecione Um Curso')
        }
})