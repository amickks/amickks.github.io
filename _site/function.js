function openNav() {
    "use strict";
    document.getElementById("nav-js").style.width = "100%";
}
    
function closeNav() {
    "use strict";
    document.getElementById("nav-js").style.width = "0";
}

function activateImg(imgs) {
  // Get the expanded image
  var activatedImg = document.getElementById("activeImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  activatedImg.src = imgs.src;
} 