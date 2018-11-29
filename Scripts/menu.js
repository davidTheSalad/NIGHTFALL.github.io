window.onload = function() {
    document.getElementById("ambientMenu").play();
	var x = document.getElementById("optionsMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
muteaudio = function() {
    document.getElementById("ambientMenu").pause();
}
unmuteaudio = function() {
    document.getElementById("ambientMenu").play();
}
function myFunction() {
/* x = document.getElementById("allthethings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }*/
var x = document.getElementById("single");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
var x = document.getElementById("multiplayer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
var x = document.getElementById("options");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
var x = document.getElementById("credits");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
	/*var x = document.getElementById("optionsMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }*/
  }