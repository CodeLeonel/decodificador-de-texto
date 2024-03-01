function criptografarBase64() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;

    if (possuiConteudo(texto)) {

        texto = window.btoa(texto);

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function descriptografarBase64() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;

    if (possuiConteudo(texto)) {
        
        texto = window.atob(texto);

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}