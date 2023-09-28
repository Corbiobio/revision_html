let inputs = document.getElementsByTagName("input") 

let input_total_price = inputs.total
let inputs_quantity = []
let inputs_price = []
let inputs_line_total = []
let input_soumettre

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name.substring(0,2) === "pu" ) {
        inputs_price.push(inputs[i])
    } else if (inputs[i].name.substring(0,1) === "p"){
        inputs_line_total.push(inputs[i])
    }else if(inputs[i].name.substring(0,1) === "q"){
        inputs_quantity.push(inputs[i])
    }else if(inputs[i].type === "button"){
        input_soumettre = inputs[i]
    }
}

// console.log(parseFloat("0a.2"));

for (let i = 0; i < inputs_quantity.length; i++) {
    inputs_quantity[i].value = 0
    inputs_quantity[i].addEventListener("input",()=>{
        if(!parseFloat(inputs_quantity[i].value)){
            inputs_quantity[i].value = "0"
            inputs_line_total[i].value = "0"
        }else if(inputs_quantity[i].value !== ""){
            inputs_quantity[i].value = parseFloat(inputs_quantity[i].value)
            inputs_line_total[i].value =  Number( inputs_quantity[i].value) * Number( inputs_price[i].value);
            let total = 0
            for (let j = 0; j < inputs_line_total.length; j++) {
                total += Number(inputs_line_total[j].value)
            }
            input_total_price.value = total
        }
    })    
}

for (let i = 0; i < inputs_price.length; i++) {
    inputs_price[i].addEventListener("input",()=>{
        setTimeout(()=>{

            console.log(inputs_price[i].value);
            if(!parseFloat( inputs_price[i].value)){
                inputs_price[i].value = "0"
                inputs_line_total[i].value = "0"
            }else if(inputs_price[i].value !== ""){
                inputs_price[i].value = parseFloat(inputs_price[i].value)
                inputs_line_total[i].value =  Number( inputs_quantity[i].value) * Number( inputs_price[i].value);
                let total = 0
                for (let j = 0; j < inputs_line_total.length; j++) {
                    total += Number(inputs_line_total[j].value)
                }
                input_total_price.value = total
            }
        },500   )
    })
}

for (let i = 0; i < inputs_line_total.length; i++) {
    inputs_line_total[i].value = 0    
    inputs_line_total[i].addEventListener("input",()=>{
        inputs_line_total[i].value =  Number( inputs_quantity[i].value) * Number( inputs_price[i].value);
    })
}
input_total_price.value = 0
input_total_price.addEventListener("input",()=>{
    let total = 0
    for (let j = 0; j < inputs_line_total.length; j++) {
        total += Number(inputs_line_total[j].value)
    }
    input_total_price.value = total
})

input_soumettre.addEventListener("click",()=>{
   document.body.innerHTML = `le total de la comande est de ${input_total_price.value} euros` 
})











// let form = document.forms[0]

// form.addEventListener("submit",()=>{

//     for (let i = 0; i < form.length; i++) {
//         if (form[i].type === "radio" || form[i].type === "checkbox") {
//             if (form[i].checked) {
//                 console.log(form[i].value);
//             }else{
//                 continue
//             }
//         }else if (form[i].type === "select-multiple"){
//             const select = document.getElementById("select")
//             const select_child = select.children
        
//             for (let i = 0; i < select_child.length; i++) {
//                 if(select_child[i].selected){
//                     console.log(select_child[i].value);
//                 }
//             }
//         }else if(form[i].type !== "submit" && form[i].value !== ""){
//             console.log(form[i].value);        
//         }
//     }    
// })



// let container = document.getElementById("container")
// let content = document.getElementById("content")

// let child = container.children

// for(let i = 0; i < child.length;i++){
//    child[i].addEventListener("click",()=>{

//     for (let j = 0; j < child.length; j++) {
//         child[j].classList.remove("purple")
//     }

//     child[i].classList.add("purple")
//     content.textContent = "contenu " + child[i].textContent[child[i].textContent.length -1]
//    })
// }



// function set_cookie(name,value,days){
//     let date = new Date()
//     date.setDate(date.getDate() + days)
// }

// const body = document.body

// let btn_start = document.getElementById("start")
// let btn_stop = document.getElementById("stop")
// let btn_delete = document.getElementById("delete")
// let btn_memo = document.getElementById("memo")
// let btn_recall = document.getElementById("recall")
// let compteur = document.getElementById("compteur")

// let seconde = 0
// let mili_seconde = 0

// let save_seconde = 0
// let save_mili_seconde = 0

// let interval 

// let is_active = false

// btn_start.addEventListener("click",()=>{
//     if (is_active === false) {
        
