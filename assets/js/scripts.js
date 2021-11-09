function loadMenu() {
    let navIcon = document.getElementById("topNav");
    if (navIcon.className === "navBar")
    {
        navIcon.className += " responsive";
    }
    else
    {
        navIcon.className = "navBar";
   }
   }
