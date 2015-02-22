$(function() {

	var beatID = 2;
	beatAmount = 1;
	var lastKey = ""
	var beat = new Object();
	var beats = [];
	var intervalIDs = [];

	$('#addBeat').click(function() {
		$('.beats').append("<div class=\"beat\"><label for=\"bpm-" + beatID + "\">Beat " + beatID + ": </label><input id=\"bpm-" + beatID + "\" type=\"number\" /><input id=\"sound-" + beatID + "\" /></div>");
		beatID = beatID + 1;
		beatAmount = beatAmount + 1;
	})
	
	// all the donald sounds
	var ds1 = new Howl({
		urls: ['../donaldsounds/ds1.mp3']
	});

	var ds2 = new Howl({
		urls: ['../donaldsounds/ds2.mp3']
	});

	var ds3 = new Howl({
		urls: ['../donaldsounds/ds3.mp3']
	});

	var ds4 = new Howl({
		urls: ['../donaldsounds/ds4.mp3']
	});

	var ds5 = new Howl({
		urls: ['../donaldsounds/ds5.mp3']
	});

	var ds6 = new Howl({
		urls: ['../donaldsounds/ds6.mp3']
	});

	var ds7 = new Howl({
		urls: ['../donaldsounds/ds7.mp3']
	});

	var ds8 = new Howl({
		urls: ['../donaldsounds/ds8.mp3']
	});

	var ds9 = new Howl({
		urls: ['../donaldsounds/ds9.mp3']
	});

	var ds10 = new Howl({
		urls: ['../donaldsounds/ds10.mp3']
	});

	var ds11 = new Howl({
		urls: ['../donaldsounds/ds11.mp3']
	});

	var ds12 = new Howl({
		urls: ['../donaldsounds/ds12.mp3']
	});

	var ds13 = new Howl({
		urls: ['../donaldsounds/ds13.mp3']
	});

	var ds14 = new Howl({
		urls: ['../donaldsounds/ds14.mp3']
	});


	$(document).keypress(function(event) {
		keycode = (event.keyCode ? event.keyCode : event.which);

		lastKey = String.fromCharCode(keycode);
		console.log(keycode);


		switch(keycode) {
			case 113:
				ds1.play();
				beatSound = 113;
				break;
			case 119:
				ds2.play();
				beatSound = 119;
				break;
			case 101:
				ds3.play();
				beatSound = 101;
				break;
			case 114:
				ds4.play();
				beatSound = 114;
				break;
			case 116:
				ds5.play();
				beatSound = 116;
				break;
			case 121:
				ds6.play();
				beatSound = 121;
				break;
			case 117:
				ds7.play();
				beatSound = 117;
				break;
			case 105:
				ds8.play();
				beatSound = 105;
				break;
			case 111:
				ds9.play();
				beatSound = 111;
				break;
			case 112:
				ds10.play();
				beatSound = 112;
				break;
			case 97:
				ds11.play();
				beatSound = 97;
				break;
			case 115:
				ds12.play();
				beatSound = 115;
				break;
			case 100:
				ds13.play();
				beatSound = 100;
				break;
			case 102:
				ds14.play();
				beatSound = 102;
				break;
		}
	});

	function startBeat(amount, sound) {
		console.log("bpm:" + amount);
		console.log("sound value:" + sound);
		switch(sound) {
			case "q":
				intervalIDs.push(window.setInterval(function() { ds1.play() }, amount));
				break;
			case "w":
				intervalIDs.push(window.setInterval(function() { ds2.play() }, amount));
				break;
			case "e":
				intervalIDs.push(window.setInterval(function() { ds3.play() }, amount));
				break;
			case "r":
				intervalIDs.push(window.setInterval(function() { ds4.play() }, amount));
				break;
			case "t":
				intervalIDs.push(window.setInterval(function() { ds5.play() }, amount));
				break;
			case "y":
				intervalIDs.push(window.setInterval(function() { ds6.play() }, amount));
				break;
			case "u":
				intervalIDs.push(window.setInterval(function() { ds7.play() }, amount));
				break;
			case "i":
				intervalIDs.push(window.setInterval(function() { ds8.play() }, amount));
				break;
			case "o":
				intervalIDs.push(window.setInterval(function() { ds9.play() }, amount));
				break;
			case "p":
				intervalIDs.push(window.setInterval(function() { ds10.play() }, amount));
				break;
			case "a":
				intervalIDs.push(window.setInterval(function() { ds11.play() }, amount));
				break;
			case "s":
				intervalIDs.push(window.setInterval(function() { ds12.play() }, amount));
				break;
			case "d":
				intervalIDs.push(window.setInterval(function() { ds13.play() }, amount));
				break;
			case "f":
				intervalIDs.push(window.setInterval(function() { ds14.play() }, amount));
				break;
		}
	}

	//start all beat, awww yeah
	$("#beatStart").click(function() {
		if($("#beatStart").text() == "Start Beat") {
			$("#beatStart").html('Stop Beat');

			for(var i = 1; i <= beatAmount; i++) {
				if($("#bpm-" + i).val() != "") {
					var bpm = 60000 / $("#bpm-" + i).val(); // convert and store BPM value
					var soundKey = $("#sound-" + i).val();
					beats.push({ "ID" : i, "bpm" : bpm });
					
					startBeat(bpm, soundKey);
				}
			}

		} else {
			beats = [];
			$("#beatStart").html('Start Beat');

			for(var i = 1; i <= beatAmount; i++) {
				window.clearInterval(intervalIDs[i]);
			}
		}
	});

	//minimizes beatmaker box
	$("#closeBeatmaker").click(function() {
		$(".instructions").toggleClass("closed");
	});
});

	// ridiculous javascript for the scrolling tab text
	title = "Mary Nastasi is #1 Girlfriend";
	var rev = "fwd";
	function titlebar(val)
	{
		var msg  = "Mary Nastasi is #1 Girlfriend";
		var res = " ";
		var speed = 100;
		var pos = val;

		var le = msg.length;
		if(rev == "fwd"){
			if(pos < le){
			pos = pos+1;
			scroll = msg.substr(0,pos);
			document.title = scroll;
			timer = window.setTimeout("titlebar("+pos+")",speed);
			}
			else{
			rev = "bwd";
			timer = window.setTimeout("titlebar("+pos+")",speed);
			}
		}
		else{
			if(pos > 0){
			pos = pos-1;
			var ale = le-pos;
			scrol = msg.substr(ale,le);
			document.title = scrol;
			timer = window.setTimeout("titlebar("+pos+")",speed);
			}
			else{
			rev = "fwd";
			timer = window.setTimeout("titlebar("+pos+")",speed);
			}	
		}
	}

	titlebar(0);
