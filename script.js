// script.js
function calculateSalary() {
    let grossSalary = parseFloat(document.getElementById("grossSalary").value) || 0;
    let socso = 0;
    let eis = calculateEIS(grossSalary);
    let epf = calculateEPF(grossSalary);
    if (grossSalary <= 30) socso = 0.1;
    else if (grossSalary <= 50) socso = 0.2;
    else if (grossSalary <= 70) socso = 0.3;
    else if (grossSalary <= 100) socso = 0.4;
    else if (grossSalary <= 140) socso = 0.6;
    else if (grossSalary <= 200) socso = 0.85;
    else if (grossSalary <= 300) socso = 1.25;
    else if (grossSalary <= 400) socso = 1.75;
    else if (grossSalary <= 500) socso = 2.25;
    else if (grossSalary <= 600) socso = 2.75;
    else if (grossSalary <= 700) socso = 3.25;
    else if (grossSalary <= 800) socso = 3.75;
    else if (grossSalary <= 900) socso = 4.25;
    else if (grossSalary <= 1000) socso = 4.75;
    else if (grossSalary <= 2000) socso = 9.75;
    else if (grossSalary <= 3000) socso = 14.75;
    else if (grossSalary <= 4000) socso = 19.75;
    else if (grossSalary <= 5000) socso = 24.75;
    let netSalary = grossSalary - (socso + eis + epf);
    document.getElementById("grossSalaryValue").textContent = grossSalary.toFixed(2);
    document.getElementById("socsoValue").textContent = socso.toFixed(2);
    document.getElementById("eisValue").textContent = eis.toFixed(2);
    document.getElementById("epfValue").textContent = epf.toFixed(2);
    document.getElementById("netSalaryValue").textContent = netSalary.toFixed(2);
}
function calculateEIS(salary) {
    if (salary <= 30) return 0.05;
    else if (salary <= 50) return 0.10;
    else if (salary <= 70) return 0.15;
    else if (salary <= 100) return 0.20;
    else if (salary <= 2000) return 3.90;
    else if (salary <= 3000) return 5.90;
    else if (salary <= 4000) return 7.90;
    else return 0;
}
function calculateEPF(salary) {
    return salary * 0.11; // EPF 11% deduction
}
