function calculateBMI() {
    let weight = document.getElementById("weightInput").value;
    let feet = document.getElementById("heightFeetInput").value;
    let inches = document.getElementById("heightInchesInput").value;
    let height;
    let bmi;
    let category;

    if (weight > 0 && feet >= 0 && inches >= 0) {
        height = (parseInt(feet) * 12 + parseInt(inches)) * 0.0254; // Convert height to meters
        bmi = weight / (height * height);
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }
        document.getElementById("output").innerText = "Your BMI is: " + bmi.toFixed(2) + " (" + category + ")";
    } else {
        document.getElementById("output").innerText = "Please enter valid weight and height.";
    }
}

function resetFields() {
    document.getElementById("weightInput").value = '';
    document.getElementById("heightFeetInput").value = '';
    document.getElementById("heightInchesInput").value = '';
    document.getElementById("output").innerText = '';
}
