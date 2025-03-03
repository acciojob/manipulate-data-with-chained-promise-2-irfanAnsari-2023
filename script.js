//your JS code here. If required.
function manipulateArray() {
    // Step 1: Initial Promise - Resolves after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    // Step 2: Filter out odd numbers (after 1 second)
    .then(numbers => {
        return new Promise(resolve => {
            setTimeout(() => {
                let evenNumbers = numbers.filter(num => num % 2 === 0);
                document.getElementById("output").innerText = evenNumbers.join(", ");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    // Step 3: Multiply even numbers by 2 (after 2 seconds)
    .then(evenNumbers => {
        return new Promise(resolve => {
            setTimeout(() => {
                let doubledNumbers = evenNumbers.map(num => num * 2);
                document.getElementById("output").innerText = doubledNumbers.join(", ");
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}

// Call the function when the page loads
manipulateArray();
