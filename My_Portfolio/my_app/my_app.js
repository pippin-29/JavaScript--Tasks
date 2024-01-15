// Get references to the input elements and result paragraph
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultParagraph = document.getElementById('result');

// Function to calculate the sum
function calculateSum()
{
	// get the values entered by the user
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);

	// Check if the input is valid
	if (isNaN(num1) || isNaN(num2))
	{
		resultParagraph.textContent = "Please enter valid numbers.";
	}
	else
	{
		// Calculate and display the sum
		var sum = num1 + num2;
		resultParagraph.textContent = "Result: " + sum
	}
	console.log(`test`)
}
function calculateQuotient()
{
	// get the values entered by the user
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);

	// Check if the input is valid
	if (isNaN(num1) || isNaN(num2))
	{
		resultParagraph.textContent = "Please enter valid numbers.";
	}
	else if (num2 == 0)
	{
		resultParagraph.textContent = "Cannot divide by zero...";
	}
	else
	{
		// Calculate and display the sum
		var sum = num1 / num2;
		resultParagraph.textContent = "Result: " + sum
	}
	console.log(`test`)
}
function calculateSubtract()
{
	// get the values entered by the user
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);

	// Check if the input is valid
	if (isNaN(num1) || isNaN(num2))
	{
		resultParagraph.textContent = "Please enter valid numbers.";
	}
	else
	{
		// Calculate and display the sum
		var sum = num1 - num2;
		resultParagraph.textContent = "Result: " + sum
	}
	console.log(`test`)
}
function calculateProduct()
{
	// get the values entered by the user
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);

	// Check if the input is valid
	if (isNaN(num1) || isNaN(num2))
	{
		resultParagraph.textContent = "Please enter valid numbers.";
	}
	else
	{
		// Calculate and display the sum
		var sum = num1 * num2;
		resultParagraph.textContent = "Result: " + sum
	}
	console.log(`test`)
}