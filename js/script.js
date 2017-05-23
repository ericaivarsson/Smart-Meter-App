var txt;

function displayText() {
    var x = document.forms[0];
    var nutz = x.elements[0].value;
    var wert = x.elements[1].value;
    var date = new Date().toISOString().slice(0, 10);
    txt = "</br>" + date + ": " + &emsp;&emsp; + "Nutzerkennung: " + nutz + &emsp;+ ";" + &emsp; + "Verbrauchswert: " + wert;
    document.getElementById("output").innerHTML += txt;
}


function randomizeStuff(){
    var spannung = document.getElementById("spannung");
    spannung.innerHTML = ((Math.random() * 21 + 220).toFixed(1));
    var stromstaerke = document.getElementById("stromstaerke");
    var max= parseInt(document.getElementById("max").innerHTML);
    max +=5;
    stromstaerke.innerHTML = (Math.random() * max).toFixed(1);
    if (stromstaerke.innerHTML>(max-5)){
        alert("Warnung! Die Stromstärke liegt über der maximalen Belastung!");
    }
}

