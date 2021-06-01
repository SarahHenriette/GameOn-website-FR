const first = document.querySelector('#first')
const last = document.querySelector('#last')
const email = document.querySelector('#email')
const quantity = document.querySelector('#quantity')
const birthdate = document.querySelector('#birthdate')
const checkbox = document.querySelectorAll('.checkbox-input[type="radio"]')
const optionsCity = document.querySelector(".optionsCity")
// const textControl = document.querySelectorAll('.text-control')

const checkbox1 = document.querySelector("#checkbox1")
const form = document.querySelector("form")
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexMin = /^.{2,35}$/
let checkedCheckbox = false

//fonction pour message success et error
function success(element, smallError) {
    element.classList.add("success")
    element.classList.remove("error")
    smallError.style.display="none"
}

function error(element, messageError, smallError) {
    element.classList.add("error")
    element.classList.remove("success")
    smallError.style.display="block"
    smallError.innerHTML= messageError
}


//Au saisie du champ je vérifie si c'est valide ou pas
    first.addEventListener("keyup", function(){
        if(regexMin.test(first.value)) {
            success(first, first.parentNode.childNodes[7])
        }else {
            error(first, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", first.parentNode.childNodes[7] )
        }
    })

    last.addEventListener("keyup", function(){
        if(regexMin.test(last.value)) {
            success(last, last.parentNode.childNodes[7])
        }else {
            error(last, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", last.parentNode.childNodes[7])
        }
    })

    email.addEventListener("keyup", function(){
        if(regexEmail.test(email.value)) {
            success(email, email.parentNode.childNodes[7])
        }else {
            error(email, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", email.parentNode.childNodes[7])
        }
    })

    birthdate.addEventListener("keyup", function(){
        if(birthdate.value !== "" ) {
            success(birthdate, birthdate.parentNode.childNodes[7])
        }else {
            error(birthdate, "Vous devez entrer votre date de naissance.", birthdate.parentNode.childNodes[7])

        }
    })
    quantity.addEventListener("keyup", function(){
        if(quantity.value !== "" && isNaN(quantity.value) == false ) {
            success(quantity, quantity.parentNode.childNodes[6])
        }else if(quantity.value == "") {
            error(quantity, "Vous devez entrer entrée une donnée.", quantity.parentNode.childNodes[6])
        }else if(isNaN(quantity.value) == true){
            error(quantity, "Vous devez saisir un nombre", quantity.parentNode.childNodes[6])
        }
    })

    checkbox.forEach(element => {
       element.addEventListener("change", function(){
        optionsCity.classList.remove("error")
        optionsCity.childNodes[25].style.display="none"
       })
    })
    checkbox1.addEventListener("change", function(){
        if(checkbox1.checked == true) {
            checkbox1.parentNode.childNodes[5].style.display="none"
        }else {
            error(checkbox1,"Vous devez vérifier que vous acceptez les termes et conditions", checkbox1.parentNode.childNodes[5])
        }
    })
    

function validate(event) {
    //vérifie si l'une des checkbox est checké ou pas
    checkbox.forEach(element => {
        if(element.checked){
            checkedCheckbox = true
        }
    })
    //si toutes les conditions sont remplis je valide
    if( regexMin.test(first.value) &&
        regexMin.test(last.value) &&
        regexEmail.test(email.value) &&
        birthdate.value !== "" &&
        quantity.value !== "" &&
        isNaN(quantity.value) == false &&
        checkedCheckbox == true &&
        checkbox1.checked == true
        ){
            alert('cest ok')
    } else {
        //si tout n'est pas rempli je mets les messages d'erreurs
        event.preventDefault()
        console.log('cest pas bon')
        if(first.value == "") {
            error(first, "Vous devez entrer votre prénom.", first.parentNode.childNodes[7])
        }
        if(last.value == "") {
            error(last, "Vous devez entrer votre nom.", last.parentNode.childNodes[7])
        }
        if(email.value == "") {
            error(email, "Vous devez entrer votre email.", email.parentNode.childNodes[7])
        }
        if(birthdate.value == "") {
            error(birthdate, "Vous devez entrer votre date de naissance.", birthdate.parentNode.childNodes[7])
        }
        if(quantity.value == "") {
            error(quantity, "Vous devez entrer entrée une donnée.",quantity.parentNode.childNodes[6] )
        }
        if(isNaN(quantity.value) == true) {
            error(quantity, "Vous devez saisir un nombre",quantity.parentNode.childNodes[6] )
        }
        if(checkedCheckbox == false) {
            error(optionsCity,"Vous devez choisir une option.", optionsCity.childNodes[25])
        }
        if(checkbox1.checked == false) {
            error(checkbox1,"Vous devez vérifier que vous acceptez les termes et conditions", checkbox1.parentNode.childNodes[5])
        }
    }
}
