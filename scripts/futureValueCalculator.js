//These are the scripts for the future value calculations
"use strict";

function getFutureValue(depositAmount, interestRate, loanLength)
{
    let futureValue = depositAmount * (Math.pow((1 + (interestRate/1200)), (loanLength * 12)));
    return futureValue;
}

function getInterestEarned(depositAmount, futureValue)
{
    let interestEarned = futureValue - depositAmount;
    return interestEarned;
}

//use inputs
let depositAmountField;
let interestRateField;
let loanLengthField;
let futureValueField;
let interestEarnedField;

function calculate()
{
    //display future value
    let futureValue = getFutureValue(Number(depositAmountField.value), Number(interestRateField.value), Number(loanLengthField.value));
    futureValueField.value = futureValue.toFixed(2);

    //display total interest earned
    let interestEarned = getInterestEarned(Number(depositAmountField.value), futureValue);
    interestEarnedField.value = interestEarned.toFixed(2);
}

function init()
{
    depositAmountField = document.getElementById("depositAmount");
    interestRateField = document.getElementById("interestRate");
    loanLengthField = document.getElementById("loanLength");
    futureValueField = document.getElementById("futureValue");
    interestEarnedField = document.getElementById("interestEarned");

    const btnCalculate = document.getElementById("calculate");
    btnCalculate.onclick = calculate;
}


window.onload = init;