// Temperature Conversion Function
function convertTemp() {
    const input = document.getElementById("temperature");
    const unit = document.getElementById("unit");
    const outputBox = document.getElementById("result");

    let val = input.value;

    // Validation
    if (val.trim() === "" || isNaN(val)) {
        outputBox.innerText = "⚠ Enter a valid temperature!";
        outputBox.style.color = "red";
        return;
    }

    val = Number(val);
    let resultText = "";

    // Conversion logic
    switch(unit.value) {
        case "c":
            let f = (val * 9/5) + 32;
            resultText = `${val}°C = ${f.toFixed(1)}°F`;
            break;

        case "f":
            let c = (val - 32) * 5/9;
            resultText = `${val}°F = ${c.toFixed(1)}°C`;
            break;

        default:
            resultText = "Invalid selection";
    }

    // Display result
    outputBox.innerText = resultText;
    outputBox.style.color = "#38bdf8";
}


// Clear Result (extra feature 🔥)
function clearResult() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").innerText = "";
}
