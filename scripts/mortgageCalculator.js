//These are the scripts for the mortgage calculations
"use strict";

let loanAmountField;
let interestRateField;
let loanLengthField;
let monthlyPaymentField;
let totalLoanField;

function calculateMonthlyPayment()
{
    let monthlyPayment = (loanAmount * (interestRate/1200)) / (1 -( Math.pow((1 + interestRate / 1200), (-12 * loanLength))));
    return monthlyPayment;
}

function calculate()
{
    
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