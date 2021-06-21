const first = document.querySelector('#first')
const last = document.querySelector('#last')
const email = document.querySelector('#email')
const quantity = document.querySelector('#quantity')
const birthdate = document.querySelector('#birthdate')
const checkbox = document.querySelectorAll('.checkbox-input[type="radio"]')
const optionsCity = document.querySelector(".optionsCity")
const checkbox1 = document.querySelector("#checkbox1")
const form = document.querySelector("form")
const body = document.getElementById("body")
const formulaire = document.querySelector(".modal-bground");
const textControl = document.querySelectorAll(".text-control")

let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexMin = /^.{2,35}$/
let checkedCheckbox = false

//fonction pour message success et error
function success(element, smallError) {
    element.classList.add("success")
    element.classList.remove("error") 
    smallError.style.display="none" //supprime le msg d'erreur 
}

function error(element, messageError, smallError) {
    element.classList.add("error")
    element.classList.remove("success")
    smallError.style.display="block" //affiche le msg d'erreur 
    smallError.innerHTML= messageError
}

//Au saisie du champ je vérifie si c'est valide ou pas
    first.addEventListener("keyup", function(){
        let msgErreur = first.parentNode.childNodes[7]
        if(regexMin.test(first.value)) {
            success(first, msgErreur)
        }else {
            error(first, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", msgErreur )
        }
    })

    last.addEventListener("keyup", function(){
        let msgErreur = last.parentNode.childNodes[7]
        if(regexMin.test(last.value)) {
            success(last, msgErreur)
        }else {
            error(last, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", msgErreur)
        }
    })

    email.addEventListener("keyup", function(){
        let msgErreur = email.parentNode.childNodes[7]
        if(regexEmail.test(email.value)) {
            success(email, msgErreur)
        }else {
            error(email, "Veuillez entrer une adresse mail valide.", msgErreur)
        }
    })

    birthdate.addEventListener("keyup", function(){
        let msgErreur = birthdate.parentNode.childNodes[7]
        if(birthdate.value !== "" ) {
            success(birthdate, msgErreur)
        }else {
            error(birthdate, "Vous devez entrer votre date de naissance.", msgErreur)

        }
    })

    quantity.addEventListener("keyup", function(){
        let msgErreur = quantity.parentNode.childNodes[6]
        if(quantity.value !== "" && isNaN(quantity.value) == false ) {
            success(quantity, msgErreur)
        }else if(quantity.value == "") {
            error(quantity, "Vous devez entrer entrée une donnée.", msgErreur)
        }else if(isNaN(quantity.value) == true){
            error(quantity, "Vous devez saisir un nombre", msgErreur)
        }
    })

    //Je retire le message d'erreur et le contour rouge quand l'une des checkbox à été checké
    //optionCity == div qui contient toutes les checkboxes
    checkbox.forEach(element => {
       element.addEventListener("change", function(){
        optionsCity.classList.remove("error")
        optionsCity.childNodes[25].style.display="none"
       })
    })
    
    //Je vérifie si les conditions d'utilisation à bien été coché ou non
    checkbox1.addEventListener("change", function(){
        let msgErreur = checkbox1.parentNode.childNodes[5]
        if(checkbox1.checked == true) {
            checkbox1.parentNode.childNodes[5].style.display="none"
        }else {
            error(checkbox1,"Vous devez vérifier que vous acceptez les termes et conditions", msgErreur)
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
            event.preventDefault()
            //création div contenant msg avec les bouton close
            let validationMessage = document.createElement('div')
            let validationMsg = document.createElement('p')
            let validationMessageClose = document.createElement('span')
            let validationMessageBtnClose = document.createElement('button')
            //attribution des class aux éléments
            validationMessage.classList.add('msg')
            validationMessageClose.classList.add('close')
            validationMessageBtnClose.classList.add('btnClose')
            
            validationMsg.textContent= "Merci d'avoir soumis vos informations d'inscription"
            validationMessageBtnClose.textContent = "Close"

            body.appendChild(validationMessage)
            validationMessage.appendChild(validationMessageClose)
            validationMessage.appendChild(validationMessageBtnClose)
            validationMessage.appendChild(validationMsg)


            //fermeture du message de confirmation
            validationMessageClose.addEventListener('click', function(){
                validationMessage.style.display = "none"
            })

            validationMessageBtnClose.addEventListener('click', function(){
                validationMessage.style.display = "none"
            })

            //suppression du formulaire
            formulaire.style.display="none"

            //reset le formulaire
            form.reset()
            textControl.forEach(element => {
                element.classList.remove("success")
            });
            //Je remet les checkbox a false
            checkedCheckbox = false

    } else {
        //si tout n'est pas rempli je mets les messages d'erreurs
        event.preventDefault()
        if(first.value == "") {
            let msgErreur = first.parentNode.childNodes[7]
            error(first, "Vous devez entrer votre prénom.", msgErreur)
        }
        if(last.value == "") {
            let msgErreur = last.parentNode.childNodes[7]
            error(last, "Vous devez entrer votre nom.", msgErreur)
        }
        if(email.value == "") {
            let msgErreur = email.parentNode.childNodes[7]
            error(email, "Vous devez entrer votre email.", msgErreur)
        }
        if(birthdate.value == "") {
            let msgErreur = birthdate.parentNode.childNodes[7]
            error(birthdate, "Vous devez entrer votre date de naissance.", msgErreur)
        }
        if(quantity.value == "") {
            let msgErreur = quantity.parentNode.childNodes[6]
            error(quantity, "Vous devez entrer entrée une donnée.", msgErreur)
        }
        if(isNaN(quantity.value) == true) {
            let msgErreur = quantity.parentNode.childNodes[6]
            error(quantity, "Vous devez saisir un nombre", msgErreur)
        }
        if(checkedCheckbox == false) {
            let msgErreur = optionsCity.childNodes[25]
            error(optionsCity,"Vous devez choisir une option.", msgErreur)
        }
        if(checkbox1.checked == false) {
            let msgErreur = checkbox1.parentNode.childNodes[5]
            error(checkbox1,"Vous devez vérifier que vous acceptez les termes et conditions", msgErreur)
        }
    }
}
