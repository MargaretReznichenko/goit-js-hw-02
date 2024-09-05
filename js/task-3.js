//Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст забороненихслів spam і sale і повертає результат перевірки.
//Слова в рядку параметра message можуть бути в довільному реєстр, наприклад spam або sale.
//Доповни код функції таким чином, що
//Якщо знайдено заборонено слово spam або sale, то функція повертає буль true
//Якщо знайдено в рядку відсутні заборонені слова, функція повертає буль false


function checkForSpam(message) {
    return message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") 
}console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true