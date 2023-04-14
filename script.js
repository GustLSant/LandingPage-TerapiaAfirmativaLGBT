if(document.getElementById('depoimento-peq-1').offsetHeight < "99"){
    document.getElementById('dplm-1').style.opacity = "0%"
}


function redirectMozer(){
    window.open('https://www.instagram.com/mozerbeier/','_blank')
}


function toggleElement(id){
    document.getElementById(id).classList.toggle('active')
}


function redirecionarWpp(){
    window.open('https://wa.me/5579991218675', '_blank')
}


function onClickComprarCurso(){
    const sectionComprar = document.getElementById("section-comprar")
    const offset = sectionComprar.getBoundingClientRect().top - document.body.getBoundingClientRect().top + 150
    window.scrollTo({top: offset, behavior: 'smooth'})
}