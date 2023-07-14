function home(){
    let home = document.getElementById("Home");
    let pay = document.getElementById("Pay");
    let invest = document.getElementById("Invest");
    
    let pbg = document.getElementById("pay-bg");
    let hbg = document.getElementById("home-bg");
    let ibg = document.getElementById("invest-bg");
    let cbg = document.getElementById("card-bg");
    let mbg = document.getElementById("more-bg");

    home.style.display = "block";
    pay.style.display = "none";
    invest.style.visibility = "hidden";

    hbg.style.background = "rgba(255, 255, 255, 0.247)";
    pbg.style.background = "rgba(255, 255, 255, 0.048)";
    ibg.style.background = "rgba(255, 255, 255, 0.048)";
    cbg.style.background = "rgba(255, 255, 255, 0.048)";
    mbg.style.background = "rgba(255, 255, 255, 0.048)";
}

function pay() {
    let home = document.getElementById("Home");
    let pay = document.getElementById("Pay");
    let invest = document.getElementById("Invest");
    
    let pbg = document.getElementById("pay-bg");
    let hbg = document.getElementById("home-bg");
    let ibg = document.getElementById("invest-bg");
    let cbg = document.getElementById("card-bg");
    let mbg = document.getElementById("more-bg");

    pay.style.display = "block";
    home.style.display = "none";
    invest.style.visibility = "hidden";

    pbg.style.background = "rgba(255, 255, 255, 0.247)";
    hbg.style.background = "rgba(255, 255, 255, 0.048)";
    ibg.style.background = "rgba(255, 255, 255, 0.048)";
    cbg.style.background = "rgba(255, 255, 255, 0.048)";
    mbg.style.background = "rgba(255, 255, 255, 0.048)";
}

function invest() {
    let home = document.getElementById("Home");
    let pay = document.getElementById("Pay");
    let invest = document.getElementById("Invest");
    
    let pbg = document.getElementById("pay-bg");
    let hbg = document.getElementById("home-bg");
    let ibg = document.getElementById("invest-bg");
    let cbg = document.getElementById("card-bg");
    let mbg = document.getElementById("more-bg");

    pay.style.display = "none";
    home.style.display = "none";
    invest.style.visibility = "visible";

    ibg.style.background = "rgba(255, 255, 255, 0.247)";
    hbg.style.background = "rgba(255, 255, 255, 0.048)";
    cbg.style.background = "rgba(255, 255, 255, 0.048)";
    pbg.style.background = "rgba(255, 255, 255, 0.048)";
    mbg.style.background = "rgba(255, 255, 255, 0.048)";
}

function card() {
    let home = document.getElementById("Home");
    let pay = document.getElementById("Pay");
    let invest = document.getElementById("Invest");
    
    let pbg = document.getElementById("pay-bg");
    let hbg = document.getElementById("home-bg");
    let ibg = document.getElementById("invest-bg");
    let cbg = document.getElementById("card-bg");
    let mbg = document.getElementById("more-bg");

    pay.style.display = "none";
    home.style.display = "none";
    invest.style.visibility = "visible";

    cbg.style.background = "rgba(255, 255, 255, 0.247)";
    hbg.style.background = "rgba(255, 255, 255, 0.048)";
    ibg.style.background = "rgba(255, 255, 255, 0.048)";
    pbg.style.background = "rgba(255, 255, 255, 0.048)";
    mbg.style.background = "rgba(255, 255, 255, 0.048)";
}

function more() {
    let home = document.getElementById("Home");
    let pay = document.getElementById("Pay");
    let invest = document.getElementById("Invest");
    
    let pbg = document.getElementById("pay-bg");
    let hbg = document.getElementById("home-bg");
    let ibg = document.getElementById("invest-bg");
    let cbg = document.getElementById("card-bg");
    let mbg = document.getElementById("more-bg");

    pay.style.display = "none";
    home.style.display = "none";
    invest.style.visibility = "visible";

    mbg.style.background = "rgba(255, 255, 255, 0.247)";
    hbg.style.background = "rgba(255, 255, 255, 0.048)";
    ibg.style.background = "rgba(255, 255, 255, 0.048)";
    pbg.style.background = "rgba(255, 255, 255, 0.048)";
    cbg.style.background = "rgba(255, 255, 255, 0.048)";
}