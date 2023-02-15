function updateSubTotal(id){
    const deviceTotoaAmount =  document.getElementById(id);
    const deviceTotoaStr =  deviceTotoaAmount.innerText;
    const deviceTotal =  parseInt(deviceTotoaStr);
    return deviceTotal;
}
function setTextAmounById(elementId , value) {
    const subTotalAmount = document.getElementById(elementId);
    subTotalAmount.innerText =  value;
}

function calculateSubTotal (){
    const currentPhoneTotal = updateSubTotal('phone_total')
    const currentCaseTotal =  updateSubTotal('case_total')

    const subTotal = currentCaseTotal + currentPhoneTotal;
    setTextAmounById('sub_total', subTotal);

    const texAmountStr = (subTotal * 0.1).toFixed(2);
    const texAmount =  parseFloat(texAmountStr)
    setTextAmounById('tax_vat', texAmount)

    const finalTotal = subTotal + texAmount;
    setTextAmounById('total', finalTotal)

}