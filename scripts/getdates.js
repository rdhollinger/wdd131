var date = new Date().getFullYear();
let LastModif = new Date(document.lastModified);
document.getElementById("year").innerHTML = date;
document.getElementById("lastModified").innerHTML = LastModif;