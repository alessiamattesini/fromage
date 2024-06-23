var counter = 0;
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
var check6 = 0;
var sgabello = false;
var secchio = false;
var ombrello = false;
var colino = false;
var bilanciere = false;
var panna = false;
var spino = false;
var input;
var blocco = false;



function start () {

    var button = document.getElementById("button");
    var text = document.getElementById("text");
    var paragraph = document.getElementById("paragraph");
    var instruction = document.getElementById("instruction");
    counter ++

    if (counter == 1) {
    //var title = document.getElementById("title");  ---- checking things
    //document.body.style.backgroundColor = "red";
    document.getElementById("title").style.display = "none";
    button.style.marginTop = "10vh";
    document.getElementById("textbutton").innerHTML = "TUTTO PRONTO";
    text.style.display = "block";
    document.getElementById("step1").style.display = "block";
 

    }

    if (counter == 2) {

        if (sgabello == true && secchio == true && ombrello == false){

            document.getElementById("step1").style.display = "none";
            document.getElementById("secchio_latte").style.display = "block";
            instruction.style.display ="none";
            document.getElementById("instruction2").style.display ="block";
            paragraph.innerHTML = "Molto bene! Prima di tornare a casa per&#242, non dimentichiamo di pulire il latte dalle impurit&#224!";
            //console.log(instruction.innerHTML);
            document.getElementById("textbutton").innerHTML = "VAI";
            document.getElementById("step2").style.display = "block";

        } else {
        counter --;
        document.getElementById("overlay").style.display = "block";
    }

   }

if (counter == 3) {

   if (colino == true) {

      document.getElementById("step2").style.display = "none";
      document.getElementById("secchio_latte").style.display = "none";
      paragraph.innerHTML = "Non resta che portarlo fino a casa. Fatti aiutare dal bilanciere";
      document.getElementById("instruction2").innerHTML = "Disegna le corde per collegare le brentine al bilanciere";
      document.getElementById("step3").style.display = "block";
      button.style.marginTop = "8vh";
      document.getElementById("textbutton").innerHTML = "FATTO";

   } else {
      
      counter --;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("finestra").innerHTML = "Sei sicuro? Controlla bene nell’Archivio Digitale";

   }

 }

 if (counter == 4) {

   if (bilanciere == true) {

      document.getElementById("step3").style.display = "none";
      document.getElementById("step4").style.display = "block";
      paragraph.innerHTML = "Abbiamo messo il latte nella conca per far affiorare la panna";
      document.getElementById("instruction2").innerHTML = "usa la SPANNAROLA per raccogliere la panna";
      document.getElementById("textbutton").innerHTML = "FATTO";

   } else {
      
      counter --;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("finestra").innerHTML = "Disegna sullo spazio per collegare le brentine";

   }

  
 }
 if (counter == 5) {

   if (panna == true) {

      document.getElementById("step4").style.display = "none";
      paragraph.innerHTML = "Cosa vuoi fare adesso?";
      document.getElementById("instruction2").style.display = "none";
      document.getElementById("scelta").style.display = "block";
      button.style.display = "none";   
   } else {
      
      counter --;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("finestra").innerHTML = "Tocca la SPANNAROLA";

   }

}
   
}

function select1() {

    check1++
    
     if(check1 % 2 == 1){

        document.getElementById("check1").style.opacity = "1";
        sgabello = true;

     } else if (check1 % 2 == 0){

        document.getElementById("check1").style.opacity = "0.5";
        sgabello = false;

     }
  

}

function select2() {

    check2++
    
     if(check2 % 2 == 1){

        document.getElementById("check2").style.opacity = "1";
        ombrello = true;

     } else if (check2 % 2 == 0){

        document.getElementById("check2").style.opacity = "0.5";
        ombrello = false;

     }
  

}

function select3() {

    check3++
    
     if(check3 % 2 == 1){

        document.getElementById("check3").style.opacity = "1";
        secchio = true;

     } else if (check3 % 2 == 0){

        document.getElementById("check3").style.opacity = "0.5";
        secchio = false;

     }
  

}

function select4() {

   check4++
   
    if(check4 % 2 == 1){

       document.getElementById("check4").style.opacity = "1";
       blocco = true;

    } else if (check4 % 2 == 0){

       document.getElementById("check4").style.opacity = "0.5";
       blocco = false;

    }
 

}

function select5() {

   check5++
   
    if(check5 % 2 == 1){

       document.getElementById("check5").style.opacity = "1";
       blocco = true;

    } else if (check5 % 2 == 0){

       document.getElementById("check5").style.opacity = "0.5";
       blocco = false;

    }
 

}

function select6() {

   check6++
   
    if(check6 % 2 == 1){

       document.getElementById("check6").style.opacity = "1";
       spino = true;

    } else if (check6 % 2 == 0){

       document.getElementById("check6").style.opacity = "0.5";
       spino = false;

    }
 

}

document.addEventListener("DOMContentLoaded", function () {
   let carousel = document.querySelector(".carousel");
   let items = carousel.querySelectorAll(".item");
 
 
   // Function to show a specific item
   function showItem(index) {
     items.forEach((item, idx) => {
       item.classList.remove("active");
       if (idx === index) {
         item.classList.add("active");
       }
     });
   }
 
   // Event listeners for buttons
   document.querySelector(".prev").addEventListener("click", () => {
     let index = [...items].findIndex((item) =>
       item.classList.contains("active")
     );
     console.log(index);
     showItem((index - 1 + items.length) % items.length);
     if ((index - 1 + items.length) % items.length == 1){
      colino = true;
     } else {
      colino = false;
     }
   });
 
   document.querySelector(".next").addEventListener("click", () => {
     let index = [...items].findIndex((item) =>
       item.classList.contains("active")
     );
     showItem((index + 1) % items.length);
     if ((index + 1) % items.length == 1){
      colino = true;
     } else {
      colino = false;
     }
   });
 
  
 });
 

