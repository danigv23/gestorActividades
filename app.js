const formulario = document.getElementById("form");
const botEli = document.getElementById("eliAct");
const newAct = document.getElementById("newAct");
const canAct = document.getElementById("canAct");
const addAct = document.getElementById("addAct");

const outTiempo = document.getElementById("valTiempo");

let titUs = document.getElementById("titulo");
let tieUs = document.getElementById("tiempo");

let gridActividades = document.getElementById("gridAct");

const gestor = new GestorActividades();

addAct.addEventListener("click", () => {
    gridActividades = document.getElementById("gridAct");
})

newAct.addEventListener("click", () => {
    botEli.hidden = true;
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

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    titUs = document.getElementById("titulo");
    tieUs = document.getElementById("tiempo");
    let catUs = document.getElementById("categoria");
    let estUs = document.getElementById("estado").checked;
    let prioUs = document.querySelector('input[name="prioridad"]:checked');;

    const dataNewAct = {
        tit: titUs.value,
        cat: catUs.value,
        time: tieUs.value,
        prio: prioUs.value,
        est: estUs
    };

    nuevaActHTML(dataNewAct);
});

function nuevaActHTML(act) {
    const botEditar = document.createElement("button");
    const botFinalizar = document.createElement("button");
    botEditar.textContent = "Editar";
    botFinalizar.textContent = "Finalizar";

    const bot = document.createElement("div");
    const pTime = document.createElement("p");
    bot.classList.add("bot");
    pTime.textContent = `${act.time} mins`;

    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const sub = document.createElement("div");
    img.src = "./img/logo.png";
    img.alt = "Ilustracion actividad";
    h1.textContent = act.tit;
    sub.classList.add("sub");

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = gridActividades.children.length;

    bot.append(botEditar, botFinalizar);
    sub.append(pTime, bot);
    card.append(img, h1, sub);

    gridActividades.append(card);
    formulario.hidden = true;

    gestor.newAct(act);
}

const botonesEditar = document.getElementsByClassName("edit");

for (const botonEditar of botonesEditar) {

    botonEditar.addEventListener("click", () => {
        gridActividades = document.getElementById("gridAct");
        botEli.hidden = false;

        const cardSelected = botonEditar.closest(".card");
        formulario.hidden = false;
    })
}



// HACER QUE SE MUESTREN LAS 6 PRUIMERAS ACTIVIDADES DESDE EL GESTOR