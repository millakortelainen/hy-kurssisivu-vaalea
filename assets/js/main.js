const hideSideNav = () => {
  document.getElementById("side-nav").className = "side-nav-hidden";
}

function showSideNav() {
  document.getElementById("side-nav").className = "side-nav";
}

function reportWindowSize() {
  if (window.innerWidth < 500) {
    hideSideNav();
  } else {
    showSideNav();
  }
}

window.onresize = reportWindowSize;

window.onload = () => {
  reportWindowSize();
  highlightNav();
};

function generateTOC() {
  tof = document.getElementById("tof")
  tof.parentNode.insertBefore(document.getElementsByTagName("h1")[0], tof)
  tof.style.removeProperty("display")
  highlightNav();
  reportWindowSize()
}

function extractPageName(hrefString) {
  var arr = hrefString.split('/');
  return (arr.length < 2) ? hrefString : arr[arr.length - 2].toLowerCase() + arr[arr.length - 1].toLowerCase();
}

function setActiveMenu(menuObjects, crtPage) {
  for (var i = 0; i < menuObjects.length; i++) {
    if (extractPageName(menuObjects[i].href) == crtPage) {
      if (menuObjects[i].parentNode.tagName != "DIV") {
        //menuObjects[i].className = "current";
        menuObjects[i].parentNode.classList.add("current")
      }
    }
  }
}

function highlightNav() {
  address = document.location.href
  setActiveMenu(document.getElementById("side-nav").getElementsByTagName("a"), extractPageName(address));
}

window.onscroll = () => {
  subtitles = document.getElementsByTagName("h2")
  nav = document.getElementById("side-nav").getElementsByTagName("li")
  for (a in subtitles) {
    if (a != 0) {
      if (subtitles[a].offsetTop <= window.scrollY+window.screenTop) {

        for (b in nav) {
          if (nav[b].innerText === subtitles[a].innerText) {
            nav[b].classList.add("current")
          }
        }
      }
    }

  }
  currentNav = document.getElementById("side-nav").getElementsByClassName("current")
  if (currentNav === undefined) {
    return
  }
  for (a in subtitles) {

    if (a != 0) {
      if (subtitles[a].offsetTop > window.scrollY+window.screenTop) {
        for (c in currentNav) {
          if (currentNav[c].innerText === subtitles[a].innerText) {
            currentNav[c].classList.remove("current")
            break;
          }
        }
      }
    }
  }
}