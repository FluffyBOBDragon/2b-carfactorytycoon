// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var research = 1;

function generate() {
	money += 100 * research;
	e(money);
}

function research_car() {
	research = research * 1.1
	e(money);
	money - 1000;
	e(money);
}

// update the value stored in javascript onto the page.
function e(val) {
	document.getElementById("d").value = val;
	var money = val.toFixed(2)
	e(money);
	setCookie()
}
 
 
window.onload = setInterval(generate, 5000);

// COOKIE	

function setCookie() {
    var exdays = 365;
	var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "money=" + money + ";" + expires;
    document.cookie = "=research" + research + ";" + expires;
}

function loadCookies() {
    var string = document.cookie;
	// split("; ");
	// split("=");
	// key_value_pair[0];
	alert(string);
}