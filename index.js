// Функція для додавання двох чисел
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

// Функція для віднімання двох чисел
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

// Функція для множення двох чисел
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

// Функція для ділення двох чисел
/**
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
function divide(a, b) {
    if (b === 0) {
        return "Ділення на нуль не дозволене!";
    }
    return a / b;
}

// Тестування основних математичних функцій
/** @type {number} */
let num1 = 10;

/** @type {number} */
let num2 = 20;

console.log("Додавання:", add(num1, num2));
console.log("Віднімання:", subtract(num1, num2));
console.log("Множення:", multiply(num1, num2));
console.log("Ділення:", divide(num1, num2));

// Функція для перевороту рядка
/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Тестування функції перевороту рядка
/** @type {string} */
let myString = "JavaScript";
console.log("Оригінальний рядок:", myString);
console.log("Перевернутий рядок:", reverseString(myString));

// Функція для знаходження максимального значення в масиві
/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Тестування функції пошуку максимуму
/** @type {number[]} */
let numArray = [10, 34, 67, 1, 99, 34];
console.log("Масив:", numArray);
console.log("Максимальне значення:", findMax(numArray));

// Функція для знаходження мінімального значення в масиві
/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Тестування функції пошуку мінімуму
console.log("Мінімальне значення:", findMin(numArray));

// Функція для обчислення факторіалу
/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n < 0) return -1;
    else if (n === 0 || n === 1) return 1;
    else {
        return n * factorial(n - 1);
    }
}

// Тестування функції факторіалу
console.log("Факторіал числа 5:", factorial(5));

// Функція для перевірки, чи є число простим
/**
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Тестування перевірки на просте число
console.log("Чи є 7 простим числом?:", isPrime(7));
console.log("Чи є 10 простим числом?:", isPrime(10));

// Функція для фільтрації парних чисел з масиву
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Тестування фільтрації парних чисел
console.log("Парні числа в масиві:", filterEvens(numArray));

// Функція для підрахунку кількості голосних у рядку
/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Тестування підрахунку голосних
console.log("Кількість голосних у 'JavaScript':", countVowels(myString));

// Функція для генерації послідовності Фібоначчі
/**
 * @param {number} n
 * @returns {number[]}
 */
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Тестування послідовності Фібоначчі
console.log("Послідовність Фібоначчі до 10 термінів:", fibonacci(10));

// Функція для об'єднання двох масивів і видалення дублікатів
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Тестування об'єднання масивів без дублікатів
/** @type {number[]} */
let array1 = [1, 2, 3];

/** @type {number[]} */
let array2 = [3, 4, 5];
console.log("Об'єднаний масив без дублікатів:", mergeArrays(array1, array2));

// Функція для сортування масиву за зростанням
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Тестування сортування масиву
console.log("Відсортований масив:", sortArray(numArray));

// Функція для перемішування масиву
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Тестування перемішування масиву
console.log("Перемішаний масив:", shuffleArray([...numArray]));

// Функція для перевірки, чи є рядок паліндромом
/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Тестування перевірки на паліндром
console.log("Чи є 'racecar' паліндромом?:", isPalindrome("racecar"));
console.log("Чи є 'hello' паліндромом?:", isPalindrome("hello"));

// Функція для перетворення температури з Цельсія у Фаренгейти
/**
 * @param {number} celsius
 * @returns {number}
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Тестування перетворення з Цельсія у Фаренгейти
console.log("25°C у Фаренгейти:", celsiusToFahrenheit(25));

// Функція для перетворення температури з Фаренгейтів у Цельсій
/**
 * @param {number} fahrenheit
 * @returns {number}
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Тестування перетворення з Фаренгейтів у Цельсій
console.log("77°F у Цельсій:", fahrenheitToCelsius(77));

// Функція для підрахунку суми елементів масиву
/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Тестування суми масиву
console.log("Сума масиву:", sumArray(numArray));

// Функція для знаходження середнього значення масиву
/**
 * @param {number[]} arr
 * @returns {number}
 */
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

// Тестування середнього значення масиву
console.log("Середнє значення масиву:", averageArray(numArray));

// Функція для генерації випадкового числа між двома значеннями
/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Тестування генерації випадкового числа
console.log("Випадкове число між 1 та 100:", randomNumber(1, 100));
