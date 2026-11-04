const formulario = document.getElementById("form");
const newAct = document.getElementById("newAct");
const canAct = document.getElementById("canAct");

newAct.addEventListener("click", () => {
    formulario.hidden = false;
})

canAct.addEventListener("click", () => {
    formulario.hidden = true;
})

const titUs = document.getElementById("titulo");
const desUs = document.getElementById("descripcion");
const catUs = document.getElementById("categoria");
const tieUs = document.getElementById("tiempo");
// const prioUs = document.getElementById("")
const estUs = document.getElementById("estado")

titUs.addEventListener("input", () => {
    const regExp = /^.{3,60}$/m;

    if (!regExp.test(titUs.value.trim())) {
        titUs.classList.add("inc");
    } else {
        titUs.classList.remove("inc");
        titUs.classList.add("cor");
    };
});

