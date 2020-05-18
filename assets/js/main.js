function hide() {
    document.getElementById("side-nav").className = "side-nav-hidden";
    document.getElementById("toggle-visibility").textContent ="Näytä valikko";
    document.getElementById("toggle-visibility").setAttribute("onClick", "show()");
  } 

  function show() {
    document.getElementById("side-nav").className = "side-nav";
    document.getElementById("toggle-visibility").textContent ="Piilota valikko";
    document.getElementById("toggle-visibility").setAttribute("onClick", "hide()");
  }