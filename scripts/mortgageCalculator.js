//These are the scripts for the mortgage calculations
"use strict";

let loanAmountField;
let interestRateField;
let loanLengthField;
let monthlyPaymentField;
let totalLoanField;

function calculateMonthlyPayment()
{
    let monthlyPaymentAmount = (loanAmount.value * (interestRate.value/1200)) / (1 -( Math.pow((1 + interestRate.value / 1200), (-12 * loanLength.value))));
    return monthlyPaymentAmount;
}


function calculate()
{
    //display monthly payment
    let monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanLength);
    monthlyPaymentField.value = monthlyPayment.toFixed(2);

    //calculate and display total payment
    let totalLoan = ((loanLength.value * 12) * monthlyPayment);
    totalLoanField.value = totalLoan.toFixed(2);
}

function init()
{
    loanAmountField = document.getElementById("loanAmount");
    interestRateField = document.getElementById("interestRate");
    loanLengthField = document.getElementById("loanLength");
    monthlyPaymentField = document.getElementById("monthlyPayment");
    totalLoanField = document.getElementById("totalLoan");

    const btnCalculate = document.getElementById("calculate");
    btnCalculate.onclick = calculate;
}

window.onload = init;