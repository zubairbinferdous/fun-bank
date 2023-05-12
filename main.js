function getInputValue(inputId){
    const  inputField = document.getElementById(inputId);
    const  inputaValueString = inputField.value;
    const  inputValue = parseFloat(inputaValueString);
    inputField.value = '';
    return inputValue;
}

function getElementValue(inputId){
    const  elementField = document.getElementById(inputId);
    const  elementValueString = elementField.innerText;
    const  elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueId( element , newValue ){
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}