// ===============================
// BOTÓN EXPLORAR
// ===============================

const explorar = document.getElementById("explorar");

if (explorar) {
    explorar.addEventListener("click", () => {
        document.getElementById("historia").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ===============================
// BOTÓN MÚSICA
// ===============================

const audio = document.getElementById("audio");
const musica = document.getElementById("musica");

if (audio && musica) {
    musica.addEventListener("click", () => {

        if (audio.paused) {
            audio.play();
            musica.innerHTML = "⏸ Pausar";
        } else {
            audio.pause();
            musica.innerHTML = "🎵 Música";
        }

    });
}


// ===============================
// ESTRELLAS
// ===============================

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.width = Math.random() * 4 + 2 + "px";
        star.style.height = star.style.width;
        star.style.animationDuration = Math.random() * 10 + 6 + "s";
        star.style.animationDelay = Math.random() * 6 + "s";

        particles.appendChild(star);

    }

}


// ===============================
// TARJETAS Y VIDEOS
// ===============================

const tarjetas = document.querySelectorAll(".card");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("miVideo");

tarjetas.forEach((card) => {

    card.addEventListener("click", () => {

        if (videoSection) {
            videoSection.style.display = "block";
        }

        if (video) {
            video.currentTime = 0;
            video.play();
        }

        if (videoSection) {
            videoSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

if (tarjetas.length >= 3 && video) {

    tarjetas[0].onclick = () => {
        video.src = "assets/destello.mp4";
        video.play();
    };

    tarjetas[1].onclick = () => {
        video.src = "assets/galaxias.mp4";
        video.play();
    };

    tarjetas[2].onclick = () => {
        video.src = "assets/destino.mp4";
        video.play();
    };

}


// ===============================
// GALERÍA
// ===============================

const imagenes = document.querySelectorAll(".imagen");

const rutas = [
    "assets/yami1.webp",
    "assets/yami2.webp",
    "assets/yami3.webp",
    "assets/yami4.webp",
    "assets/thony.jpg",
    "assets/thony2.jpg",
    "assets/thony3.jpeg",
    "assets/thony4.jpeg",
    "assets/thony5.jpeg"
];

imagenes.forEach((imagen, index) => {

    if (rutas[index]) {

        imagen.style.backgroundImage = `url('${rutas[index]}')`;
        imagen.style.backgroundSize = "cover";
        imagen.style.backgroundPosition = "center";
        imagen.style.backgroundRepeat = "no-repeat";

    }

});


// ===============================
// PANTALLA COMPLETA AL REPRODUCIR
// ===============================

if (video) {

    video.addEventListener("play", () => {

        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }

    });

}


// ===============================
// MODAL CONTACTO
// ===============================

const contactoBtn = document.querySelector('a[href="#contacto"]');
const modalContacto = document.getElementById("modalContacto");
const cerrarModal = document.getElementById("cerrarModal");

if (contactoBtn && modalContacto) {

    contactoBtn.addEventListener("click", (e) => {

        e.preventDefault();
        modalContacto.style.display = "block";

    });

}

if (cerrarModal && modalContacto) {

    cerrarModal.addEventListener("click", () => {

        modalContacto.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (modalContacto && e.target === modalContacto) {

        modalContacto.style.display = "none";

    }

});