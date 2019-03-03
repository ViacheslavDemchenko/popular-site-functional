$(document).ready(function() {
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
	
	let slideTitles = $('.slide__title'),
	    slideTexts = $('.slide__text');

		$(slideTitles).click(function () {
			$(this).toggleClass('open').next().slideToggle();
			$(slideTitles).not(this).removeClass('open').next().slideUp();
        });
});