
function calculateLoan() {
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    document.getElementById('monthlyPayment').innerText = '$' + monthlyPayment.toFixed(2);
}


function calculateMortgageAffordability() {
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var monthlyDebtPayments = parseFloat(document.getElementById('monthlyDebtPayments').value);
    var interestRate = parseFloat(document.getElementById('mortgageInterestRate').value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById('mortgageLoanTerm').value) * 12;

    var monthlyIncome = annualIncome / 12;
    var frontRatio = 0.28;
    var backRatio = 0.36;

    var maxPayment = monthlyIncome * frontRatio - monthlyDebtPayments;
    var maxMortgage = maxPayment / ((interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1));

    document.getElementById('maxMortgage').innerText = '$' + maxMortgage.toFixed(2);
}


function calculateTax() {
    var totalAmount = parseFloat(document.getElementById('totalAmount').value);
    var taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

    var totalWithTax = totalAmount * (1 + taxRate);

    document.getElementById('totalWithTax').innerText = '$' + totalWithTax.toFixed(2);
}


function calculateCarPayment() {
    var carPrice = parseFloat(document.getElementById('carPrice').value);
    var downPayment = parseFloat(document.getElementById('carDownPayment').value);
    var interestRate = parseFloat(document.getElementById('carInterestRate').value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById('carLoanTerm').value) * 12;

    var loanAmount = carPrice - downPayment;
    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    document.getElementById('monthlyCarPayment').innerText = '$' + monthlyPayment.toFixed(2);
}


function calculateLeasing() {
    var vehiclePrice = parseFloat(document.getElementById('leasingPrice').value);
    var leaseTerm = parseFloat(document.getElementById('leasingTerm').value);
    var residualValue = parseFloat(document.getElementById('leasingResidualValue').value);
    var moneyFactor = parseFloat(document.getElementById('leasingMoneyFactor').value);

    var depreciation = (vehiclePrice - (vehiclePrice * (residualValue / 100))) / leaseTerm;
    var interest = (vehiclePrice + (vehiclePrice * (residualValue / 100))) * moneyFactor;
    var monthlyLeasePayment = (depreciation + interest) / 12;

    document.getElementById('monthlyLeasePayment').innerText = '$' + monthlyLeasePayment.toFixed(2);
}


function calculateMortgageRate() {
    var loanAmount = parseFloat(document.getElementById('mortgageLoanAmount').value);
    var monthlyPayment = parseFloat(document.getElementById('mortgageMonthlyPayment').value);
    var loanTerm = parseFloat(document.getElementById('mortgageTerm').value) * 12;

    var interestRate = Math.pow((monthlyPayment / (loanAmount * (1 - Math.pow(1 + (loanTerm / 12), -loanTerm)))), -1) - 1;
    var annualInterestRate = interestRate * 12 * 100;

    document.getElementById('mortgageRate').innerText = annualInterestRate.toFixed(2) + '%';
}


function calculateBudgetSetup() {
    var monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    var housingExpenses = parseFloat(document.getElementById('housingExpenses').value);
    var transportationExpenses = parseFloat(document.getElementById('transportationExpenses').value);
    var utilitiesExpenses = parseFloat(document.getElementById('utilitiesExpenses').value);
    var otherExpenses = parseFloat(document.getElementById('otherExpenses').value);

    var totalExpenses = housingExpenses + transportationExpenses + utilitiesExpenses + otherExpenses;
    var remainingIncome = monthlyIncome - totalExpenses;

    var budgetSetupSummary = "Housing Expenses: $" + housingExpenses.toFixed(2) + "<br>" +
                             "Transportation Expenses: $" + transportationExpenses.toFixed(2) + "<br>" +
                             "Utilities Expenses: $" + utilitiesExpenses.toFixed(2) + "<br>" +
                             "Other Expenses: $" + otherExpenses.toFixed(2) + "<br>" +
                             "Remaining Income: $" + remainingIncome.toFixed(2);

    document.getElementById('budgetSetupSummary').innerHTML = budgetSetupSummary;
}


function calculateStudentLoanPayoff() {
    var loanAmount = parseFloat(document.getElementById('studentLoanAmount').value);
    var interestRate = parseFloat(document.getElementById('studentLoanInterestRate').value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById('studentLoanTerm').value) * 12;

    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    var totalInterest = monthlyPayment * loanTerm - loanAmount;
    var payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + Math.ceil((loanAmount + totalInterest) / monthlyPayment));

    document.getElementById('studentLoanMonthlyPayment').innerText = '$' + monthlyPayment.toFixed(2);
    document.getElementById('studentLoanTotalInterest').innerText = '$' + totalInterest.toFixed(2);
    document.getElementById('studentLoanPayoffDate').innerText = payoffDate.toDateString();
}
