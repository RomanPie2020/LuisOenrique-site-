// Adaptive menu
let a = document.querySelector('.burger');
let b = document.querySelector('.mobile_menu');
let c = document.querySelectorAll('.mobile_menu_link')[0];
let d = document.querySelectorAll('.mobile_menu_link')[1];
let e = document.querySelectorAll('.mobile_menu_link')[2];
let f = document.querySelectorAll('.mobile_menu_link')[3];
let g = document.querySelectorAll('.mobile_menu_link')[4];
$(document).ready(function () {
    a.click(function (event) {
        b.toggleClass('active');
        
        
    });
    
});
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
