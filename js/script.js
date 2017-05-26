var txt;

// Gibt Datum, Nutzerkennung und Verbrauchswert als String unter dem Display Button aus
function displayText() {
    var x = document.forms[0];
    var nutz = x.elements[0].value;
    var wert = x.elements[1].value;
    var date = new Date().toISOString().slice(0, 10);
   txt = "</br>" + date + ": " + "Nutzerkennung: " + nutz + "; " + "Verbrauchswert: " + wert + " kWh";
    document.getElementById("output").innerHTML += txt;
}

// Funktion um zufällig generierte Stromstärke und Spannung zu erhalten, 
// die eine Warnung ausgibt sobald die Stromspannung das Maximum überschreitet.
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

