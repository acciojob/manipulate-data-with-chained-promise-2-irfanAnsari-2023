function manipulateArray() {
    // Step 1: Initial Promise - Resolves with [1, 2, 3, 4] after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    // Step 2: Filter out odd numbers (after 1 second)
    .then(numbers => {
        return new Promise(resolve => {
            setTimeout(() => {
                let evenNumbers = numbers.filter(num => num % 2 === 0);
                document.getElementById("output").textContent = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    // Step 3: Multiply even numbers by 2 (after 2 seconds)
    .then(evenNumbers => {
        return new Promise(resolve => {
            setTimeout(() => {
                let doubledNumbers = evenNumbers.map(num => num * 2);
                document.getElementById("output").textContent = doubledNumbers.join(",");
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}

// Ensure the function runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", manipulateArray);
