var cores = new Array ("red", "blue", "green", "yellow", "purple", "brown", "orange");
var posicoes = new Array("0px","30px","60px","90px");
var quantb = 0, quantt=0;
var tamy,tamx, initx=0;
var timer,teste=0, cont=0;
var posy = [];
var posx = [];
var posy2, posx2, nomp;

function criabloco(nome, cors)
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

function criapeca()
{
    var a=0,b=0;
    var cor = cores[Math.floor((Math.random() * 7) + 0)];
    tamy = (Math.floor((Math.random() * 4) + 1));
    tamx = (Math.floor((Math.random() * 4) + 1));
    initx = (Math.floor((Math.random() * (330-(tamy*30))) + 0));
    while(initx%30!=0)
    {
        initx = (Math.floor((Math.random() * (330-(tamy*30))) + 0));
    }
    for(let y=0;y<tamy;y++)
    {
        for(let x=0;x<tamx;x++)
        {
            name = "b" + quantb;
            criabloco(name,cor);
            document.getElementById(name).style.left = posicoes[a];
            document.getElementById(name).style.left = `${parseInt(document.getElementById(name).style.left) + initx}px`;
            document.getElementById(name).style.top = posicoes[b];
            quantb++;
            a++;
        }
        a=0;
        b++;
    }
    timer = setInterval(descer,700); //faz com que o objeto desça a cada 0,7s
}

function descer()
{
    var nm;
    quantt = quantb - (tamx * tamy);
    for(let y=quantt;y<quantb;y++)
    {
        nm = "b" + y;
        py =`${(parseInt(document.getElementById(nm).style.top) + 30)}px`; // faz com que o objeto desça 30px (seu tamanho)
        document.getElementById(nm).style.top = py;
        quantt++;
    }
    teste++;
    if(teste==(20-tamy)){
        clearInterval(timer);
        criapeca();
        teste=0;
    }
}


criapeca();