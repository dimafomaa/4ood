$(document).ready(function() {

	$('.header__burger').click(function(event){
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.slider__inner').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		slidesToScroll:3,
		draggable:false	,
		responsive:[
			{
				breakpoint: 1020,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
			}
			
		}]
	});

	$('.question__block--title').click(function(event) {
		if($('.question__block').hasClass('one')){
			$('.question__block--title').not($(this)).removeClass('active');
			$('.question__block--text').not($(this).next()).slideUp(300);

		}
		$(this).toggleClass('active').next().slideToggle(300);

	});

});
