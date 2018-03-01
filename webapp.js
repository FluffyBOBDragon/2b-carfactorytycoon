// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var research = 1;
var car_research_cost = 1000;
var tool_research_cost = 1000;

var time >= 0;
var nk >= 0;
var sneak >= 0;
var logang >= 0;
var pacman >= 0;
var optimist >= 0;
var team10 >= 0;
var prius >= 0;

function disable_car_button() {
	document.getElementById("nk")
if "nk" 
	}


function generate() {
	money += 100 * research;
	update();
}

function research_car() {
	if(money >= car_research_cost) {
		research = research + 0.1;
		money -=car_research_cost;
		car_research_cost *= 1.1;
		update();
	}
}

function research_tool() {
	if(money >= tool_research_cost) {
		research = research + 0.01;
		money -=research_cost;
		tool_research_cost *= 1.01;
		update();
	}
}


// update the value stored in javascript onto the page.
function update() {
	document.getElementById("d").value = money.toFixed(2);
	setCookie();
}
 
 
window.onload = setInterval(generate, 5000);

// COOKIE	tool_

function setCookie() {
    var exdays = 365;
	var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "money=" + money + ";" + expires;
    document.cookie = "research=" + research + ";" + expires;
	document.cookie = "car_research_cost=" + car_research_cost + ";" + expires;
	document.cookie = "tool_research_cost=" + tool_research_cost + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadCookies() {
	money = Number(getCookie("money"));
	research = Number(getCookie("research"));
	car_research_cost = Number(getCookie("car_research_cost"));
	tool_research_cost = Number(getCookie("tool_research_cost"));
	update();
}
