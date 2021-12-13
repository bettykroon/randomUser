fetch("https://randomuser.me/api/")

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results[0]);
    profilePicture(data);
    printName(data);
    printPhoneNumber(data);
    printEmail(data);
    printDOB(data);
    printLocation(data);
    reloadPage();
})

function profilePicture(img){
    let image = document.getElementById("img");
    image.innerHTML = `<img src= "${img.results[0].picture.large}" />`;
}

function printName(name){
    let fullName = document.getElementById("name");
    fullName.innerHTML = `${name.results[0].name.title} ${name.results[0].name.first} ${name.results[0].name.last}`;
}

function printPhoneNumber(phnNr){
    let phone = document.getElementById("phone");
    phone.innerHTML = `<strong>Telefon: </strong>${phnNr.results[0].phone}`;
}

function printEmail(mail){
    let email = document.getElementById("email");
    email.innerHTML = `<strong>Email: </strong>${mail.results[0].email}`;
}

function printDOB(birth){
    let birthday = document.getElementById("birthday");
    birthday.innerHTML = `<strong>Födelsedatum: </strong>${birth.results[0].dob.date}`;
}

function printLocation(address){
    let location = document.getElementById("location");
    location.innerHTML = `<strong>Adress: </strong>${address.results[0].location.street.name} ${address.results[0].location.street.number}, </br> ${address.results[0].location.country}, ${address.results[0].location.city}, ${address.results[0].location.postcode}`;
}

function reloadPage(){
    let reloadBtn = document.getElementById("reload");
    reloadBtn.addEventListener("click", function(){
        location.reload();
    })
}