const mainImg = document.querySelector (".mainImg");
const thumbnails = document.querySelectorAll(".thumbnail");


thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function(){
        const active = document.querySelector(".active");
        active.classList.remove("active");
        thumb.classList.add("active");
        mainImg.src = thumb.src;
    } );
});



const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


