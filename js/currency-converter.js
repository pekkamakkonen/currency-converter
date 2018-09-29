var currencies = [
    [1, "Euro"],
    [10.3208, "Ruotsin kruunu"],
    [78.9011, "Venäjän rupla"],
    [1.1707, "Yhdysvaltain dollari"]
];
console.log(currencies[0][1]);

function printCurrencies() {

    for (let i = 0; i < currencies.length; i++) {
        var option = "<option value=" + (currencies[i][0]) + ">" + (currencies[i][1]) + "</option>";
        document.write(option);
    }
}

function printValue() {
    let amount = document.forms["currencyConverter"]["amount"].value;
    let currency1 = document.forms["currencyConverter"]["currency1"].value;
    let currency2 = document.forms["currencyConverter"]["currency2"].value;

    let newValue = currency2 / currency1 * amount;
    document.write(newValue);
}