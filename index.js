const currencyE1_one = document.getElementById("currency-one");
const currencyE1_two = document.getElementById("currency-two");
const currencyE1_one = document.getElementById("amount-one");
const currencyE1_two = document.getElementById("amount-two");

const rateEL = document.getElementById("rate");
const swap = document.getElementById("swap")

//fetching the exchange rate and updated to dom

const calculate = () => {
    const currency_one = currencyE1_one.value;
    const currency_two = currencyE1_two.value;
    
    fetch(`exchange api link $(currency_one)`).then(res => res.json()).then(data => {
        console.log(data);

        const rate = data.
        conversion_rates[currency_two];

        rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEl_two.value= (amountEl_one.value * rate).toFixed(2);
    })
};
//event listner

currencyE1_one.addEventListener('change',calculate)
currencyE1_two.addEventListener('change',calculate)
amountEl_one.addEventListener('change',calculate)
amountEl_two.addEventListener('change',calculate)

//swap
swap.addEventListener('click', () => {
    const temp = currencyE1_one.value;
    currencyE1_one.value = currencyE1_two;
    currencyE1_two.value = temp;

    calculate();

})
calculate();