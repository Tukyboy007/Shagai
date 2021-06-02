 document.querySelector(".selectedBorder1").addEventListener("click", function() {
     document.querySelector(".selectedBorder1").classList.add("selectedBordered");
     document.querySelector(".selectedBorder2").classList.remove("selectedBordered");
 });
 document.querySelector(".selectedBorder2").addEventListener("click", function() {
     document.querySelector(".selectedBorder2").classList.add("selectedBordered");
     document.querySelector(".selectedBorder1").classList.remove("selectedBordered");
 });
 document.querySelector(".selectedBorder1-1").addEventListener("click", function() {
     document.querySelector(".selectedBorder1-1").classList.add("selectedBordered");
     document.querySelector(".selectedBorder2-2").classList.remove("selectedBordered");
 });
 document.querySelector(".selectedBorder2-2").addEventListener("click", function() {
     document.querySelector(".selectedBorder2-2").classList.add("selectedBordered");
     document.querySelector(".selectedBorder1-1").classList.remove("selectedBordered");
 });
 var cho1, cho2, name1, name11;


 function choose() {
     const zurag = document.querySelectorAll("img");
     zurag.forEach(image => {
         image.addEventListener("click", function() {
             cho1 = image.name;
         });
     });
 }

 const playerImages1 = document.querySelectorAll(".image1");
 playerImages1.forEach(playerImage1 => {
     playerImage1.addEventListener("click", function() {
         cho1 = playerImage1.name;
     })
 })
 const playerImages2 = document.querySelectorAll(".image2");
 playerImages2.forEach(playerImage2 => {
     playerImage2.addEventListener("click", function() {
         cho2 = playerImage2.name;
     })
 })

 function choose1() {
     const playerName11 = document.getElementById("plName1-1").value;
     if (cho2 !== undefined) {
         if (playerName11.length !== 0) {
             name11 = playerName11;
             localStorage.setItem("playerIcon1", cho1);
             localStorage.setItem("playerIcon2", cho2);
             localStorage.setItem("player1Name", name1);
             localStorage.setItem("player2Name", name11);

             location.replace("game.html")
         } else {
             alert("Тоглогч та нэрээ оруулна уу")
         }
     } else {
         alert("Тоглогч та дүрээ сонгоно уу");
     }
 }

 function choose() {
     const playerName1 = document.getElementById("plName1").value;
     console.log(playerName1);
     if (cho1 !== undefined) {
         if (playerName1.length !== 0) {
             name1 = playerName1;
             document.getElementById("delete").style.visibility = "hidden";
         } else {
             alert("Тоглогч та нэрээ оруулна уу");
         }
     } else {
         alert("Тоглогч та дүрээ сонгоно уу");
     }
 }