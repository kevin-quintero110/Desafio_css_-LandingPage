const imagen  = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-contact")
const img10 = document.querySelector(".mockup")

 
imagen.addEventListener('click',()=>{
    imagen.classList.toggle("active")
    nav.classList.toggle("desactive")
    img10.classList.toggle("active")


    if(imagen.classList.contains("active")){
        imagen.src = "./images/icon-close.svg"


       
       

    }else{
        imagen.src = "./images/icon-hamburger.svg"
    }
})




console.log(img10)