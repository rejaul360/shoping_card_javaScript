
function updatePhoneNumber(isupdate) {
    const caseNumberField = document.getElementById('case_phone_field');
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

function updatePhonePrice(newCaseNumber) {
    const totalPrice = newCaseNumber * 1219;
    const caseTextElement = document.getElementById('phone_total');
    caseTextElement.innerText = totalPrice;
}
document.getElementById('btn_phone_plus').addEventListener('click', function () {
    const newCaseNumber = updatePhoneNumber(true);

    updatePhonePrice(newCaseNumber)
    calculateSubTotal ()
});

document.getElementById('btn_phone_minus').addEventListener('click', function () {
    const newCaseNumber = updatePhoneNumber(false);

    updatePhonePrice(newCaseNumber)
    calculateSubTotal ()
})
