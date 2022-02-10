     
function openNav() {
document.getElementById("nav-js").style.width = "100%";
}
    
function closeNav() {
document.getElementById("nav-js").style.width = "0";
}

$(function(){
    $("#navbar").load("navbar.html"); });
$(function(){
    $("#sidebar").load("sidebar.html"); });