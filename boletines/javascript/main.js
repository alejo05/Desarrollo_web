// console.log("Ultras CVLI");
// //DOM
// let links = document.querySelectorAll("a");
// console.log(links);
//
// let julio = document.querySelector(".autor");
//
// links.forEach(function(link){
//   console.log(link);
// });
//
// let celdas = document.querySelectorAll("td");
// celdas.forEach(function(td){
//   td.addEventListener("click", function(){
//     console.log(this)
//   })
// });

// // Obtener todos los elementos de la clase .close
// let cerrar = document.querySelectorAll(".close");
// // Recorrerlos
// cerrar.forEach(function(close){
//   // Agregar un evento click a cada uno de ellos
//   close.addEventListener("click", function(){
//     console.log("todo bien perrito")
//   });
// });

let cerrar = document.querySelectorAll(".close");
// Recorrerlos
cerrar.forEach(function(close){
  // Agregar un evento click a cada uno de ellos
  close.addEventListener("click", function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");

    // Quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInUpBig");
    content.classList.remove("animated");

    // Agregar clases para animar su salida
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
      location.href = "/";
    }, 600);
    // setInterval

    return false;
  });
});
