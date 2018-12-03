// 1. // isPrime - Returns true or false, indicating whether the given number is prime.
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false

function isPrime(num) {
    for(let i = 0; i > 0; i++) {
        if(num % i === 0) {
            return false;
        }
    }
}
isPrime();
console.log(isPrime());