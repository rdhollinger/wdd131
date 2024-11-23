var date = new Date().getFullYear();
let LastModif = new Date(document.lastModified);
document.getElementById("year").innerHTML = date;
document.getElementById("lastModified").innerHTML = LastModif;

const temp = document.getElementById('temp');
const wSpeed = document.getElementById('wind');
const windChill = document.getElementById('windChill')

if(temp <= 50, wSpeed => 3){
var calculateWindChill = (35.74 + (0.6215 * temp)) - (35.75*Math.pow(wSpeed,0.16))+(0.4275*temp*Math.pow(wSpeed,0.16));
document.getElementById('windChill').innerHTML = calculateWindChill;
}else{document.getElementById('windChill').innerHTMl = 'N/A'};