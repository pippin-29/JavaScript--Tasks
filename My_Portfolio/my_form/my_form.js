function validateForm(event) {
	event.preventDefault();
 // Input Fields
	const nameInput = document.getElementById('nameInput');
	const DOBInput = document.getElementById('DOBInput');
	const licenseInput = document.getElementById('licenseInput');
	const housenumberInput = document.getElementById('housenumberInput');
	const flavaInput = document.getElementById('flavaInput');
	const steveInput = document.getElementById('steveInput');
	const churchInput = document.getElementById('churchInput');
	const cornInput = document.getElementById('cornInput');
	const passInput = document.getElementById('passInput');
	const stringInput = document.getElementById('stringInput');
	const enterInput = document.getElementById('enterInput');
	const literalInput = document.getElementById('literalInput');
 //

 // Input Field Errors
	var fieldsIncomplete = document.getElementById('fieldsIncomplete');
	var nameValidate = document.getElementById('nameValidate');
	var DOBValidate = document.getElementById('DOBValidate');
	var licenseValidate = document.getElementById('licenseValidate');
	var housenumberValidate = document.getElementById('housenumberValidate');
	var flavaValidate = document.getElementById('flavaValidate');
	var steveValidate = document.getElementById('steveValidate');
	var churchValidate = document.getElementById('churchValidate');
	var cornValidate = document.getElementById('cornValidate');
	var passValidate = document.getElementById('passValidate');
	var stringValidate = document.getElementById('stringValidate');
	var enterValidate = document.getElementById('enterValidate');
	var literalValidate = document.getElementById('literalValidate');
	
 //

 // Reset Error Messages
 	fieldsIncomplete.textContent = '';
 	nameValidate.textContent = '';
 //

	if (	nameInput.value.trim() === '' ||
			DOBInput.value.trim() === '' ||
			licenseInput.value.trim() === '' ||
			housenumberInput.value.trim() === '' ||
			flavaInput.value.trim() === '' ||
			steveInput.value.trim() === '' ||
			churchInput.value.trim() === '' ||
			cornInput.value.trim() === '' ||
			passInput.value.trim() === '' ||
			stringInput.value.trim() === '' ||
			enterInput.value.trim() === '' ||
			literalInput.value.trim() === ''	)
	{
		fieldsIncomplete.textContent = "Fields Incomplete"
	}
	if (/\d/.test(nameInput.value)) 
		nameValidate.textContent = "Please Do Not Enter Numbers."
	if

		


}