function capitalizeFirstLetters(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return string; // Return the original string if it's not valid
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Example usage:
console.log(capitalizeFirstLetters("hello world")); // "Hello World"


const string = "JavaScript is amazing";
const aCount = string.split('a').length- 1; // Count occurrences of 'a'
console.log(`The letter 'a' appears ${aCount} times in the string.`); 
// Output: The letter 'a' appears 3 times in the string.

let count = 1;
while (count <= 5) {
    console.log(3*count);
    count++;
}
// Output: 3, 6, 9, 12, 15