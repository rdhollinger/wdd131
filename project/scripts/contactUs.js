const contactUsInfo = [];
const form = document.getElementById('contactUs')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fName = document.querySelector("input[name='fname']")
    const lName = document.querySelector("input[name='lname']")
    const email = document.querySelector("input[name='email']")
    const ageOfChild = document.querySelector("input[name='age']")
    const comments = document.querySelector("input[name='questions']")
    
    const value1 = fName.value;
    const value2 = lName.value;
    const value3 = email.value;
    const value4 = ageOfChild.value;
    const value5 = comments.value;
    
    contactUsInfo.push(value1, value2, value3, value4, value5);

    fName.value = "";
    lName.value = "";
    email.value = "";
    ageOfChild = "";
    comments = "";

    let submitCount = parseInt(localStorage.getItem('submitCount') || '0', 10);
    localStorage.setItem('submitCount', submitCount);
    document.querySelector('form').onsubmit = function(event){
        event.preventDefault();
        submitCount++;
        localStorage.setItem('submitCount', submitCount);
        alert(`contact Submitted!`);
        window.location.href = "contact.html";
    }

})