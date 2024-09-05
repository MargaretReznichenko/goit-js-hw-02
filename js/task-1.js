//Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне запеспечення для відділу продажів.Оголоси функцію
//makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
//Вона оголошує три параметри, значення яких будуть задавати під час виклику
//quantity - кількість замовленних дроїдів
//pricePerDroid - ціна одного дроїда
//customerCredits - сумма коштів на рахунку клієнта
//Доповнити функцію таким чином
//Оголоси зміну для зберігання загальної суми замовлення(загальна вартість усіх замовленних дроїдів) і задай їй вираз розрахунку цієї суми.
//Додай перевірку, чи зможе клієнт оплатити замовлення
//якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
//В іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!" де < quantity > це кількість замовленних дроїдів а < totalPrice > це їх загальна вартість.





function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    return totalPrice > customerCredits ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
