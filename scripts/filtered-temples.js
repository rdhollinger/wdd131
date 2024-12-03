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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Billings Montana",
		location: "Billings, Montana, United States",
		dedicated: "1999, November, 20",
		area: 33800,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-8805-main.jpg",
	},
	{
		templeName: "Portland Oregon",
		location: "Portland, Oregon, United States",
		dedicated: "1989, August, 19",
		area: 80500,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-1629-main.jpg",
	},
	{
		templeName: "Calgary Alberta",
		location: "Calgary, Alberta, Canada",
		dedicated: "2012, October, 28",
		area: 33000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13199-main.jpg",
	}
];

function createTempleCard(templesArray=temples){
	const tempImg = document.getElementById('tem-Img');
	tempImg.innerHTML= "";
	templesArray.forEach(temple => {
		const templeCard = `<section class='card'>
		<h3>${temple.templeName}</h3>
		<p><span>Location:</span> ${temple.location}</p>
		<p><span>Dedicated:</span> ${temple.dedicated}</p>
		<p><span>Area:</span> ${temple.area}</p>
		<img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading = "lazy">
		</section>`
		tempImg.innerHTML += templeCard;
	});
}

const homeLink = document.querySelector('#home');
const oldlink = document.querySelector('#old');
const newlink = document.querySelector('#new');
const largelink = document.querySelector('#large');
const smalllink = document.querySelector('#small');

homeLink.addEventListener('click', () => {
	const title = document.querySelector('.title');
	title.innerHTML = 'Home'
	createTempleCard(temples);
})
oldlink.addEventListener('click', () =>{
	const title = document.querySelector('.title');
	const oldTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(',')[0].trim());
		return year < 1990;
	});
	title.innerHTML = 'Old';
	createTempleCard(oldTemples);
})
newlink.addEventListener('click', () => {
	const title = document.querySelector('.title');
	const newTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(',')[0].trim())
		return year > 2000;
	});
	title.innerHTML = 'New';
	createTempleCard(newTemples);

} )
largelink.addEventListener('click', () =>{
	const title = document.querySelector('.title');
	const largeTemples = temples.filter(temple =>{
		const area = temple.area;
		return area > 90000;
	})
	title.innerHTML = "Large";
	createTempleCard(largeTemples);
})
smalllink.addEventListener('click', () =>{
	const title = document.querySelector('.title');
	const smallTemples = temples.filter(temple =>{
		const area = temple.area;
		return area < 10000;
	})
	title.innerHTML = 'Small';
	createTempleCard(smallTemples);
})

createTempleCard(temples)