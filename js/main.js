function corrigirTexto(texto) {

    var textoUpper = texto.slice(0, 1);
    var textoUpperTransform = textoUpper.toUpperCase();
    var textoLower = texto.slice(1, texto.length);
    var textoLowerTransform = textoLower.toLowerCase();
    var textoFinal = textoUpperTransform + textoLowerTransform;

    return textoFinal;

}

function showHero() {
    var valorUniverso = document.getElementById("universo").value;
    var valorUniverso = valorUniverso.toLowerCase();

    if (valorUniverso == "dc" || valorUniverso == "marvel") {
        document.getElementById("heroi-universo").innerHTML = `Digite o nome de um herói da ${valorUniverso}!`;
        document.getElementById("hero-block").style.visibility = 'visible';
        document.getElementById("universo-validacao").innerHTML = ``;
    }
    else {
        document.getElementById("hero-block").style.visibility = 'hidden';
        document.getElementById("repeat-block").style.visibility = 'hidden';
        document.getElementById("submit-block").style.visibility = 'hidden';
        document.getElementById("radio-block").style.visibility = 'hidden';
        document.getElementById("heroi").value = "";
        document.getElementById("heroi-validacao").innerHTML = ``;
        var valorHeroi = "";
        universoInvalido(corrigirTexto(valorUniverso));
        limparHeroi();
    }
}

function showSend() {
    var valorUniverso = document.getElementById("universo").value;
    var valorUniverso = valorUniverso.toLowerCase();
    var valorHeroi = document.getElementById("heroi").value;
    var valorHeroi = valorHeroi.toLowerCase();

    if (valorUniverso == "marvel" && (valorHeroi == "one above all" || valorHeroi == "pantera negra" || valorHeroi == "homem aranha" || valorHeroi == "homem de ferro" || valorHeroi == "capitão américa" || valorHeroi == "homem formiga" || valorHeroi == "hulk" || valorHeroi == "visão" || valorHeroi == "thor" || valorHeroi == "wolverine")) {
        document.getElementById("repeat-block").style.visibility = 'visible';
        document.getElementById("radio-block").style.visibility = 'visible';
        document.getElementById("submit-block").style.visibility = 'visible';
        document.getElementById("heroi-validacao").innerHTML = ``;
        document.getElementById("heroi-repetir").innerHTML = `Quantas vezes o(a) ${valorHeroi} irá aparecer:`;
    }
    else if (valorUniverso == "dc" && (valorHeroi == "batman" || valorHeroi == "superman" || valorHeroi == "mulher maravilha" || valorHeroi == "ajax" || valorHeroi == "robin" || valorHeroi == "flash" || valorHeroi == "aquaman" || valorHeroi == "ciborgue" || valorHeroi == "arqueiro verde" || valorHeroi == "raio negro")) {
        document.getElementById("repeat-block").style.visibility = 'visible';
        document.getElementById("radio-block").style.visibility = 'visible';
        document.getElementById("submit-block").style.visibility = 'visible';
        document.getElementById("heroi-validacao").innerHTML = ``;
        document.getElementById("heroi-repetir").innerHTML = `Quantas vezes o(a) ${valorHeroi} irá aparecer:`;
    }
    else {
        document.getElementById("repeat-block").style.visibility = 'hidden';
        document.getElementById("submit-block").style.visibility = 'hidden';
        heroiInvalido(corrigirTexto(valorHeroi), corrigirTexto(valorUniverso));
        limparHeroi();
    }
}

function universoInvalido(universo) {
    if (universo != "") {
        document.getElementById("universo-validacao").innerHTML = `${universo} é um universo Inválido!`;
    }
    else {
        document.getElementById("universo-validacao").innerHTML = ``;
    }
}

function heroiInvalido(heroi, universo) {
    if (heroi != "") {
        document.getElementById("heroi-validacao").innerHTML = `${heroi} não pertence a ${universo}!`;
    }
    else {
        document.getElementById("heroi-validacao").innerHTML = ``;
    }
}

function limparHeroi() {
    document.getElementById("mostrar-heroi").innerHTML = ``;
}

function universeChange() {
    limparHeroi();
    document.getElementById("hero-block").style.visibility = 'hidden';
    document.getElementById("submit-block").style.visibility = 'hidden';
    document.getElementById("radio-block").style.visibility = 'hidden';
    document.getElementById("heroi").value = "";
    document.getElementById("heroi-validacao").innerHTML = "";
}

function showResult() {

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado = eval(parseInt(num1) + operador + parseInt(num2));

    areaMostrar = document.getElementById('mostrar-heroi');
    var meuHTML = "";
    valorRepetir = resultado;
    universo = converterUniverso();
    heroi = converterHeroi();

    for (var x = 1; x <= valorRepetir; x++) {
        meuHTML += `<img src='img/${universo}/${heroi}.jpg'>`;
    }
    areaMostrar.innerHTML += meuHTML;
}

function converterHeroi() {
    var valorHeroiConverter = document.getElementById("heroi").value;
    var valorHeroiConverter = valorHeroiConverter.toLowerCase();
    var heroiImg = valorHeroiConverter.replaceAll(/\s/g, '');

    return heroiImg;
}

function converterUniverso() {
    var valorUniversoConverter = document.getElementById("universo").value;
    var valorUniversoConverter = valorUniversoConverter.toLowerCase();
    var universoImg = valorUniversoConverter.replaceAll(/\s/g, '');

    return universoImg;
}