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
    let arr2 = arr.slice();
    arr.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });

    if (arr.length === 0)  {
        return true;
    }
    return arr2.join() === arr.join();
}
console.log(isSorted([-Infinity, -5, 0, 3, 9]));

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
console.log(reverse('fedcba'));

// 6. //indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

function indexOf(arr, numb) {
   for (let i = 0; i < arr.length; i++) {
       if(arr[i]===numb) {
           return i;
       }
   }
    return -1;
}
console.log(indexOf([1, 2, 3], 4));

//
// 7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

function isPalindrome(str) {
    // if(str === str.split('').reverse().join('')) {
    //     return true
    // } else {
    //     return false;
    // }
    // return str === str.split('').reverse().join('');     //not working for ('A man a plan a canal Panama')

    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    let lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('A man a plan a canal Panama'));

// 8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

function missing(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });

    if (arr.length === 0) {
        return undefined;
    }

    for (let i = 1; i <= arr.length; i++) {
        if (i !== arr[i - 1]) {
            return i;
        }
    }
    return undefined;
}
console.log(missing([1, 2, 3, 4]));

// 9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false

function isBalanced(string) {
    let count = 0;
    for(let letter of string) {
        if (letter === '{') {
            count++
        }
        if (letter === '}') {
            count--;
            if (count < 0) {
                return false
            }
        }
    }
    return count === 0
}
console.log(isBalanced('foo { bar { baz }'));
