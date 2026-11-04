const formulario = document.getElementById("form");

const newAct = document.getElementById("newAct");


const canAct = document.getElementById("canAct");





newAct.addEventListener("click", () => {
    formulario.hidden = false;
})

canAct.addEventListener("click", () => {
    formulario.hidden = true;
})


console.log(canAct);
console.log(formulario);