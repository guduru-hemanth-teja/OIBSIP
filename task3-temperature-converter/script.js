function convertTemp() {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    // RESET STYLE
    result.style.opacity = "0";

    setTimeout(() => {

        if (tempInput === "" || isNaN(tempInput)) {
            result.innerHTML = "Please enter a valid number";
            result.style.color = "#ef4444"; // red
            result.style.opacity = "1";
            return;
        }

        const temp = parseFloat(tempInput);
        let output = "";

        if (unit === "celsius") {
            const f = (temp * 9/5) + 32;
            const k = temp + 273.15;
            output = `${f.toFixed(2)} °F  |  ${k.toFixed(2)} K`;
        } 
        else if (unit === "fahrenheit") {
            const c = (temp - 32) * 5/9;
            const k = c + 273.15;
            output = `${c.toFixed(2)} °C  |  ${k.toFixed(2)} K`;
        } 
        else {
            const c = temp - 273.15;
            const f = (c * 9/5) + 32;
            output = `${c.toFixed(2)} °C  |  ${f.toFixed(2)} °F`;
        }

        result.innerHTML = `Converted: ${output}`;
        result.style.color = "#2563eb"; // premium blue
        result.style.opacity = "1";

    }, 200); // smooth delay
}


// 🌗 DARK MODE (SMOOTH)
function toggleMode() {
    document.body.classList.toggle("dark");

    const container = document.querySelector(".container");

    if (document.body.classList.contains("dark")) {
        document.body.style.background = "linear-gradient(135deg, #0f172a, #1e293b)";
        container.style.background = "rgba(0,0,0,0.5)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #e0f2fe, #dbeafe)";
        container.style.background = "rgba(255,255,255,0.6)";
    }
    .result {
    transition: all 0.3s ease;
    }
}
