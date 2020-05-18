function hideSideNav() {
  document.getElementById("side-nav").className = "side-nav-hidden";
}

function showSideNav() {
  document.getElementById("side-nav").className = "side-nav";
}

function reportWindowSize() {
  console.log("hello")
   if(window.innerWidth<500){
     hideSideNav()
   } else {
   showSideNav()
  }
}

window.onresize = reportWindowSize;
window.onload = reportWindowSize;