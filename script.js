var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Graphics Designer", "Copy Writer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

 var navLinks = document.getElementById("navLinks");

      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-230px";
      }