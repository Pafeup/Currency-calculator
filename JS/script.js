let form = document.querySelector(".js-form");
let baseValueElement = document.querySelector(".js-baseValue");
let currencyElement = document.querySelector(".js-selectCurrency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.69;
let USD = 4.39;
let GBP = 5.28;
let CHF = 4.71;
let JPY = 0.032;

form.addEventListener("input", () => {

    let baseValue = +(baseValueElement.value);
    let selectedCurrency = currencyElement.value;
    let result 
    // = resultElement.value;

    let currencyMark;

    switch (selectedCurrency) {
        case "EUR":
            result = baseValue / EUR;
            currencyMark = "€";
            break;
        case "USD":
            result = baseValue / USD;
            currencyMark = "$";
            break;
        case "GBP":
            result = baseValue / GBP;
            currencyMark = "£";
            break;
        case "CHF":
            result = baseValue / CHF;
            currencyMark = "₣";
            break;
        case "JPY":
            result = baseValue / JPY;
            currencyMark = "¥";
            break;
    }

    resultElement.innerText = `${baseValue.toFixed(2)} PLN = ${result.toFixed(2)} ${currencyMark}`;

    // if (baseValueElement.value == "") {
    //     resultElement.innerText = "0.00 PLN = 0.00 " + currencyMark;
    // }
    resultElement.innerText = baseValueElement.value == "" ? `0.00 PLN = 0.00 ${currencyMark}` : `${baseValue.toFixed(2)} PLN = ${result.toFixed(2)} ${currencyMark}`;
})
