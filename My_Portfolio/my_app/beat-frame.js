
// Get the select element
var instrumentSelected0 = document.getElementById("instrumentSelect0");
var instrumentSelected1 = document.getElementById("instrumentSelect1");
var instrumentSelected2 = document.getElementById("instrumentSelect2");
var instrumentSelected3 = document.getElementById("instrumentSelect3");
var instrumentSelected4 = document.getElementById("instrumentSelect4");


 // Add an event listener for the change event
instrumentSelected0.addEventListener("change", function() {
	var selectedValue = instrumentSelected0.value;

	console.log("Selected value: " + selectedValue);

	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
});

instrumentSelected1.addEventListener("change", function() {
	var selectedValue = instrumentSelected1.value;

	console.log("Selected value: " + selectedValue);

	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
});

instrumentSelected2.addEventListener("change", function() {
	var selectedValue = instrumentSelected2.value;

	console.log("Selected value: " + selectedValue);

	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
});

instrumentSelected3.addEventListener("change", function() {
	var selectedValue = instrumentSelected3.value;

	console.log("Selected value: " + selectedValue);

	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
});

instrumentSelected4.addEventListener("change", function() {
	var selectedValue = instrumentSelected4.value;

	console.log("Selected value: " + selectedValue);

	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
});

function play()
{
 var tempo = parseInt(document.getElementById('tempoSelect').value, 10);
 var beat_duration = 60 / tempo * 1000; // Convert seconds to milliseconds
 play_sequence(0, tempo);
 play_sequence(1, tempo);
 play_sequence(2, tempo);
 play_sequence(3, tempo);
 play_sequence(4, tempo);

}

function play_sequence(x, tempo)
{
	if (x == 0)
	{
		var checkbox = document.getElementById("c00");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("c01");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("c02");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("c03");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("c04");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("myCheckbox");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("myCheckbox");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		var checkbox = document.getElementById("myCheckbox");
		setTimeout(function() { console.log(x + "ms rest"); }, x);
	}
	else if (x == 1)
	{
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
	}
	else if (x == 2)
	{
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
	}
	else if (x == 3)
	{
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
	}
	else if (x == 4)
	{
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
		setTimeout(function() { console.log(x + "ms rest"); }, x);
	}
}

function stop()
{
	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
}