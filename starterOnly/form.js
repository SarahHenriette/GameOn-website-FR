const first = document.querySelector('#first')
const last = document.querySelector('#last')
const email = document.querySelector('#email')
const quantity = document.querySelector('#quantity')
const birthdate = document.querySelector('#birthdate')
const checkbox = document.querySelectorAll('.checkbox-input[type="radio"]')
const checkbox1 = document.querySelector("#checkbox1")
const form = document.querySelector("form")
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexMin = /^.{2,35}$/
let regexQuantity = /^.{0,99}$/
let checkedCheckbox = false

console.log(birthdate.value)
function validate(event) {
    //vérifie si l'une des checkbox est vide
    checkbox.forEach(element => {
        if(element.checked){
            checkedCheckbox = true
        }
     })
    
     if( regexMin.test(first.value) &&
        regexMin.test(last.value) &&
        regexEmail.test(email.value) &&
        birthdate.value !== "" &&
        quantity.value !== "" &&
        isNaN(quantity.value) == false &&
        regexQuantity.test(quantity.value) &&
        checkedCheckbox == true &&
        checkbox1.checked == true
        ){
            event.preventDefault()
            console.log(birthdate.value)

          alert('cest ok')
            
    } else {
        event.preventDefault()
        console.log('cest pas bon')
        console.log(birthdate.value)
    }
}

// const submitBtn = document.querySelector('.btn-submit')

// submitBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
//     //si le prenom et le nom ont plus de deux caractères
//     //et si le l'adresse électronique est valide
//     //et si le nombre de concours est une valeur numérique 
//     //et si au moins un bouton radio est selectionné
//     //et si la case des conditions générale est cochée 
//     //alors je valide le formulaire
//     console.log("valider")
// })
// function validate () {

// }

