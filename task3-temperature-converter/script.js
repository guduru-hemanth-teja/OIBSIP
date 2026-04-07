function convertTemp(){

    let value = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if(value === "" || isNaN(value)){
        result.innerText = "Enter valid number";
        result.style.color = "red";
        return;
    }

    let temp = parseFloat(value);
    let output = "";

    if(unit === "celsius"){
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if(unit === "fahrenheit"){
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else{
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.innerText = "Converted: " + output;
    result.style.color = "#2563eb";
}


/* DARK MODE */
function toggleMode(){
    document.body.classList.toggle("dark");
}


/* ENTER KEY SUPPORT */
document.getElementById("temperature").addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        convertTemp();
    }
});
