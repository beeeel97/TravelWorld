// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }


const botonCerrar = document.querySelector(".closebtn");

const menu =  document.querySelector(".sidenav");

function CloseNav(){

  menu.classList.add("hidden");
}


botonCerrar.addEventListener("click", CloseNav);

