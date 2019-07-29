"use strict";

/* This is how I initially did the calculations, but I was able to work out how to change it.
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

window.onload = init; */

/* These are the scripts for the calculations related to a future value of a one-time deposit assuming compounded interest.
*
* @param depositAmount (Number) - the amount of the inital deposit
* @param interestRate (Number) - the interest rate
* @param loanLength (Number) - the length of time the loan is in the account in years
*
* @return futureValue (Number) - the amount of the future value of the deposit
* @return interestEarned (Number) - the amount of interest earned on the initial deposit
* 
* Below is the calculation for the future value of the deposit
*/
function getFutureValue(depositAmount, interestRate, loanLength)
{
    let futureValue = depositAmount * (Math.pow((1 + (interestRate/1200)), (loanLength * 12)));
    return futureValue;
}

/* Below is the calculation for the interest earned on the deposit */
function getInterestEarned(depositAmount, futureValue)
{
    let interestEarned = futureValue - depositAmount;
    return interestEarned;
}

window.onload = function()
{
    let depositAmountField;
    let interestRateField;
    let loanLengthField;
    let futureValueField;
    let interestEarnedField;

    depositAmountField = document.getElementById("depositAmount");
    interestRateField = document.getElementById("interestRate");
    loanLengthField = document.getElementById("loanLength");
    futureValueField = document.getElementById("futureValue");
    interestEarnedField = document.getElementById("interestEarned");

    const btnCalculate = document.getElementById("calculate");
    btnCalculate.onclick = function()
    {
        let futureValue = getFutureValue(Number(depositAmountField.value), Number(interestRateField.value), Number(loanLengthField.value));
            if (isNaN(futureValue) == true || (futureValue) <= 0)
            {
                alert("One or more of your fields is not a positive number or has a non-numberic character.");
            }
            else
            {
                futureValueField.value = futureValue.toFixed(2);
            }

        let interestEarned = getInterestEarned(Number(depositAmountField.value), futureValue);
            if (isNaN(interestEarned) == true || (interestEarned) <= 0)
            {
                alert("One or more of your fields is not a positive number or has a non-numberic character.");
            }
            else
            {
                interestEarnedField.value = interestEarned.toFixed(2);
            }
    }
}