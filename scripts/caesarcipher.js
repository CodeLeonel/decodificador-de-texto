let alfabeto = [];

for (let i = 97; i < 123; i++) {
    alfabeto.push(String.fromCharCode(i));
}

let rotacao = parseInt(Math.random() * 24 + 1);

function criptografarCifra() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;
    let novoTexto = '';

    if (possuiConteudo(texto)) {

        for (let i = 0; i < alfabeto.length; i++) {

            novoTexto += novaLetra(texto[i]);

        }

        exibeTexto(novoTexto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function descriptografarCifra() {

    let texto = document.getElementsByClassName('apresentacao__entrada__texto').item(0).value;
    let novoTexto = '';

    if (possuiConteudo(texto)) {

        for (let i = 0; i < alfabeto.length; i++) {

            novoTexto += decifraLetra(texto[i]);

        }

        exibeTexto(novoTexto);
    } else {
        exibeApresentacaoSemConteudo();
    }

}

function novaLetra(letra) {

    if (letra === undefined) return '';

    if (/[a-z]/.test(letra)) {

        return alfabeto[(numeroASCII(letra) + rotacao) % alfabeto.length];

    } else {

        return letra;

    }


}

function decifraLetra(letra) {

    if (letra === undefined) return '';

    if (/[a-z]/.test(letra)) {

        return alfabeto[(alfabeto.length + (numeroASCII(letra) - rotacao)) % alfabeto.length];

    } else {

        return letra;

    }

}

function numeroASCII(letra) {

    return letra.charCodeAt(0) - 97;

}