function clike ()
{
    conf.score += conf.clickPower;
    scoreUp(conf.score);
}

function scoreUp (score)
{
    document.querySelector("#cont").children[0].textContent = "clicks: " + score;
}

let conf = 
{
    score:0,
    clickPower:1,
    clickUp:
    {
        level:1,
        cost:50,
    },
    autoClick:
    {
        level:0,
        cost:100,
        time:1000,
        interval:null,
    }
}

function powUpClikUpdate()
{
    let element = document.getElementsByClassName("item")[0];
        element.children[2].textContent = "cost: " + conf.clickUp.cost;
        element.children[1].textContent = `click up (${conf.clickUp.level})`;       

}

function powUpAuCliUpdate()
{
    let element = document.getElementsByClassName("item")[1];
        element.children[2].textContent = "cost: " + conf.autoClick.cost;
        element.children[1].textContent = `auto click: (${conf.autoClick.level})`;   

}

function powUpClik ()
{
    if (conf.score >= conf.clickUp.cost)
    {
        
        conf.score -= conf.clickUp.cost;
        conf.clickPower += 1;
        scoreUp(conf.score);
        conf.clickUp.level ++;
        conf.clickUp.cost = Math.round(conf.clickUp.cost * 1.5);
        powUpClikUpdate();
    }
}

function powUpAutClick ()
{
    if (conf.score >= conf.autoClick.cost)
    {
        if(conf.autoClick.interval)
        {
            clearInterval(conf.autoClick.interval);
        }
        conf.score -= conf.autoClick.cost;
        scoreUp(conf.score);
        conf.autoClick.level++;
        conf.autoClick.cost = conf.autoClick.cost * 2;
        powUpAuCliUpdate();
        conf.autoClick.interval = setInterval(clike, conf.autoClick.time);   
        conf.autoClick.time = conf.autoClick.time * 0.8; 
    }
}

function save()
{
    localStorage.setItem("data", JSON.stringify(conf));
}

function load()
{
    if(localStorage.getItem("data"))
    {
        conf = JSON.parse();
    scoreUp(conf.score);
    powUpAuCliUpdate();
    powUpClikUpdate();
    }
}

function reset()
{
    localStorage.clear();
}

// arrumar load autoclick 
