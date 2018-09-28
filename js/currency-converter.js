function printValue() {
    let amount = document.forms["currencyConverter"]["amount"].value;
    let currency1 = document.forms["currencyConverter"]["currency1"].value;
    let currency2 = document.forms["currencyConverter"]["currency2"].value;

    let newValue = currency2 / currency1 * amount;
    document.write(newValue);
}