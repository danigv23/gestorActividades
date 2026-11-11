const formulario = document.getElementById("form");
const newAct = document.getElementById("newAct");
const canAct = document.getElementById("canAct");
const addAct = document.getElementById("addAct");

const outTiempo = document.getElementById("valTiempo");

let titUs = document.getElementById("titulo");
let tieUs = document.getElementById("tiempo");

newAct.addEventListener("click", () => {
    formulario.hidden = false;
    mostrarValor()
})

canAct.addEventListener("click", () => {
    formulario.hidden = true;
})


titUs.addEventListener("input", () => {
    const regExp = /^.{3,60}$/m;

    if (!regExp.test(titUs.value.trim())) {
        titUs.classList.add("inc");
    } else {
        titUs.classList.remove("inc");
        titUs.classList.add("cor");
    };
});

function mostrarValor() {
    outTiempo.textContent = tieUs.value;
};

tieUs.addEventListener("input", mostrarValor);

formulario.addEventListener("submit", () => {
    event.preventDefault();

    titUs = document.getElementById("titulo");
    tieUs = document.getElementById("tiempo");
    let desUs = document.getElementById("descripcion");
    let catUs = document.getElementById("categoria");
    let estUs = document.getElementById("estado").checked;
    let prioUs = document.querySelector('input[name="prioridad"]:checked');;

    const dataNewAct = {
        tit: titUs.value,
        des: desUs.value,
        cat: catUs.value,
        time: tieUs.value,
        prio: prioUs.value,
        comp: estUs
    };
    nuevaAct(dataNewAct.tit, dataNewAct.time);
})

function nuevaAct(titulo, tiempo) {
    const gridActividades = document.getElementById("gridAct");

    const botEditar = document.createElement("button");
    const botFinalizar = document.createElement("button");
    botEditar.textContent = "Editar";
    botFinalizar.textContent = "Finalizar";

    const bot = document.createElement("div");
    const pTime = document.createElement("p");
    bot.classList.add("bot");
    pTime.textContent = `${tiempo} mins`;

    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const sub = document.createElement("div");
    img.src = "./img/logo.png";
    img.alt = "Ilustracion actividad";
    h1.textContent = titulo;
    sub.classList.add("sub");

    const card = document.createElement("div");
    card.classList.add("card");

    bot.append(botEditar, botFinalizar);
    sub.append(pTime, bot);
    card.append(img, h1, sub);

    gridActividades.append(card);
    formulario.hidden = true;
}

