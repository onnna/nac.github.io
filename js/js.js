$('.work').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    
});
document.getElementById('send').onclick = function(){
    alert('Thanks for your time! we will get in touch shortly');
}