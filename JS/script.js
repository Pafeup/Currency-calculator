{
    const calculateResolut = (baseValue, selectedCurrency) => {
        const EUR = 4.69;
        const USD = 4.39;
        const GBP = 5.28;
        const CHF = 4.71;
        const JPY = 0.032;

        switch (selectedCurrency) {
            case "EUR":
                currencyMark = "€";
                return baseValue / EUR;

            case "USD":
                currencyMark = "$";
                return baseValue / USD;

            case "GBP":
                currencyMark = "£";
                return baseValue / GBP;

            case "CHF":
                currencyMark = "₣";
                return baseValue / CHF;

            case "JPY":
                currencyMark = "¥";
                return baseValue / JPY;
        }
    };

    const updateResultText = (baseValueElement, baseValue, result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = baseValueElement.value == "" ? `0.00 zł = 0.00 ${currencyMark}` : `${baseValue.toFixed(2)} zł = ${result.toFixed(2)} ${currencyMark}`;
    };

    const onFormSubmit = () => {
        const baseValueElement = document.querySelector(".js-baseValue");
        const currencyElement = document.querySelector(".js-selectCurrency");

        const baseValue = +(baseValueElement.value);
        const selectedCurrency = currencyElement.value;

        const result = calculateResolut(baseValue, selectedCurrency);

        updateResultText(baseValueElement, baseValue, result);
    };

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("input", onFormSubmit);
    };

    init();
}