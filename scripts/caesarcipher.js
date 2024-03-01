let alfabeto = [];

for (let i = 97; i < 123; i++) {
    alfabeto.push(String.fromCharCode(i));
}

let rotacao = parseInt(Math.random() * 25 + 1);

function criptografarCifra() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;

    if (possuiConteudo(texto)) {

        for (let i = 0; i <= texto.length; i++) {

            let numeroLetra = texto.charCodeAt(i) - 97;

            if (!/[\n\s]/.test(texto[i])) {
                texto = texto.replace(texto[i], alfabeto[(numeroLetra + rotacao)%alfabeto.length]);
                console.log(texto);
            }

        }

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function descriptografarCifra() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;

    if (possuiConteudo(texto)) {
        
        for (let i = 0; i <= texto.length; i++) {

            let numeroLetra = texto.charCodeAt(i) - 97;

            if (!/[\n\s]/.test(texto[i])) {
                texto = texto.replace(texto[i], alfabeto[(alfabeto.length + (numeroLetra - rotacao))%alfabeto.length]);
            }

        }

        exibeTexto(texto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}