function hide() {

    document.getElementById("overlay").style.display = "none";

}


function step3f (){

   bilanciere = true;
   console.log("ci sono");

}


function muovi(){

   document.getElementById("panna").classList.add("panna-active");
   panna = true;

 }

 function burro () {

   document.getElementById("sceltaburro").style.display = "block";
   document.getElementById("scelta").style.display = "none";
   paragraph.innerHTML = "Adesso dobbiamo sbattere la panna fino ad ottenere il burro. Come si chiama l'oggetto che andremo ad utilizzare?"
   document.getElementById("instruction2").style.display = "block";
   document.getElementById("instruction2").innerHTML = "Scrivi il nome dell'oggetto e premi il pulsante";
 }

 function getValue() { 
   
   let inputField = document.getElementById("input"); 
 
   // Get the value of the input field 
    value = inputField.value; 
      if (value == "zangola" || value == "Zangola" || value == "ZANGOLA"){

         document.getElementById("sceltaburro").style.display = "none";
         paragraph.innerHTML = "Ben fatto! Spremiamo il burro con la GRAMOLA e non rimane che scegliere lo STAMPO che più ti piace!"
         document.getElementById("instruction2").innerHTML = "Scegli lo stampo che preferisci";  
         document.getElementById("stampi").style.display = "block";

      } else {

         document.getElementById("overlay").style.display = "block";
         document.getElementById("finestra").innerHTML = "Controlla di aver scritto il nome correttamente o fatti un giro nell'Archivio Digitale!";
         value = 0;

      }
} 

function fineburro () {

   console.log("fine burro");
   document.getElementById("end-title").style.display = "block";
   document.getElementById("stampi").style.display = "none";
   paragraph.style.display = "none";
   document.getElementById("instruction2").style.display = "none";  
   

}

function formaggio () {


   document.getElementById("sceltaformaggio").style.display = "block";
   document.getElementById("scelta").style.display = "none";
   paragraph.innerHTML = "Accendi il fuoco sotto la CALDERA, la SCIGOGNA ci aiuterà poi a togliere la cagliata dal fuoco al momento giusto"
   document.getElementById("instruction2").style.display = "block";
   document.getElementById("instruction2").innerHTML = "Usa l'accendino";

}

function fire (){

   document.getElementById("caldera").src = "assets/img/caldera_fuego.png";
   document.getElementById("accendino").style.visibility = "hidden";
   document.getElementById("avanti").style.display = "block";
   paragraph.innerHTML = "Dobbiamo aspettare un po'..."
   document.getElementById("instruction2").style.display = "none";

}

function avanti(){

   document.getElementById("sceltaformaggio").style.display = "none";
   document.getElementById("scelta").style.display = "none";
   document.getElementById("cagliata").style.display = "block";
   paragraph.innerHTML = "È il momento di tagliare la cagliata, quale è lo strumento che ci serve?"
   document.getElementById("instruction").innerHTML = "seleziona il FRANGICAGLIATA";
   document.getElementById("instruction2").style.display = "none";
   document.getElementById("instruction").style.display = "block";


}

function taglia(){

   if (spino == true && blocco == false){

   document.getElementById("cagliata").style.display = "none";
   document.getElementById("forma").style.display = "block";
   paragraph.innerHTML = "Adesso dobbiamo dare la forma e far sgocciolare il siero. Come si chiamano questi oggetti?"
   document.getElementById("instruction").innerHTML = "scrivi il nome di entrambi gli oggetti e premi il pulsante";

   } else {

      document.getElementById("overlay").style.display = "block";
      document.getElementById("finestra").innerHTML = "Controlla meglio nell'Archivio Digitale!";
   }
}

function getValue2() { 
   
   let inputField2 = document.getElementById("input2");
   let inputField3 = document.getElementById("input3"); 
 
   // Get the value of the input field 
    value2 = inputField2.value; 
    value3 = inputField3.value; 

      if (value2 == "fascera" || value2 == "Fascera" || value2 == "FASCERA"  ){

         if(value3 == "sgocciolatoio" || value3 == "Sgocciolatoio" || value3 == "SGOCCIOLATOIO"){

            
            document.getElementById("forma").style.display = "none";
            paragraph.style.display = "none"
            document.getElementById("instruction").style.display = "none";
            document.getElementById("end-title").style.display = "block";
            document.getElementById("congrats").innerHTML = "COMPLIMENTI HAI CREATO IL TUO FORMAGGIO!";
            document.getElementById("lastimg").src = "assets/img/formaggio.png";
         
         } else {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("finestra").innerHTML = "Controlla di aver scritto entrambi i nomi correttamente o fatti un giro nell'Archivio Digitale!";
            value2 = 0;
            value3 = 0;
         } 

      } else {

         document.getElementById("overlay").style.display = "block";
         document.getElementById("finestra").innerHTML = "Controlla di aver scritto il nome correttamente o fatti un giro nell'Archivio Digitale!";
         value2 = 0;
         value3 = 0;

      }
} 

