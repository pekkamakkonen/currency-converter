var currencies = [
    [1, "Euro"],
    [10.3208, "Ruotsin kruunu"],
    [78.9011, "Venäjän rupla"],
    [1.1707, "Yhdysvaltain dollari"]
];

function printCurrencies() {
    for (let i = 0; i < currencies.length; i++) {
        var option = "<option value=" + (currencies[i][0]) + ">" + (currencies[i][1]) + "</option>";
        document.write(option);
    }
}

function printValue() {
    let amount = document.getElementById("amount").value;
    let currency1 = document.getElementById("currency1").value;
    let currency2 = document.getElementById("currency2").value;
    let newValue = currency2 / currency1 * amount;

    document.getElementById("newValue").innerHTML = newValue.toFixed(2);
}