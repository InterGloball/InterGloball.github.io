$(document).ready(function(){

	$('.content__burger, .content__burger__X').click(function(event){
		$('.content__burger, .memu__row, .menu__list, .header__search, .content__burger__X').toggleClass('active');
		$('body, .content__row, .content__modal').toggleClass('lock');
	});


	//  Ну это временное решение.... 
	// elem

	$('.block__modal__elm, .content__modal__x').click(function(event) {
		$('.block__modal__elm, .content__modal, .content__modal__x, .contant__modal__wrapper').toggleClass('active');	
	});

	// voc

	$('.block__modal__voc, .content__modal__x__voc').click(function(event) {
		$('.block__modal__voc, .content__modal__voc, .content__modal__x__voc, .contant__modal__wrapper').toggleClass('active');	
	});

	// read
	
	$('.block__modal__read, .content__modal__x__read').click(function(event) {
		$('.block__modal__read, .content__modal__read, .content__modal__x__read, .contant__modal__wrapper').toggleClass('active');	
	});

	// Lis

	$('.block__modal__lis, .content__modal__x__lis').click(function(event) {
		$('.block__modal__lis, .content__modal__lis, .content__modal__x__lis, .contant__modal__wrapper').toggleClass('active');	
	});

	// Test

	$('.block__modal__test, .content__modal__x__test').click(function(event) {
		$('.block__modal__test, .content__modal__test, .content__modal__x__test, .contant__modal__wrapper').toggleClass('active');	
	});

	// Test Key

	$('.block__modal__key, .content__modal__x__key').click(function(event) {
		$('.block__modal__key, .content__modal__key, .content__modal__x__key, .contant__modal__wrapper').toggleClass('active');	
	});



});