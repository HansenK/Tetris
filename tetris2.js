//VARIÁVEIS
var cores = new Array ("red", "blue", "green", "yellow", "purple", "brown", "orange");
var posicoes = new Array("0px","30px","60px","90px");
var quantb = 0, quantt=0;
var tamy,tamx, initx=0, tamtot=0, score=0;
var timer,teste=0, cont=0, flag1=true, flag2=true;
var posy = [];
var posx = [];
var posy2, posx2, nomp, nompos, testel=0, noml;

// função pra criar um só bloco
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

// função para criar uma peça inteira de tamnho randômico de tamanho 1x1 até 4x4
function criapeca()
{
    if(quantb<1) document.getElementById("tela").removeChild(document.getElementById("bt")); //para disabilitar o botão
    var a=0,b=0;
    var cor = cores[Math.floor((Math.random() * 7) + 0)];
    tamy = (Math.floor((Math.random() * 4) + 1)); // determina a altura da peça
    tamx = (Math.floor((Math.random() * 4) + 1)); // determina a largura da peça
    initx = (Math.floor((Math.random() * (330-(tamy*30))) + 0)); // posição X randômica onde a peça vai iniciar
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
    flag1=true;
    flag2=true;
    timer = setInterval(descer,700); //faz com que o objeto desça a cada 0,7s
}

function deteclinha()
{
    posobj();
    for(let a=570;a>0;)
    {
        for(let b=0;b<quantb -(tamx*tamy);b++)
        {
            noml = document.getElementById('b' + b);
            if(noml!=null)
            {
                posy2 = noml.style.top;
                if(posy2==`${a}px`)
                {
                    ++testel;
                }
                if(testel==12)
                {
                    for(let c=0;c<(quantb - (tamy*tamx));c++)
                    {
                        noml = "b"+c;
                        if(document.getElementById(noml)!=null)
                        {
                            if(document.getElementById(noml).style.top==`${a}px`)
                            {
                                document.getElementById("tela").removeChild(document.getElementById(noml));
                            }
                        }
                    }
                    for(let d=a;d>0;)
                    {
                        for(let c=0;c<quantb-(tamx*tamy);c++)
                        {
                            noml = "b" + c;
                            if(document.getElementById(noml)!=null)
                            {
                                if(document.getElementById(noml).style.top == `${d}px` && document.getElementById(noml).style.top != '570px')
                                {
                                    document.getElementById(noml).style.top = `${parseInt(document.getElementById(noml).style.top)+30}px`;
                                }
                            }
                        }
                        d = d-30;
                    }
                    score = score +1;
                    document.getElementById('score').innerHTML = score;
                }
            }
        }
        testel=0;
        a = a-30;
    }
}

//função para fazer a peça descer 
function descer()
{
    detecobj();
    deteclinha();
    var nm;
    quantt = quantb - (tamx * tamy);
    for(let y=quantt;y<quantb;y++)
    {
        nm = "b" + y;
        py =`${(parseInt(document.getElementById(nm).style.top) + 30)}px`; // faz com que cada bloco desça 30px (seu tamanho)
        document.getElementById(nm).style.top = py;
        quantt++;
    }
    teste++;
    if(teste==(20-tamy)){ // quanto a peça atinge o chão
        clearInterval(timer);
        criapeca();
        teste=0;
    }
}

//função para pegar a posição de cada bloco da peça em movimento
function posobj()
{
    cont=0;
    quantt = quantb - (tamx * tamy);
    for(let y=quantt;y<quantb;y++)
    {
        nm = "b" + y;
        posy[cont]=document.getElementById(nm).style.top;
        posx[cont]=document.getElementById(nm).style.left;
        cont++;
    }
}

// função para detectar se há algum bloco embaixo ou ao lado da peça
function detecobj()
{
    posobj();
    for(let b=0;b<(tamx*tamy);b++)
    {
        for(let a=0;a<quantb - (tamx*tamy);a++)
        {
            nomp = document.getElementById('b'+a);
            if(nomp!=null)
            {
                posy2 = `${parseInt(nomp.style.top) -60}px`;
                posx2 = `${parseInt(nomp.style.left)}px`;
                if(posy[b]==posy2 && posx[b]==posx2)
                {
                    teste=(19-tamy);
                    if(posy[b]=='30px')
                    {
                        clearInterval(timer);
                        alert('YOU LOSE!');
                        window.location.reload();
                    }
                }
            }
        }
    }
}

function press(a)
{
    var tecla = a.keyCode;
    quantt = quantb - (tamx * tamy);
    switch(tecla)
    {
        case 37:
        for(let a=0;a<(tamy*tamx);a++)
        {
            for(let b=0;b<quantt;b++)
            {
                posobj();
                nm = "b" + b;
                if(document.getElementById(nm)!=null)
                {
                    posy2 = `${parseInt(document.getElementById(nm).style.top)}px`;
                    posx2 = `${parseInt(document.getElementById(nm).style.left) +30}px`;
                    if(posx[a]==posx2 && posy[a]==posy2)
                    {
                        flag1=false;
                    }
                }
            }
        }
        if(flag1==true)
        {
            posobj();
            for(let a=quantt;a<quantb;a++)
            {
                nm = "b" + a;
                if(document.getElementById(nm)!=null)
                {
                    flag2=true;
                    if(document.getElementById(nm).style.left=='0px')
                    {
                        flag1=false;
                        break;
                    }
                    document.getElementById(nm).style.left = `${parseInt(document.getElementById(nm).style.left) -30}px`;
                }
            }
        }
        break;

        case 39:
        for(let a=0;a<(tamy*tamx);a++)
        {
            for(let b=0;b<quantt;b++)
            {
                posobj();
                nm = "b" + b;
                if(document.getElementById(nm)!=null)
                {
                    posy2 = `${parseInt(document.getElementById(nm).style.top)}px`;
                    posx2 = `${parseInt(document.getElementById(nm).style.left) -30}px`;
                    if(posx[a]==posx2 && posy[a]==posy2)
                    {
                        flag2=false;
                    }
                }
            }
        }
        if(flag2==true)
        {
            for(let a=quantt;a<quantb;a++)
            {
                nm = "b" + a;
                if(document.getElementById(nm)!=null)
                {
                    flag1=true;
                    if(document.getElementById(nm).style.left=='300px') flag2=false;
                    if(document.getElementById(nm).style.left=='330px')
                    {
                        flag2=false;
                        break;
                    }
                    document.getElementById(nm).style.left = `${parseInt(document.getElementById(nm).style.left) +30}px`;
                }
            }
        }
        break;
    }
}

document.addEventListener('keyup',press);
