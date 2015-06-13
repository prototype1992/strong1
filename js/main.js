$(document).ready(function(){
  
	// Реализация модального окна кнопки купить
	$('.sb-tovar-item-buy').click(function(){
		$('.sb-price-modal').css({
			'display': 'block'
		});
		$('.body-shadow').css({
			'display': 'block'
		});
	});

	$('.sb-price-modal-exit').click(function(){
		$('.sb-price-modal').css({
			'display': 'none'
		});
		$('.body-shadow').css({
			'display': 'none'
		});
	});



	// Аккардеон описания товаров
	$(".feature-accordeon dd").hide().prev().click(function() {
		$(".feature-accordeon dd").not(this).slideUp();
		$(this).next().not(":visible").slideDown();
	});

	$('.feature-accordeon dl dt').click(function(){
		if( !$(this).hasClass('active-accord') ){
			$(this).addClass('active-accord');
		}
		else{
			$(this).removeClass('active-accord');
		}
	});



	// Слайдер камер
	var slider_camera = $('#slider-camera').bxSlider({
		controls: false,
		loop: true,
		auto: true
	});



	// слайдер таба партнеров
	$('#partner-slider').bxSlider({
		pager: false,
		controls: false, 
		slideWidth: 135,
		maxSlides: 8
	});



	// слайдер таба клиентов
	$('#client-slider').bxSlider({
		pager: false,
		controls: false,
		slideWidth: 135,
		maxSlides: 8
	});



	// Слайдер портфолио
	var portfolioSlider = $('#portfolio-slider').bxSlider({
		pager: false,
        controls: false,
		slideWidth: 288,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 4,
		loop: true
	});

		// при наведении
		$('.portf-sl-item').hover(function(){
			$(this).children('.spec-item-hover').css({
				'display': 'block'
			});
		}, function(){
			$(this).children('.spec-item-hover').css({
				'display': 'none'
			});
		});

		$('#portf-prev').click(function(){
			portfolioSlider.goToPrevSlide();
		});

		$('#portf-next').click(function(){
			portfolioSlider.goToNextSlide();
		});



	//
	var specSlider = $('#specpredlozhenie-slider').lightSlider({
		item: 4,
		pager: false
	});

	$('#pred-prev').click(function(){
		specSlider.goToPrevSlide(); 
	});

	$('#pred-next').click(function(){
		specSlider.goToNextSlide(); 
	});



	// slider лицнзий
	var owl = $("#lic-slider").owlCarousel({
		items: 6,
		loop: true,
		dots: false
	});

		$('#lic-prev').click(function(){
			owl.trigger('prev.owl.carousel', [1000]);
		});
		$('#lic-next').click(function(){
			owl.trigger('next.owl.carousel', [1000]);
		});


	//
	$('#tab-container').easytabs();

	

	//
	$('.lic-img-origin').magnificPopup({
		delegate: 'a',
		type: 'image'
	});
    

    //
    $('#sidebar-menu').accordion({
		heightStyle: "content",
		collapsible: true
	});

	$('#sidebar-menu h3').click(function(){

		if(!$(this).hasClass('active-accordeon')){
			$(this).addClass('active-accordeon');
		}
		else{
			$(this).removeClass('active-accordeon');
		}
		
	});


    //
    $('#feature-tab').easytabs();

		$('.feature-table-line:odd').css({
			'background': '#f8f8f8'
		});



    // Слайдер похожих товаров
    var owl2 = $("#similar-products-slider").lightSlider({
		item: 3,
		pager: false
	});

	$('#similar-products-prev').click(function(){
		owl2.goToPrevSlide(); 
	});

	$('#similar-products-next').click(function(){
		owl2.goToNextSlide(); 
	});



	// Стилизация SELECT
	$('select').selecter();

		$('.selecter-selected').click(function(){
			$('.selecter-selected::after').css({
				'borderLeft': '7px solid transparent',
				'border-right': '7px solid transparent',
				'border-bottom': '7px solid #5ea6cf'
			});
		});

		

	// Стилизация чекбоксов
	$('input').styler();



	// Аккардеон вопросов
	$( "#faq-accordion" ).accordion();



	// Изменение полосы прокрутки
	$('#faq-accordion').niceScroll({
		cursorcolor: '#fff'
	});
});