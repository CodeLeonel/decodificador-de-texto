function criptografar() {
    
    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;

    if(texto != null && texto != undefined && texto != "") {
        texto = texto.replaceAll('e','enter');
        texto = texto.replaceAll('i','imes');
        texto = texto.replaceAll('a','ai');
        texto = texto.replaceAll('o','ober');
        texto = texto.replaceAll('u','ufat');
    }

    let elementoSaidaTexto = document.getElementsByClassName('apresentacao__saida__texto').item(0);
    elementoSaidaTexto.innerHTML = texto;

    let imagem = document.getElementsByClassName('apresentacao__saida__imagem').item(0);
    let mensagens = document.getElementsByClassName('apresentacao__saida__mensagens');
    mensagens.item(0).style.display = 'none';
    imagem.style.display = 'none';

    elementoSaidaTexto.style.display = 'block';

}

function descriptografar() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;

    if(texto != null && texto != undefined && texto != "") {
        texto = texto.replaceAll('enter','e');
        texto = texto.replaceAll('imes','i');
        texto = texto.replaceAll('ai','a');
        texto = texto.replaceAll('ober','o');
        texto = texto.replaceAll('ufat','u');
    }

    let elementoSaidaTexto = document.getElementsByClassName('apresentacao__saida__texto').item(0);
    elementoSaidaTexto.innerHTML = texto;

    let imagem = document.getElementsByClassName('apresentacao__saida__imagem').item(0);
    let mensagens = document.getElementsByClassName('apresentacao__saida__mensagens');
    mensagens.item(0).style.display = 'none';
    imagem.style.display = 'none';

    elementoSaidaTexto.style.display = 'block';

}