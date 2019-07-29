"use strict";

/* This is how I initially did the calculations, but I was able to work out how to change it.
let loanAmountField;
let interestRateField;
let loanLengthField;
let monthlyPaymentField;
let totalLoanField;

function calculateMonthlyPayment(loanAmount, interestRate, loanLength)
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

window.onload = init; */

/*These are the scripts for the mortgage calculations
*
* @param loanAmount (Number) - the amount of the loan deposit
* @param interestRate (Number) - the interest rate
* @param loanLength (Number) - the length of the loan in years
*
* @return monthlyPayment (Number) - the amount of a monthly payment
* @return totalLoan (Number) - the total cost of the loan
* 
* Below is the calculation for a montly payment for a mortgage.
*/
function calculateMonthlyPayment(loanAmount, interestRate, loanLength)
{
    let monthlyPaymentAmount = (loanAmount * (interestRate/1200)) / (1 - (Math.pow((1 + interestRate / 1200), (-12 * loanLength))));
    return monthlyPaymentAmount;
}

window.onload = function() 
{
    let loanAmountField;
    let interestRateField;
    let loanLengthField;
    let monthlyPaymentField;
    let totalLoanField;

    loanAmountField = document.getElementById("loanAmount");
    interestRateField = document.getElementById("interestRate");
    loanLengthField = document.getElementById("loanLength");
    monthlyPaymentField = document.getElementById("monthlyPayment");
    totalLoanField = document.getElementById("totalLoan");

    const btnCalculate = document.getElementById("calculate");
    btnCalculate.onclick = function()
    {
        let monthlyPayment = calculateMonthlyPayment(Number(loanAmountField.value), Number(interestRateField.value), Number(loanLengthField.value));
            if (isNaN(monthlyPayment) == true || (monthlyPayment) <= 0)
            {
                alert("One or more of your fields is not a positive number or has a non-numberic character.");
            }
            else
            {
                monthlyPaymentField.value = monthlyPayment.toFixed(2);
            }

        let totalLoan = ((loanLength.value * 12) * monthlyPayment);
            if (isNaN(totalLoan) == true || (totalLoan) <= 0)
            {
                alert("One or more of your fields is not a positive number or has a non-numberic character.");
            }
            else
            {
                totalLoanField.value = totalLoan.toFixed(2);
            }
    }
}