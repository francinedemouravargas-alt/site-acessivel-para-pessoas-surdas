
const botao = document.getElementById("traduzir");

const texto = document.getElementById("texto");

const resultado = document.getElementById("fraseResultado");

botao.addEventListener("click", function() {

    const frase = texto.value.trim();

    if (frase === "") {
        resultado.textContent = "Digite uma frase primeiro.";
        return;
    }

    resultado.textContent = frase;

});