//         interval = setInterval(()=>{
//             mili_seconde ++
//             if (mili_seconde === 59) {
//                 mili_seconde = 0
//                 seconde++
//             }
//             compteur.textContent = seconde + ":" + mili_seconde
//         },10)
//         is_active = true
//     }
// })
// btn_stop.addEventListener("click",()=>{
//     clearInterval(interval)
//     is_active = false
// })
// btn_delete.addEventListener("click",()=>{
//     clearInterval(interval)
//     is_active = false
//     seconde = 0
//     mili_seconde = 0
//     compteur.textContent = seconde + ":" + mili_seconde
// })

// btn_memo.addEventListener("click",()=>{
//     if(is_active === false){
//         save_mili_seconde = mili_seconde
//         save_seconde = seconde
//     }
// })
// btn_recall.addEventListener("click",()=>{
//     if(is_active === false){
//         mili_seconde = save_mili_seconde 
//         seconde = save_seconde 
//         compteur.textContent = seconde + ":" + mili_seconde
//     }
// })






// function game(){

//     function random(){
//         return Math.ceil(Math.random()*6)
//     }
    
//     let lance1 = random()
//     let lance2 = random()
//     let lance3 = random()
    
//     if (lance1 + lance2 + lance3 === 7) {
//         if (lance1 === 4 || lance2 === 4 || lance3 === 4) {
//             return true
//         }
//     }
// }

// let bon = 0 

// for (let i = 0; i < 10000; i++) {
//     if (game()) {
//         bon++
//     }    
// }

// console.log(bon /100);
 
// function date_in_n(n){
//     let date = new Date
//     let date_past_n = new Date

//     date_past_n.setDate(date_past_n.getDay() + n )
    
//     console.log(`Aujourd'hui somme le ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
//     console.log(`Dans ${n} jours nous seron le ${date_past_n.getDate()}/${date_past_n.getMonth()+1}/${date_past_n.getFullYear()}`);
// }
// date_in_n(501)


// let date = "28/08/2009"
// let date_split = date.split("/")

// console.log(`
// date: ${date}
// jour: ${date_split[0]}
// mois: ${date_split[1]}
// annee: ${date_split[2]}
// `);


// let string = "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
// string = "developer.mozilla.org"

// if (string.startsWith("https://") || string.startsWith("http://") ) {

//     if (string.indexOf("/",8) !== -1) {
//         let url_cut = string.substring(0,string.indexOf("/",8))
//         console.log(url_cut.substring(url_cut.lastIndexOf("."),url_cut.length ));
//     }else{
//         console.log(string.substring(string.lastIndexOf("."),string.length));
//     }
// }else if(string.startsWith("www.")){

//     if (string.indexOf("/",4) !== -1) {
//         let url_cut = string.substring(0,string.indexOf("/",4))
//         console.log(url_cut.substring(url_cut.lastIndexOf("."),url_cut.length ));
//     }else{
//         console.log(string.substring(string.lastIndexOf("."),string.length));
//     }
// }else{
//     console.log(string.substring(string.lastIndexOf("."),string.length));
// }

// function point(num){
//     console.log(num.replace(".",","));
// }

// let result = prompt("votre num")
// point(result)

// let date = new Date()

// console.log(`Nous somme le ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);

// let string = "-54"
// let regex = /^-?[0-9]{1,3}/
// console.log(string.match(regex)[0])



// function placement(euros,interet,annee){
//     if(annee !== 0){
//         euros *= interet/100 +1
//         annee--
//         console.log(euros);
//         placement(euros,interet,annee)
//     }
// }

// placement(200000,3.5,20)

// let num1 = prompt("num 1")
// let operation = prompt("operateur")
// let num2 = prompt("num 2")

// function calculatrice(a,b,operateur){
//     switch (operateur) {
//         case "*" :
//             return `le resultat de ${a} ${operateur} ${b} est ${ a * b}` 
//         case "-" :
//             return `le resultat de ${a} ${operateur} ${b} est ${ a - b}` 
//         case "+" :
//             return `le resultat de ${a} ${operateur} ${b} est ${ a + b}` 
//         case "/" :
//             return `le resultat de ${a} ${operateur} ${b} est ${ a / b}` 
//         case "%" :
//             return `le resultat de ${a} ${operateur} ${b} est ${ a % b}` 
//         default : 
//         return `valeur incorrecte` 

//     }
// }

// console.log(calculatrice(num1,num2,operation));

// function create_chess_board(nbr_case){
//     const body = document.body
//     const container = document.createElement("div")
    
//     container.style.height = nbr_case * 100 +"px"
//     container.style.width = nbr_case * 100 +"px"
//     container.classList += "container"

//     body.appendChild(container)

//     let line_start_white = false
    
//     for (let i = 0; i < nbr_case*nbr_case; i++) {
//         const chess_case = document.createElement("div")

