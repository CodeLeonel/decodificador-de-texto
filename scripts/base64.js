function criptografarBase64() {

    let texto = document.getElementById('caixa__texto__texto').value;

    if (possuiConteudo(texto)) {

        texto = window.btoa(texto);

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function descriptografarBase64() {

    let texto = document.getElementById('caixa__texto__base64').value;

    if (possuiConteudo(texto)) {
        
        texto = window.atob(texto);

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function exibirEntradaTexto() {

    let caixaTextoTexto = document.getElementById('caixa__texto__texto');
    let caixaTextoBase64 = document.getElementById('caixa__texto__base64');
    let painelAlerta = document.querySelector('.apresentacao__entrada__painel__alerta');
    let botaoCriptografar = document.getElementById('botao__criptografar');
    let botaoDescriptografar = document.getElementById('botao__descriptografar');


    caixaTextoTexto.style.display = 'flex';
    painelAlerta.style.display = 'flex';
    botaoCriptografar.style.display = 'flex';
    caixaTextoBase64.style.display = 'none';
    botaoDescriptografar.style.display = 'none';

}

function exibirEntradaBase64() {

    let caixaTextoTexto = document.getElementById('caixa__texto__texto');
    let caixaTextoBase64 = document.getElementById('caixa__texto__base64');
    let painelAlerta = document.querySelector('.apresentacao__entrada__painel__alerta');
    let botaoCriptografar = document.getElementById('botao__criptografar');
    let botaoDescriptografar = document.getElementById('botao__descriptografar');


    caixaTextoTexto.style.display = 'none';
    painelAlerta.style.display = 'none';
    botaoCriptografar.style.display = 'none';
    caixaTextoBase64.style.display = 'flex';
    botaoDescriptografar.style.display = 'flex';

}