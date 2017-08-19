const player = document.getElementsByTagName('iframe')[0],
	  play = document.getElementsByClassName('play')[0];
play.addEventListener('click', function() {
	play.style.display = 'none';
	document.getElementsByClassName('video')[0].style.display = 'none';
	player.src += '&autoplay=1';
});

document.querySelector('header form').addEventListener('submit', function() {
	window.localStorage.setItem('formSend', true);
});
if(window.localStorage.getItem('formSend')) {
	document.getElementsByClassName('modal')[0].style.display = 'block';
	document.body.style.overflow = 'hidden';
	window.localStorage.removeItem('formSend');
}

let closeButtons = document.querySelectorAll('.modal svg'), // MODAL CLOSE
	closeButtonsLength = closeButtons.length;
for(let i = 0; i < closeButtonsLength; i++) {
	closeButtons[i].addEventListener('click', function() {
	this.parentElement.style.display = 'none';
	document.body.style.overflow = '';
});
}

let tariffConnect = document.querySelectorAll('.part7 .connect'), // TARIFF CONNECT
	tariffConnectLength = tariffConnect.length;
for(let i = 0; i < tariffConnectLength; i++) {
	tariffConnect[i].addEventListener('click', function() {
		this.nextElementSibling.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
}