//         if(i % 8 === 0){
//             line_start_white = !line_start_white
//         }

//         if (line_start_white && i%2 === 1 ) {
//             chess_case.classList += " black"
//         }else if ( !line_start_white && i%2 === 0){
//             chess_case.classList += " black"
//         }

//         container.appendChild(chess_case)
//     }
// }


// create_chess_board(8)

// let course = [
//     {
//         nom : "coca",
//         prix : 1,
//         nombre : 5,
//     },{
//         nom : "nutella",
//         prix : 10,
//         nombre : 2,
//     },{
//         nom : "pain",
//         prix : 2,
//         nombre : 15,
//     }
// ]

// let total = 0

// let message = ""

// for (let i = 0; i < course.length; i++) {
//     let item = course[i]
//     total += item.prix * item.nombre    
//     message += item.nom + " : " + item.nombre + "*" + item.prix + "\n"
// }

// message += "total = " + total
// console.log(message);


// function pluriel(mot,nombre){
//     if (nombre > 1 && mot[mot.length - 1] !== "s" || mot[mot.length - 1] !== "x"|| mot[mot.length - 1] !== "z") {
//         let three_last_letter = mot.substring(mot.length -3,mot.length)
//         let two_last_letter = three_last_letter.substring(1,3)
//         if(three_last_letter === "eau"){
//             return mot + "x"
//         }else if(two_last_letter === "al"){
//             return mot.substring(0,mot.length - 2) + "aux"
//         }else if(two_last_letter === "au"){
//             return mot.substring(0,mot.length - 2) + "x"
//         }else if(two_last_letter === "eu"){
//             return mot.substring(0,mot.length - 2) + "x"
//         }else if(two_last_letter === "ou"){
//             return mot.substring(0,mot.length - 2) + "s"
//         }else{
//             return mot + "s"
//         }
//     }
// }
// let mot = "cheval"

// console.log(pluriel(mot, 2));


// let string =""
// for(let i = 0 ; i <= 20; i += 2){
//     string += i + "-"
// }
// console.log(string.substring(0,string.length-1));


// let arr1 = []
// for(let i = 0 ; i < 30;i++){
//         arr1.push(Math.ceil(Math.random()*20));
// }

// let moyenne = 0
// for (let i = 0; i < arr1.length; i++) {
//     moyenne += arr1[i]
// }

// moyenne = moyenne / arr1.length
// console.log("moyenne : "  +moyenne);

// for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i] < moyenne){
//         console.log(arr1[i]);
//     }    
// }

// let arr1 = []
// let arr_multiply = []
// let result = 0

// for(let i = 0 ; i < Math.ceil(Math.random()*10) ;i++){
//     arr1.push(Math.ceil(Math.random()*10));
// }
// for(let i = 0 ; i < Math.ceil(Math.random()*10) ;i++){
//     arr_multiply.push(Math.ceil(Math.random()*10));
// }

// for (let i = 0; i < arr_multiply.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//         result += arr_multiply[i] * arr1[j]
//     }
// }

// console.log(result);

// let arr1 = []
// let arr2 = []
// let arr_final = []

// for(let i = 0 ; i < 10;i++){
//     arr1.push(Math.ceil(Math.random()*10));
//     arr2.push(Math.ceil(Math.random()*10));
// }

// for (let i = 0; i < arr1.length; i++) {
//     arr_final.push(arr1[i] + arr2[i])    
// }

// console.log(arr1);
// console.log(arr2);
// console.log(arr_final);



// function fibonacci(n){
//     let fibo1 = 0
//     let fibo2 = 1

//     let nombre_fibo
//     for (let i = 0; i < n; i++) {
//         nombre_fibo = fibo1 + fibo2
//         fibo2 = fibo1
//         fibo1 = nombre_fibo
//         console.log(nombre_fibo);
//     }
// }
// let nombre = prompt('votre nombre')
// fibonacci(nombre)


// function factorielle(n){
//     let total = 1
    
//     for(let i = 2 ; i <= n; i++){
//         total *= i
//     }
// return total
// }

// let n = prompt("nombre de cheveau") 
// let p = prompt("tierce, quarte, quinte")

// let X = factorielle(n) / factorielle(n - p)

// let Y = factorielle(n) / factorielle(p) * factorielle(n - p)

// console.log(X);
// console.log(Y);

// let prix_total = 0
// let prix_object = [50,10,1,3,4,8,90]


// let valuie_prompt = parseInt(prompt("Prix de l'achat"))

// while(valuie_prompt !== 0){

//     prix_total += valuie_prompt
//     valuie_prompt = parseInt(prompt("Prix de l'achat"))
// }

// let euro_client = prompt(`Le total est de ${prix_total}. Veuiller donner votre monnaie.`)

