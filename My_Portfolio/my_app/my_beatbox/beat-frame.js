
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

function findTempo(tempoSelect)
{
	var tempo_count;
	var tempo_string = tempoSelect.value;

	if (tempo == "Largo")
		tempo_count = 40;
	else if (tempo == "Adagio")
		tempo_count = 66;
	else if (tempo == "Andante")
		tempo_count = 76;
	else if (tempo == "Moderato")
		tempo_count = 108;
	else if (tempo == "Allegro")
		tempo_count = 120;
	else if (tempo == "Presto")
		tempo_count = 168;
	else if (tempo == "Prestissimo")
		tempo_count = 202;


	return tempo_count;
}

function play()
{
 var tempoSelect = document.getElementById('tempoSelect');
 var tempo = findTempo(tempoSelect);
 if (typeof tempo !== 'undefined') {
	var beat_duration = 60 / tempo * 1000; // Convert seconds to milliseconds
 	
	play_sequence("instrument0", instrumentSelected0.value, beat_duration);
 	play_sequence("instrument1", instrumentSelected1.value, beat_duration);
 	play_sequence("instrument2", instrumentSelected2.value, beat_duration);
 	play_sequence("instrument3", instrumentSelected3.value, beat_duration);
 	play_sequence("instrument4", instrumentSelected4.value, beat_duration);
 }
}


function stop()
{
	document.querySelectorAll('audio').forEach(function(audio) {
		audio.pause();
		audio.currentTime = 0;
	});
}