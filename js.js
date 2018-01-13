$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

function startTest() {
	document.location.href = "reading.html";
}

function toSpeaking() {
	document.location.href = "speaking.html";
}

function toListening() {
	document.location.href = "listening.html";
}

function toInstruction() {
	document.location.href = "instruction.html";
}