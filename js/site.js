$(function() {

	var beatValue = 2;
	var lastKey = ""

	$('#addBeat').click(function() {
		$('.beats').append("<div class=\"beat\"><label for=\"bpm\">Beat " + beatValue + ": </label><input id=\"bpm\" type=\"number\" /></div>");
		console.log(beatValue);
		beatValue = beatValue + 1;
		console.log(beatValue);
	})
	

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
		console.log(event);

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

	function startBeat(beatAmount) {
		beatAmount = 60000 / beatAmount; //Convert to actual beats per minute

		switch(beatSound) {
			case 113:
				intervalID = window.setInterval(function() { ds1.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 119:
				intervalID = window.setInterval(function() { ds2.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 101:
				intervalID = window.setInterval(function() { ds3.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 114:
				intervalID = window.setInterval(function() { ds4.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 116:
				intervalID = window.setInterval(function() { ds5.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 121:
				intervalID = window.setInterval(function() { ds6.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 117:
				intervalID = window.setInterval(function() { ds7.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 105:
				intervalID = window.setInterval(function() { ds8.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 111:
				intervalID = window.setInterval(function() { ds9.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 112:
				intervalID = window.setInterval(function() { ds10.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 97:
				intervalID = window.setInterval(function() { ds11.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 115:
				intervalID = window.setInterval(function() { ds12.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 100:
				intervalID = window.setInterval(function() { ds13.play() }, beatAmount);
				console.log(intervalID);
				break;
			case 102:
				intervalID = window.setInterval(function() { ds14.play() }, beatAmount);
				console.log(intervalID);
				break;
		}
	}

	$("#beatStart").click(function() {
		console.log($("#beatStart").text());
		if($("#beatStart").text() == "Start Beat") {
			$("#beatStart").html('Stop Beat');
			var bpm = $("#bpm").val();

			startBeat(bpm);
		} else {
			$("#beatStart").html('Start Beat');

			window.clearInterval(intervalID);
		}
	});

	$("#closeBeatmaker").click(function() {
		$(".instructions").toggleClass("closed");
	});
});


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
