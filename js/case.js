function updateCaseNumber(isupdate) {
    const caseNumberField = document.getElementById('case_number_field');
    const caseNumberFieldStr = caseNumberField.value;
    const caseNumber = parseInt(caseNumberFieldStr);

    let newCaseNumber;
    if (isupdate === true) {
        newCaseNumber = caseNumber + 1;
    } else {
        newCaseNumber = caseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updatePrice(newCaseNumber) {
    const totalPrice = newCaseNumber * 59;
    const caseTextElement = document.getElementById('case_total');
    caseTextElement.innerText = totalPrice;
}
document.getElementById('btn_case_plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updatePrice(newCaseNumber)
    calculateSubTotal ()
});

document.getElementById('btn_case_minus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false);

    updatePrice(newCaseNumber)
    calculateSubTotal ()
})
