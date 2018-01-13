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