// BOTÓN EXPLORAR

document.getElementById("explorar").addEventListener("click", () => {

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });

});


// BOTÓN MÚSICA

const audio = document.getElementById("audio");
const musica = document.getElementById("musica");

musica.addEventListener("click", () => {

    if(audio.paused){

        audio.play();
        musica.innerHTML="⏸ Pausar";

    }else{

        audio.pause();
        musica.innerHTML="🎵 Música";

    }

});


// ESTRELLAS

const particles = document.getElementById("particles");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"%";

    star.style.width=Math.random()*4+2+"px";

    star.style.height=star.style.width;

    star.style.animationDuration=Math.random()*10+6+"s";

    star.style.animationDelay=Math.random()*6+"s";

    particles.appendChild(star);

}
const tarjetas = document.querySelectorAll(".card");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("miVideo");

tarjetas.forEach(card => {

    card.addEventListener("click", () => {

        videoSection.style.display = "block";

        video.currentTime = 0;

        video.play();

        videoSection.scrollIntoView({
            behavior:"smooth"
        });

    });

});

document.querySelectorAll(".card")[0].onclick = () => {

    video.src = "assets/destello.mp4";
    video.play();

};

document.querySelectorAll(".card")[1].onclick = () => {

    video.src = "assets/galaxias.mp4";
    video.play();

};

document.querySelectorAll(".card")[2].onclick = () => {

    video.src = "assets/destino.mp4";
    video.play();

};
// BLOQUE DE IMÁGENES "NUESTRO ESPACIO"
const imagenes = document.querySelectorAll(".imagen");
const rutas = [
    "assets/yami1.webp",
    "assets/yami3.webp",
    "assets/yami4.webp",
    "assets/thony.jpg",
    "assets/thony2.jpg"
];

imagenes.forEach((img, i) => {
    img.style.backgroundImage = `url(${rutas[i]})`;
});
video.addEventListener("play", () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
});
// Mostrar frase al hacer scroll
const contacto = document.getElementById("contacto");

window.addEventListener("scroll", () => {
    const rect = contacto.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        contacto.classList.add("visible");
    }
});
// BOTÓN CONTACTO → abre modal
const contactoBtn = document.querySelector('a[href="#contacto"]');
const modalContacto = document.getElementById("modalContacto");
const cerrarModal = document.getElementById("cerrarModal");

contactoBtn.addEventListener("click", (e) => {
    e.preventDefault(); // evita el scroll
    modalContacto.style.display = "block";
});

// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modalContacto.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modalContacto) {
        modalContacto.style.display = "none";
    }
});
