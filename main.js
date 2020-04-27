// Adaptive menu
let a = document.querySelector('.burger');
let b = document.querySelector('.mobile_menu');
let c = document.querySelectorAll('.mobile_menu_link')[0];
let d = document.querySelectorAll('.mobile_menu_link')[1];
let e = document.querySelectorAll('.mobile_menu_link')[2];
let f = document.querySelectorAll('.mobile_menu_link')[3];
let g = document.querySelectorAll('.mobile_menu_link')[4];
a.onclick = function () {
    
    if (b.style.display == "flex";) {
        b.style.display = "none"
    }
    else{
         b.style.display = "flex";
    }
}
c.onclick = function () {

    b.style.display = "none";

}
d.onclick = function () {
    
    b.style.display = "none";
    
}
e.onclick = function () {

    b.style.display = "none";

}
f.onclick = function () {

    b.style.display = "none";

}
g.onclick = function () {

    b.style.display = "none";

}
// testimonials slider 
$(document).ready(function () {
    $('.single_item').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });
});
