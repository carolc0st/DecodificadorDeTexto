var textInput = document.querySelector("#input--texto");
var output = document.querySelector("#output");


function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output--text').innerHTML = '<textarea readonly id="input--texto2" class="outputText" >' + resultCripto + '</textarea>';

    document.getElementById('btnCopiar').removeAttribute('hidden');
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output--text').innerHTML = '<textarea readonly id="input--texto" class="outputText" >' + resultDescripto + ' </textarea>';

}


function copiar() {
    var textoCop = document.getElementById('input--texto2');

    textoCop.select();
    document.execCommand('copy');
    
}