// let euro_a_rendre = euro_client - prix_total

// if(euro_a_rendre >= 0){
    
//     let billet_10 = 0
//     let billet_5 = 0
    
//     while(euro_a_rendre >= 10){
//         billet_10++
//         euro_a_rendre -= 10
//     }
//     while(euro_a_rendre >= 5){
//         billet_5++
//         euro_a_rendre -= 5
//     }
    
//     let piece_1 = euro_a_rendre

//     let phrase = "👌Merci beaucoup, voici " 

//     if(billet_10 > 0){
//         phrase += billet_10 + " billet de 10💶, "
//     }
//     if(billet_5 > 0){
//         phrase += billet_5 + " billet de 5💶, "
//     }
//     if(piece_1 > 0){
//         phrase += piece_1 + " piece de 1 "
//     }
//     phrase +=  "! Passer une bonne journée 😁 ! ❤️❤️ " 
//     document.body.innerHTML = "<p>" + phrase + "</p>"
// }else{
//     alert("vous n'avez pas donné assez")
// }


// for( let i in document){
//     console.log(i);
//     console.log(document[i]);
// }

// let max = parseInt(prompt("nombre"))
// let max_index = 0

// let index = 1
// let num 

// while(num !== 0){
//     num = parseInt(prompt("nombre"))
//     index ++
//     if(num > max && num !== 0){
//         max = num
//         max_index = index
//     }
// }

// console.log(max_index);
// console.log(max);


// let num = 8
// let total = 1

// for (let i = 2; i <= num; i++) {
//     total *= i
// }
// console.log(total);

// let num = 5

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num*i);    
// }

// let value = prompt("choisir un nombre entre 10 et 20")
// console.log(value);

// let is_not_corect = true

// while(is_not_corect){
//     if(value > 20 ){
//         value = prompt("plus petit")
//     }else if(value < 10){
//         value = prompt("plus grand")
//     }else{
//         alert("win")
//         is_not_corect = true
//     }
//     console.log(value);
// }

// let annee = 2400
// let mois = 2
// let jour = 29

// let date_is_good = false

// if (annee > 0 && mois > 0 && mois <= 12 && jour > 0 && jour <= 31) {
//     if(mois%2 !== 0){
//         date_is_good = true
//     }else if(mois%2 === 0 && jour <= 30){
//         if (mois !== 2 ) {
//             date_is_good = true
//         }else{
//            if(annee % 4 === 0 && annee % 400 === 0 && jour <= 29){
//                 date_is_good = true
//             }else if(annee % 4 === 0 && annee % 100 !== 0 && jour <= 29){
//                 date_is_good = true
//             }
//         }
//     }
// }

// console.log("the date you entered is " + date_is_good);


// let mec1 = 13
// let mec2 = 51
// let mec3 = 25
// let mec4 = 22

// if(mec1 > 50){
//     console.log("est elue");
// }else if(50 < mec2 || 50 < mec3 || 50 < mec4){
//     console.log("eliminer");
// }else if(mec1 > mec2 && mec1 > mec3 && mec1 > mec4){
//     console.log("balotage favorable");
// }else if(mec1 >= 12.5){
//     console.log("defavorable");
// }else{
//     console.log("eliminer");
// }

// let nombre = 20
// let total = 0

// if(nombre >= 30){
//     total += 10*0.1
//     nombre -= 10

//     total+= 20*0.09
//     nombre -=20
//     if(nombre > 0 ){
//         total += nombre*0.08
//         nombre = 0
//     }
// }else if(nombre > 10){
//     total += 10*0.1
//     nombre -= 10

//     total += nombre*0.09
//     nombre = 0
// }else{
//     total += nombre*0.1
//     nombre = 0
// }

// console.log(total);



// let heure = 23
// let min = 59
// let seconde = 59

// seconde++

// if(seconde === 60){
//     seconde = 0
//     min++
//     if(min === 60 ){
//         min = 0
//         heure ++
//         if (heure === 24) {
//             heure = 0
//         }
//     }
// }

// console.log("heure "+ heure + " min " + min + " seconde " + seconde );

// if(!localStorage.visite){
//     localStorage.setItem("visite",0)
// }

// localStorage.visite++
// const body = document.body
// body.innerHTML = `nombre de visite ${localStorage.visite}`

// let value = prompt("choose a age")

// if (value >= 6 && value <= 7) {
//     console.log('poussin');
// }else if (value <= 9) {
//     console.log('pupille');
// }else if (value <= 11) {
//     console.log('minime');
// }else {
//     console.log('cadet');
// }


// let value1 = prompt("choose a num 1")
// let value2 = prompt("choose a num 2")


// if (value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0 ) {
//     console.log("positif");
// }else{
//     console.log("negatif");
// }