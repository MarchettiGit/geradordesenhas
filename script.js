const senha = document.getElementById("senha");
const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");

const tamanho = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valorTamanho");

const maiusculas = document.getElementById("maiusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

tamanho.addEventListener("input", () => {
    valorTamanho.innerText = tamanho.value;
});

gerar.addEventListener("click", () => {

    let caracteres = "abcdefghijklmnopqrstuvwxyz";

    if(maiusculas.checked){
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(numeros.checked){
        caracteres += "0123456789";
    }

    if(simbolos.checked){
        caracteres += "!@#$%&*";
    }

    let senhaGerada = "";

    for(let i = 0; i < tamanho.value; i++){

        let random = Math.floor(Math.random() * caracteres.length);

        senhaGerada += caracteres[random];
    }

    senha.value = senhaGerada;
});

copiar.addEventListener("click", () => {

    navigator.clipboard.writeText(senha.value);

    copiar.innerText = "Copiado!";

    setTimeout(() => {
        copiar.innerText = "Copiar";
    }, 2000);
});