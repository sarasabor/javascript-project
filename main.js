

// String Manipulation Functions

//? Reverse a String:

function reverseString(str) {  
    return str.split('').reverse().join('');  
}  


//? Count Characters:

function countCharacters(str) {  
    return str.length;  
}  


//? Capitalize Words:

function capitalizeWords(sentence) {  
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');  
}  

//? Array Functions

//* Find Maximum:

function findMaximum(arr) {  
    return Math.max(...arr);  
}  

//* Find Minimum:

function findMinimum(arr) {  
    return Math.min(...arr);  
}  

//* Sum of Array:

function sumOfArray(arr) {  
    return arr.reduce((acc, curr) => acc + curr, 0);  
}  

//* Filter Array:

function filterArray(arr, conditionFn) {  
    return arr.filter(conditionFn);  
}  

//? Mathematical Functions

//* Factorial:

function factorial(n) {  
    if (n < 0) return undefined; // Factorial for negative numbers is undefined  
    return n === 0 ? 1 : n * factorial(n - 1);  
}  

//* Prime Number Check:

function isPrime(num) {  
    if (num <= 1) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) return false;  
    }  
    return true;  
}  

//* Fibonacci Sequence:

function fibonacci(n) {  
    const seq = [0, 1];  
    for (let i = 2; i < n; i++) {  
        seq[i] = seq[i - 1] + seq[i - 2];  
    }  
    return seq.slice(0, n);  
}  