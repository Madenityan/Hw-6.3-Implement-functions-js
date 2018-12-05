// 1. // isPrime - Returns true or false, indicating whether the given number is prime.
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false

function isPrime(number) {
    if (number <= 1 ) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(17));

// 2. // factorial - Returns a number that is the factorial of the given number.
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial(n) {
    if (n === 0 || n === 1){
        return 1;
    }
    return factorial(n-1)*n;
}
console.log(factorial(6));

// 3. // fib - Returns the nth Fibonacci number.
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765
// Fn = Fn-1 + Fn-2

function fib(n) {
    if(n === 0) {
        return 0
    }
    let f1 = 0;
    let f2 = 1;
    let numberFib = 1;
    for(let i = 2; i <=n; i++) {
        numberFib = f1 + f2;
        f1 = f2;
        f2 = numberFib;
    }
    return numberFib;
}
console.log(fib(1));

// 4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

function isSorted(arr) {
    let sort = arr.sort();

    if (arr.length === 0)  {
        return true;
    }
    if (sort.join() === arr.join()) {
        return true;
    }
    if (sort.join !== arr.join()) {
        return false;
    }
    return true
}
console.log(isSorted([3, 9, -3, 10]));

// 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

function reverse(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse(''));

// 6. //indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1











