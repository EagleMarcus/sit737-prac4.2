document.addEventListener('DOMContentLoaded', function () {

    // Get the form elements and result display
    const addButton = document.getElementById('addButton');
    const subButton = document.getElementById('subButton');
    const mulButton = document.getElementById('mulButton');
    const divButton = document.getElementById('divButton');
    const expButton = document.getElementById('expButton');
    const sqrtButton = document.getElementById('sqrtButton');
    const modButton = document.getElementById('modButton');
    const resultDisplay = document.getElementById('result');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');

    // Handle Add button click
    addButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        
        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Send request to the server to perform addition
        fetch(`/add?n1=${n1}&n2=${n2}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });

    // Handle Subtract button click
    subButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Send request to the server to perform subtraction
        fetch(`/sub?n1=${n1}&n2=${n2}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });

    // Handle Multiply button click
    mulButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Send request to the server to perform multiplication
        fetch(`/mul?n1=${n1}&n2=${n2}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });

    // Handle Divide button click
    divButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Send request to the server to perform division
        fetch(`/div?n1=${n1}&n2=${n2}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });

    // Handle Exponentiation button click
    expButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Send request to the server to perform exponentiation
        fetch(`/exp?n1=${n1}&n2=${n2}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });

   // Handle Square Root button click
    sqrtButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const n1 = parseFloat(num1Input.value);

        if (isNaN(n1)) {
            resultDisplay.innerHTML = 'Please enter a valid number.';
            return;
        }

        if (n1 < 0) {
            resultDisplay.innerHTML = 'Cannot take the square root of a negative number.';
            return;
        }

        // Send request to the server to perform square root
        fetch(`/sqrt?n1=${n1}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });
    
    // Handle Modulo button click
    modButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const n1 = parseFloat(num1Input.value);
        const n2 = parseFloat(num2Input.value);

        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Send request to the server to perform modulo operation
        fetch(`/mod?n1=${n1}&n2=${n2}`)
            .then(response => response.json())
            .then(data => {
                resultDisplay.innerHTML = `Result: ${data.result}`;  // Show the result
            })
            .catch(error => {
                resultDisplay.innerHTML = 'Error occurred while calculating.';
                console.error('Error:', error);
            });
    });



});
