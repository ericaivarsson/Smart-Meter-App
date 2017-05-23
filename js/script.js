var txt;

function displayText() {
    var x = document.forms[0];
    var nutz = x.elements[0].value;
    var wert = x.elements[1].value;
    var date = new Date().toISOString().slice(0, 10);
    txt = "</br>" + date + ": " + nutz + "," + wert;
    document.getElementById("output").innerHTML += txt;
}


function randomizeStuff(){
    var spannung = document.getElementById("spannung1"|"spannung2");
    spannung.innerHTML = ((Math.random() * 21 + 220).toFixed(1));
    var stromstaerke = document.getElementById("stromstaerke1"|"stromstaerke2");
    var max= parseInt(document.getElementById("max1"|"max2").innerHTML);
    max +=5;
    stromstaerke.innerHTML = (Math.random() * max).toFixed(1);
    if (stromstaerke.innerHTML>(max-5)){
        alert("Warnung! Die Stromstärke liegt über der maximalen Belastung!");
    }
}

