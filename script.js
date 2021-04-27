function mobilehamburger() {
  const mainTopnav = document.getElementById("myTopnav");
  let icon = document.getElementById("hamburger");

  if (mainTopnav.className === "topnav") {
    mainTopnav.className += " clicked";
    console.log ('icon clicked');
    icon.src="close.svg";
  }

   else {
    mainTopnav.className = "topnav";
    icon.src="hamburger.svg";

  }
}
