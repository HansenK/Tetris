var cores = new Array ("red", "blue", "green", "yellow", "purple", "brown", "orange");
var posicoes = new Array("0px","30px","60px","90px");
var quantb = 0;

function criabloco(nome, cors) // cria 1 bloco (pixel)
{
    var bloco = document.createElement("div");
    bloco.setAttribute('id', nome);
    bloco.setAttribute('class','blocos');
    document.getElementById("tela").appendChild(bloco);
    var sqr = document.getElementById(nome);
    sqr.style.width = '28px';
    sqr.style.height = '28px';
    sqr.style.border = "solid 1px white";
    sqr.style.backgroundColor = cors;
}

function criapeca() // cria retângulos randomicos de 1x1 até 1x4
{
    var a=0,b=0;
    var cor = cores[Math.floor((Math.random() * 7) + 0)];
    var name;

    var tamy = (Math.floor((Math.random() * 4) + 1)); // tamanho X do bloco 
    var tamx = (Math.floor((Math.random() * 4) + 1)); // tamanho Y do bloco 

    for(let y=0;y<tamy;y++)
    {
        for(let x=0;x<tamx;x++)
        {
            name = "b"+quantb;
            criabloco(name,cor);
            document.getElementById(name).style.left = posicoes[a];
            document.getElementById(name).style.top = posicoes[b];
            quantb++;
            a++;
        }
        a=0;
        b++;
    }
}

criapeca();