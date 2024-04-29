$(document).ready(function(){

	if($('#slider').length){
		$('#slider').bxSlider({
			mode: 'fade',
			auto: true,
			autoHover: true,
			pause: 6000,
			nextText: 'd',
			prevText: 'u'
		});
	}

	if($('.fancybox').length){
		$('.fancybox').fancybox({
			padding : 6,
			'type' : 'image'
		});
	}

	$('.msgb').click(function(){
		$('.msgb').fadeOut(200);
		$('.msg').fadeOut(100);
	});
	$('.msg .btn').click(function(){
		$('.msgb').fadeOut(200);
		$('.msg').fadeOut(100);
		return false;
	});

	$('#lang > li > a').on('click', function(){
		return false;
	});

	var current_url = window.location.pathname;
	if(current_url.indexOf('gallery1') >= 0){
		$('#showGallery8').trigger('click');
	}else if(current_url.indexOf('gallery2') >= 0){
		$('#showGallery7').trigger('click');
	}else if(current_url.indexOf('gallery3') >= 0){
		$('#showGallery4').trigger('click');
	}else if(current_url.indexOf('gallery4') >= 0){
		$('#showGallery9').trigger('click');
	}else if(current_url.indexOf('gallery5') >= 0){
		$('#showGallery1').trigger('click');
	}

});

$(document).on('click', '.hu', function(e) {
	saveLang('hu');
});

$(document).on('click', '.en', function(e) {
	saveLang('en');
});

$(document).on('click', '.es', function(e) {
	saveLang('es');
});

$(document).on('click', '#menuIcon', function(e){
	$('#menu').toggleClass('open');
});

function saveLang(lang) {
	localStorage.setItem('lang', lang);
}

function getLang() {
	return localStorage.getItem('lang');
}

function validateContact(){
	var valid = true;
	var name = document.forms['contact']['name'].value;
	var email = document.forms['contact']['email'].value;
	var email_atpos = email.indexOf('@');
	var email_dotpos = email.lastIndexOf('.');
	var message = document.forms['contact']['message'].value;
	if(name == 0 || !name.match(/[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ0-9]{2,} .*[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ0-9]{2,}/)){
		document.getElementById('name').className = 'error';
		valid = false;
	}else{
		document.getElementById('name').className = '';
	}
	if(email == 0 || email_atpos < 1 || email_dotpos < email_atpos + 2 || email_dotpos + 2 >= email.length){
		document.getElementById('email').className = 'error';
		valid = false;
	}else{
		document.getElementById('email').className = '';
	}
	if(message == 0 || !message.match(/[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ0-9]{2,} .*[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ0-9]{2,}/)){
		document.getElementById('message').className = 'error';
		valid = false;
	}else{
		document.getElementById('message').className = '';
	}
	return valid;
}

function successMessage(){
	$('.msgb').fadeIn(200);
	$('.msg.success').fadeIn(100);
}
function alertMessage(){
	$('.msgb').fadeIn(200);
	$('.msg.alert').fadeIn(100);
}

$(document).on('click', '#galleryWrapperMain > div .gallery a', function(e){
	var gallery = $(this).attr('id').replace('showGallery', '#galleryWrapper_');
	$('#galleryWrapperMain').hide();
	$(gallery).fadeIn();
	$('html, body').animate({
		scrollTop: $('h1').offset().top
	}, 'slow');
	return false;
});
$(document).on('click', '.back', function(e){
	$('div[id^="galleryWrapper_"]').hide();
	$('#galleryWrapperMain').fadeIn();
	$('html, body').animate({
		scrollTop: $('h1').offset().top
	}, 'slow');
	return false;
});