import ehUmCPF from "./valida-cpf.js";
const campoDoFormulario  = document.querySelectorAll("[require]");

campoDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo)
    }
}