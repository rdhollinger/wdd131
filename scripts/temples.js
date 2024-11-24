var date = new Date().getFullYear();
let LastModif = new Date(document.lastModified);
document.getElementById("year").innerHTML = date;
document.getElementById("lastModified").innerHTML = LastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});