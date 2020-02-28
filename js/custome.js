// $('.team-text-left').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.team-left'
//   });
//   $('.team-left').slick({
//     slidesToShow: 3,
//     vertical: true,
//     slidesToScroll: 1,
//     asNavFor: '.team-text-left',
//     dots: true,
//     focusOnSelect: true
//   });



  //This simple script handles the header nav menu modal
//also covered nav sub menu selection
//Dependencies: jQuery
$(document).ready(function() {

	$('.burger').click(function(){
		$('header').toggleClass('clicked');
	});

	$('nav ul li').click(function(){
		$('nav ul li').removeClass('selected');
		$('nav ul li').addClass('notselected');
		$(this).toggleClass('selected');
		$(this).removeClass('notselected');
	});
	
});