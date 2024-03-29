function criptografar() {
    
    let texto = document.querySelector('.apresentacao__entrada__texto').value;

    if(possuiConteudo(texto)) {
        texto = texto.replaceAll('e','enter');
        texto = texto.replaceAll('i','imes');
        texto = texto.replaceAll('a','ai');
        texto = texto.replaceAll('o','ober');
        texto = texto.replaceAll('u','ufat');

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function descriptografar() {

    let texto = document.querySelector('.apresentacao__entrada__texto').value;

    if(possuiConteudo(texto)) {
        texto = texto.replaceAll('enter','e');
        texto = texto.replaceAll('imes','i');
        texto = texto.replaceAll('ai','a');
        texto = texto.replaceAll('ober','o');
        texto = texto.replaceAll('ufat','u');

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function exibeTexto(texto) {

    let elementoSaidaTexto = document.querySelector('.apresentacao__saida__comconteudo__caixa__texto');
    elementoSaidaTexto.innerHTML = texto;

    let apresentacao_sem_conteudo = document.getElementById('saida__semconteudo');
    apresentacao_sem_conteudo.style.display = 'none';

    let apresentacao_com_conteudo = document.getElementById('saida__comconteudo');
    apresentacao_com_conteudo.style.display = 'flex';

}

function exibeApresentacaoSemConteudo() {

    let apresentacao_sem_conteudo = document.getElementById('saida__semconteudo');
    apresentacao_sem_conteudo.style.display = 'flex';

    let apresentacao_com_conteudo = document.getElementById('saida__comconteudo');
    apresentacao_com_conteudo.style.display = 'none';

}

function validacao(event) {

    let textoValido = /^[a-z\n\s]+$/.test(event.value) || event.value == "";

    if(!textoValido) {
        alerta(event);
    } else {
        normal(event);
    }
    
    
}

function alerta(event) {

    event.style.border = '1px solid var(--cor-alerta)';
    document.getElementById('botao__criptografar').setAttribute('disabled',true);
    document.getElementById('botao__criptografar').style.setProperty('background-color','var(--cor-quaternaria)');
    document.getElementById('botao__criptografar').style.setProperty('color','var(--cor-ternaria)');
    document.getElementById('botao__descriptografar').setAttribute('disabled',true);
    document.getElementById('botao__descriptografar').style.setProperty('background-color','var(--cor-terciaria)');
    document.getElementById('botao__descriptografar').style.setProperty('color','var(--cor-quaternaria)');
    document.getElementById('texto_alerta').style.setProperty('color','var(--cor-alerta)');

}

function normal(event) {

    event.style.border = 'none';
    document.getElementById('botao__criptografar').removeAttribute('disabled');
    document.getElementById('botao__criptografar').style.setProperty('background-color','var(--cor-secundaria)');
    document.getElementById('botao__criptografar').style.setProperty('color','var(--cor-primaria)');
    document.getElementById('botao__descriptografar').removeAttribute('disabled');
    document.getElementById('botao__descriptografar').style.setProperty('background-color','var(--cor-primaria)');
    document.getElementById('botao__descriptografar').style.setProperty('color','var(--cor-secundaria)');
    document.getElementById('texto_alerta').style.setProperty('color','var(--cor-terciaria)');
    
}

function copiar() {

    let conteudoSaidaTexto = document.querySelector('.apresentacao__saida__comconteudo__caixa__texto').innerHTML;

    navigator.clipboard.writeText(conteudoSaidaTexto);

}

function possuiConteudo(texto) {
    return texto != null && texto != undefined && texto != "";
}