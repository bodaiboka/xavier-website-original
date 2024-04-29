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


	var lang = getLang();

	$("[data-translate-key]").each(function() {
		var key = $(this).data("translate-key");
		$(this).html(strings[lang][key]);
	});

	$('#lang-selector').removeClass('hu en es');
	$('#lang-selector').addClass(lang)
});

$(document).on('click', '.hu', function(e) {
	saveLang('hu');
	location.reload();
});

$(document).on('click', '.en', function(e) {
	saveLang('en');
	location.reload();
});

$(document).on('click', '.es', function(e) {
	saveLang('es');
	location.reload();
});

$(document).on('click', '#menuIcon', function(e){
	$('#menu').toggleClass('open');
});

function saveLang(lang) {
	localStorage.setItem('lang', lang);
}

function getLang() {
	if (localStorage.getItem('lang') != null)
		return localStorage.getItem('lang');
	else 
		return 'hu'
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

let strings = {
	'hu' : {
		'selected-lang': 'Magyar',
		'home': 'Főoldal',
		'biography': 'Életrajz',
		'repertoire': 'Repertoár',
		'calendar': 'Naptár',
		'gallery': 'Galéria',
		'media': 'Média',
		'contact': 'Kapcsolat',
		'slogan': 'Zene nélkül lehet<br>élni, de nem érdemes',
		'kodaly': 'Kodály Zoltán',
		'copyright': 'Minden jog fenntartva!',
		'introduction': 'Bemutatkozás',
		'welcome': 'Üdvözöllek az oldalamon.',
		'intro_text': 'A zene része az életünknek, így az én életemet is meghatározta és befolyásolta.</p><p>A zenével fejezem ki magam, nem tudok elképzelni egy szebb és végtelenebb világot, mint azt, amit a hangok színeivel lehet festeni.</p><p>Számomra Kodály gondolata fejez ki a legjobban az életem értelmét:',
		'slogan2': 'Zene nélkül lehet élni, de nem érdemes',
		'slide1_title': 'Tosca',
		'slide1_date': '2015',
		'slide2_title': 'Don Giovanni',
		'slide2_date': '2014',
		'slide3_title': 'Teatro Bolivar',
		'slide3_date': '2010',
		'slide4_title': 'Traviata',
		'slide4_date': '2006',
		'slide5_title': 'Hoffmann Meséi',
		'slide5_date': '2007',
		'bio_title': 'Xavier Rivadeneira életrajz',
		'bio_desc': 'Xavier Rivadeneira operaénekes életrajza',
		'bio_text': 'Rivadeneira Xavier Ecuadorban született. Zenei tanulmányait szülővárosában, Quitóban a Nemzeti Konzervatóriumban kezdte, ének tanára a drámai szoprán Blanca Hauser volt. 1986-89 rendszeres közreműködője az Ecuadori Opera Alapítvány és a Nemzeti Filharmonikusok által szervezett koncerteknek. 1990-ben megnyeri az Ecuadori Szimfonikus Zenekar szervezésében megtartott &quot;Fiatal szólisták&quot; versenyét. Még ebben az évben Magyarországra kerül és a Liszt Ferenc Zeneművészeti Főiskolán Bende Zsolt tanítványa 2 évig. Ebben az időben lesz a Magyar Állami Operaház címzetes magánénekese, ahol László Margit a tanára. A következő években állandó szólistája a Budapesti Kamaraoperának és az Eötvös Loránd Tudományi Egyetem Bartók Béla Zenekarának.</p><p>Nagyváradon a Partium Egyetemen zenepedagógiát tanul. Miskolcon, az Egyetem Bartók Béla Zenei Intézetében folytatja tanulmányait, ahol megkapja ének művész és tanári mesteri diplomáját. 1998-2000 lehetősége nyílik Pozsonyban a híres tenorral Frantisek Livoraval együtt dolgozni. 2000-2003 a Magyar Állami Operaház stúdiójának tagja, melynek vezetője ebben az időben Oberfrank Géza karmester. 2002-ben a Sidney Lion Scholarship ösztöndíj keretében Londonban tanul. Ennek köszönhetően 2003-ban a Dorset Opera produkciójában megkapja Erkel Ferenc Hunyadi László operájának címszerepét.</p><p>2003-ban megkapja a magyar állampolgárságot. 2004-2006 a debreceni Csokonai Színház állandó vendég szólistája, ahol az összes műsoron lévő opera főszerepét elénekli. 2005-ben a Magyar Rádió Szimfonikus Zenekarával és Énekkarával Jerevánban turnézik Mozart és Verdi Requiemjének tenor szólójával. 2007-ben megkapja Miskolcon Offenbach Hoffmann meséi c. operájának címszerepét, melyet magyar nyelven alakit. Ugyanebben az évben elénekli Verdi Requiemjének tenor szólóját a Zeneakadémia Nagytermében. A maribori Nemzeti Színházban nagy sikerrel alakítja Faustot Gounod operájában illetve Nagyváradon és Budapesten az Állami Operaházban Verdi Traviata c. operájában Alfred Germont szerepét. Még ebben az évben Luxemburgban elénekli Bizet Carmen c. operájában Don José szerepét.</p><p>2008 nyarán felkérik a Fertőrákosi kőfejtőben  megrendezésre kerülő tenor gálára, ahova a 9 legnevesebb magyar tenorista kap meghívást. 2009-ben Beethoven 9. szimfóniájának tenor szólóját énekli nagy sikerrel Olaszországban. Ugyanezzel a művel vendégszerepel 2010-ben Quitóban a Nemzeti Filharmonikusokkal. Még ebben az évben debütál Mozart Don Giovannit operájában Don Ottavio szerepében Miskolcon. 2011-ben dubai és izraeli vendégszereplés után hosszabb időt tölt Quitóban,  ahol a főszerepet alakítja Luis Humberto Salgado &quot;Ensueños de  Amor&quot; c. operettjének ősbemutatóján.</p><p>A következő években is többször hívják és vendégszerepel Ecuadorban.  Az ország különböző szimfonikus zenekaraival, társulataival operakoncerteken vesz részt illetve számos egyetemre hívják mesterkurzust tartani. Még ez időben elindítja magyar-ecuadori zenei alapítványának megalapítását. 2014 nyarán vendégszerepel Bécsben, Mozart Don Giovanni operájából Don Ottavio szerepét énekli. 2015-ben Miskolcon felkérik Puccini Tosca c. operájának tenor szerepére.</p><p>Az elmúlt 10 évben aktívan közreműködött Ecuadorban az ének tanítás és operajátszás fejlődésében. Tanít workshop-okon, mesterkurzusokat tart Quitoban, Guayaquilban és Cuencaban, olyan neves zenei intézményekkel dolgozik együtt mint a Nemzeti Zenei Konzervatórium Quitoban, a Bolivar Színház Alapítványa illetve a quitoi &quot;Zene Háza&quot; Alapítvány, az Antonio Neumane Konzervatórium Guayaquilban, a guayaquili  Nemzeti Filharmonikusok, és a cuencai Egyetem Művészeti Tanszéke. Jelenleg a MusArtEH magyar-ecuadori Alaptíványának munkáival foglalkozik, melynek elsődleges célja az ének, zene és előadóművészet fejlődésének támogatása Ecuadorban, magyar illetve nemzetközi együttműködéssel.',
		'reper_title': 'Xavier Rivadeneira repertoár',
		'reper_desc': 'Xavier Rivadeneira operaénekes repertoárja',
		'concerts': 'Koncertek',
		'operas_text': 'Gounod: Faust – Faust</h3><h3>Wagner: A bolygó hollandi – Erick</h3><h3>Mozart: Idomeneo – Idomeneo</h3><h3>Mozart: Don Ottavio – Don Giovanni</h3><h3>Verdi: Nabucco – Ismael</h3><h3>Verdi: Attila – Attila</h3><h3>Verdi: La Traviata – Alfredo</h3><h3>Erkel Ferenc: Hunyadi László – Hunyadi László</h3><h3>Erkel Ferenc: Bánk Bán – Ottó</h3><h3>Donizetti: Szerelmi bájital – Nemorino</h3><h3>Bizet: Carmen – Don Jose</h3><h3>Puccini: Tosca – Cavaradossi</h3><h3>Puccini: Madama Butterfly – Pinkerton</h3><h3>Puccini: Rodolf Bohémélet</h3><h3>Offenbach: Hoffmann meséi – Hoffmann',
		'concerts_text': 'Rossini: Petite messe solennelle</h3><h3>Verdi: Requiem</h3><h3>Bach: Magnificat</h3><h3>Mozart: Requiem</h3><h3>Mozart: &quot;Koronázási mise&quot;</h3><h3>Mozart: C-dúr mise</h3><h3>Mozart: D-dúr mise</h3><h3>Mozart: Missa Solemnis KV139</h3><h3>Puccini: Messa di gloria</h3><h3>Beethoven: IX. szimfónia</h3><h3>Bruckner: Requiem</h3><h3>Ramirez: Kreol mise</h3><h3>Orbán: Passió és Karácsonyi Oratórium</h3><h3>Charpentier: Te Deum</h3><h3>Haydn: &quot;Theresienmesse&quot;</h3><h3>Kodály: &quot;Missa Brevis&quot;',
		'calendar_title': 'Xavier Rivadeneira naptár',
		'calendar_desc': 'Xavier Rivadeneira operaénekes eseménynaptára',
		'calendar2': 'Eseménynaptár',
		'media_title': 'Xavier Rivadeneira média',
		'media_desc': 'Xavier Rivadeneira operaénekes videógalériája',
		'contact_title': 'Xavier Rivadeneira kapcsolat',
		'contact_desc': 'Kapcsolatfelvétel Xavier Rivadeneira operaénekessel',
		'opera_singer': 'Xavier Rivadeneira operaénekes',
		'phone': 'Telefon',
		'send_message': 'Üzenet küldése',
		'message': 'Üzenet',
		'send': 'Elküld',
		'your_email': 'E-mail címe',
		'your_name': 'Az Ön neve',
		'alert_message': 'Az üzenetküldés technikai okok miatt nem sikerült, kérjük, próbálja újra!',
		'feedback': 'Visszajelzés',
		'success_message': 'Köszönjük érdeklődését, az üzenetet sikeresen továbbítottuk!',
		'back': 'Vissza',
		'gallery_desc': 'Xavier Rivadeneira operaénekes képgalériája',
		'gallery_title': 'Xavier Rivadeneira galéria'
	},
	'en' : {
		'selected-lang': 'English',
		'home': 'Home',
		'biography': 'Biography',
		'repertoire': 'Repertoire',
		'calendar': 'Calendar',
		'gallery': 'Gallery',
		'media': 'Media',
		'contact': 'Contact',
		'slogan': 'You can live without<br>music, but it\'s not worth it',
		'kodaly': 'Zoltán Kodály',
		'copyright': 'All rights reserved.',
		'introduction': 'Introduction',
		'welcome': 'Welcome to my page.',
		'intro_text': 'Music is part of our life, and it has determined and influenced mine.</p><p>Music is my way of expressing myself. I can not imagine a more beautiful and endless world, than the one painted with the colors of sounds.</p><p>A thought of Kodály, perfectly expresses the meaning of my life:',
		'slogan2': 'You can live without music, but it\'s not worth it',
		'slide1_title': 'Tosca',
		'slide1_date': '2015',
		'slide2_title': 'Don Giovanni',
		'slide2_date': '2014',
		'slide3_title': 'Teatro Bolivar',
		'slide3_date': '2010',
		'slide4_title': 'Traviata',
		'slide4_date': '2006',
		'slide5_title': 'Tales of Hoffmann',
		'slide5_date': '2007',
		'bio_title': 'Biography of Xavier Rivadeneira',
		'bio_desc': 'Xavier Rivadeneira operaénekes életrajza',
		'bio_text': 'Xavier Rivadeneira is an Ecuadorian/Hungarian who was born in Quito, Ecuador. Originally reading Law at the University there, he moved to the National Conservatory of Music and studied vocal technique and repertoire with the dramatic soprano Blanca Hauser as well as attending courses in interpretation and acting under distinguished teachers, while studying in Ecuador he won the Young Soloist Competition. In 1991 he began his studies at the Franz Liszt Academy in Budapest. Over the next few years he studied with distinguished singers and music staff at the Hungarian State Opera, and since 2000 has been singing at the Hungarian State Opera House. In 2002 he went to London on a Sidney Len Scholarship. He has considerable experience on the concert platform, and has sung in a wide range of oratorio, chamber music and opera.</p><p>He finished his studies in the speciality of classic opera singer in the Béla Bártók University in Hungary, and Music Pedagogy at the Partium University in Transylvania. Presently he is doing a master in Pedagogy of Singing at the University of Miskolc.</p><p>He has sung in many theaters and concert halls in Hungary, Germany, Italy, Spain, Slovenia, Slovakia, Romania, Austria, England, Luxemburg, Thailand, Dubai, Armenia, Mexico, Venezuela and Ecuador.</p><p>His pedagogical activity in the last ten years, has focused on contributing to the development of singing and opera in Ecuador teaching workshops and &quot;Master Classes&quot; in Quito, Guayaquil and Cuenca, in musical institutions related to singing, opera and performing arts in general, such as: National Conservatory of Music in Quito, Bolivar Theater Foundation, Foundation House of Music of Quito. Guayaquil Symphony Orchestra, Conservatory Antonio Neumane of Guayaquil, Cuenca University Faculty of Arts, Conservatory Youth Choir Jose Maria Rodriguez de Cuenca, among others.</p><p>He is currently promoting a major project of cooperation between Ecuador and Hungary through the foundation MusArtEH of which he is president in Budapest, Hungary and aimed to the development of art, singing, music and performing arts, with the advice and cooperation from Hungary and Europe for Ecuador.',
		'reper_title': 'Repertoire of Xavier Rivadeneira',
		'reper_desc': 'Repertoire of opera singer Xavier Rivadeneira',
		'concerts': 'Concerts',
		'operas_text': 'Gounod: Faust – Faust</h3><h3>Wagner: The Flying Dutchman – Erick</h3><h3>Mozart: Idomeneo – Idomeneo</h3><h3>Mozart: Don Ottavio – Don Giovanni</h3><h3>Verdi: Nabucco – Ismael</h3><h3>Verdi: Attila – Attila</h3><h3>Verdi: La Traviata – Alfredo</h3><h3>Ferenc Erkel: Hunyadi Laszlo – Laszlo Hunyadi</h3><h3>Ferenc Erkel: Bank Ban – Otto</h3><h3>Donizetti: L’elisir d’amore – Nemorino</h3><h3>Bizet: Carmen – Don Jose</h3><h3>Puccini: Tosca – Cavaradossi</h3><h3>Puccini: Madama Butterfly – Pinkerton</h3><h3>Puccini: La Bohème Rodolf</h3><h3>Offenbach: Tales of Hoffmann – Hoffmann',
		'concerts_text': 'Rossini’s Petite Messe Solennelle</h3><h3>Verdi: Requiem</h3><h3>Bach: Magnificat</h3><h3>Mozart: Requiem</h3><h3>Mozart’s &quot;Coronation Mass&quot;</h3><h3>Mozart: Mass in C major</h3><h3>Mozart: Mass in D major</h3><h3>Mozart: Missa Solemnis KV139</h3><h3>Puccini’s Messa di Gloria</h3><h3>Beethoven: IX. symphonic</h3><h3>Brukner: Requiem</h3><h3>Ramirez: Creole Mass</h3><h3>Orban Passion and Christmas Oratorio</h3><h3>Charpentier: Te Deum</h3><h3>Haydn: &quot;Theresienmesse&quot;</h3><h3>Kodály’s &quot;Missa Brevis&quot;',
		'calendar_title': 'Calendar of Xavier Rivadeneira',
		'calendar_desc': 'Event calendar of opera singer Xavier Rivadeneira',
		'calendar2': 'Event calendar',
		'media_title': 'Media of Xavier Rivadeneira',
		'media_desc': 'Video gallery of opera singer Xavier Rivadeneira',
		'contact_title': 'Contact of Xavier Rivadeneira',
		'contact_desc': 'Get in touch with opera singer Xavier Rivadeneira',
		'opera_singer': 'opera singer Xavier Rivadeneira',
		'phone': 'Phone',
		'send_message': 'Send message',
		'message': 'Message',
		'send': 'Send',
		'your_email': 'Your e-mail',
		'your_name': 'Your name',
		'alert_message': 'Your message has not been sent due to a technical error. Please try again.',
		'feedback': 'Feedback',
		'success_message': 'Thank you for your inquiry. Your message has been sent.',
		'back': 'Back',
		'gallery_desc': 'Photo gallery of opera singer Xavier Rivadeneira',
		'gallery_title': 'Gallery of Xavier Rivadeneira'
	},
	'es' : {
		'selected-lang': 'Español',
		'home': 'Casa',
		'biography': 'Biografía',
		'repertoire': 'Repertorio',
		'calendar': 'Calendario',
		'gallery': 'Galería',
		'media': 'Medios de comunicación',
		'contact': 'Contacto',
		'slogan': 'Se puede vivir sin música,<br>pero, no vale la pena',
		'kodaly': 'Zoltán Kodály',
		'copyright': 'Todos los derechos reservados.',
		'introduction': 'Introducción',
		'welcome': 'Bienvenido a mi sitio.',
		'intro_text': 'La música es parte de nuestra vida, y esta, ha determinado e influido la mía.</p><p>La música es la manera de expresarme. No puedo imaginar un mundo más interminable y hermoso, que aquel pintado con los colores de los sonidos.</p><p>Este pensamiento de Kodály, expresa perfectamente el significado de mi vida:',
		'slogan2': 'Se puede vivir sin música, pero, no vale la pena',
		'slide1_title': 'Tosca',
		'slide1_date': '2015',
		'slide2_title': 'Don Giovanni',
		'slide2_date': '2014',
		'slide3_title': 'Teatro Bolivar',
		'slide3_date': '2010',
		'slide4_title': 'Traviata',
		'slide4_date': '2006',
		'slide5_title': 'Cuentos de Hoffmann',
		'slide5_date': '2007',
		'bio_title': 'Biografía de Xavier Rivadeneira',
		'bio_desc': 'Biografía de Xavier Rivadeneira, cantante de ópera',
		'bio_text': 'El tenor ecuatoriano-húngaro, inició sus estudios de canto con la soprano chilena, Blanca Hauser y los musicales en el Conservatorio Nacional de Música de Quito entre 1982 y 1985. Posteriormente entre 1990 y 1993 en la Academia de Música Franz Liszt de Budapest Hungría. En la Universidad de Miskolc Instituto Béla Bartók de Hungría, donde obtiene su título de &quot;Performig Arts-Classical Music Singer&quot; y posteriormente el título de &quot;Magister&quot; en pedagogía musical y canto &quot;Music Teacher – Sing Teacher&quot;. También realizó estudios en el &quot;Opera Studio&quot; &quot;Master Course&quot;  en la Ópera del Estado Húngaro.</p><p>Su formación  vocal y musical, ha contado con maestros como: Zsolt Bende, Margit László, Gyula Pfeiffer, Magda Nádor y Szüle Tamás. Además en el año 2000 con el tenor eslovaco Frantisek Livora.</p><p>Ha participado en varias producciones de ópera y conciertos de la Fundación Ópera del Ecuador y la Orquesta Sinfónica Nacional del Ecuador entre los años 1987 y 1988. Y con la Orquesta Sinfónica de Guayaquil y la Orquesta Sinfónica Nacional de Ecuador en estos últimos años.</p><p>En 1990 obtiene el título de &quot;Triunfador del VIII Concurso Jóvenes Solistas Ecuatorianos&quot;.</p><p>En el año 2002 recibe la beca de estudios &quot;Sydney Lion&quot; en Londres.</p><p>Del año 2000 al 2003, en la Ópera del Estado, y siendo miembro del &quot;Estudio de Ópera&quot; bajo la dirección de los maestros  Géza Oberfrank (Director general musical del Teatro) y András Fehér (Director de escena), participa en varias producciones de ópera tanto en el Estudio como también en el Teatro.</p><p>En 1993 y como miembro de la Ópera del Estado en Budapest, obtiene el nombramiento de solista en el Teatro.</p><p>Fue solista permanente del Teatro Interoperett  en Budapest y de la Orquesta de la Universidad Eötvös Lorand en la misma ciudad. Ha sido solista también de la Ópera de Cámara, la Filarmónica, y la Radio. De igual manera en el Teatro de la Ópera del Estado Húngaro, Teatro Nacional de Debrecen y en el de Miskolc.</p><p>Ha realizado conciertos en Alemania, Gran Bretaña, España, Austria, Luxemburgo Hungría, Italia, Eslovaquia, Eslovenia, Croacia, Rumanía, Armenia, Tailandia, Israel, Dubái, Ecuador, México y Venezuela.</p><p>Su actividad pedagógica en estos últimos diez años, se ha concentrado en aportar al desarrollo del canto y la ópera en Ecuador  dictando talleres y &quot;Clases Magistrales&quot; en Quito, Guayaquil y Cuenca, en instituciones musicales  relacionadas con el canto, la ópera y artes escénicos en general, como: Conservatorio Nacional Superior de Música de Quito, Fundación Teatro Bolívar, Fundación Casa de la Música de Quito. Orquesta Sinfónica de Guayaquil, Conservatorio Antonio Neumane de Guayaquil, Universidad de Cuenca Facultad de Artes, Coro Juvenil del Conservatorio Superior José María Rodríguez de Cuenca, entre otros.</p><p>Actualmente se encuentra impulsando un gran proyecto de cooperación entre Ecuador y Hungría a través de las fundaciones MusArtEH en Ecuador y Hungría. Fundación de la cual es presidente en Budapest Hungría y que tiene por objeto el desarrollo del arte, el canto, la música y las artes escénicas, con el asesoramiento y cooperación desde Hungría y Europa para el Ecuador.',
		'reper_title': 'Repertorio de Xavier Rivadeneira',
		'reper_desc': 'Repertorio de Xavier Rivadeneira cantante de ópera',
		'concerts': 'Conciertos',
		'operas_text': 'Gounod: Faust – Fausto</h3><h3>Wagner: El holandés errante – Erick</h3><h3>Mozart: Idomeneo – Idomeneo</h3><h3>Mozart: Don Ottavio – Don Giovanni</h3><h3>Verdi: Nabucco – Ismael</h3><h3>Verdi: Attila – Attila</h3><h3>Verdi: La Traviata – Alfredo</h3><h3>Ferenc Erkel: Hunyadi Laszlo – Laszlo Hunyadi</h3><h3>Ferenc Erkel: Banco Ban – Otto</h3><h3>Donizetti: El elixir de amor – Nemorino</h3><h3>Bizet: Carmen – Don José</h3><h3>Puccini: Tosca – Cavaradossi</h3><h3>Puccini: Madama Butterfly – Pinkerton</h3><h3>Puccini: La Bohème Rodolf</h3><h3>Offenbach: Cuentos de Hoffmann – Hoffmann',
		'concerts_text': 'Pequeña Misa Solemne de Rossini</h3><h3>Verdi: Requiem</h3><h3>Bach: Magnificat</h3><h3>Mozart: Requiem</h3><h3>&quot;Misa de Coronación&quot; de Mozart</h3><h3>Mozart: Misa en Do mayor</h3><h3>Mozart: Misa en re mayor</h3><h3>Mozart: Missa Solemnis KV139</h3><h3>De Puccini Messa di Gloria</h3><h3>Beethoven: IX. sinfonía</h3><h3>Brukner: Requiem</h3><h3>Ramírez: misa criolla</h3><h3>La pasión Orban y Oratorio de Navidad</h3><h3>Charpentier: Te Deum</h3><h3>Haydn: &quot;Theresienmesse&quot;</h3><h3>De Kodály &quot;Missa Brevis&quot;',
		'calendar_title': 'Calendario de Xavier Rivadeneira',
		'calendar_desc': 'Calendario de eventos de Xavier Rivadeneira cantante de ópera',
		'calendar2': 'Calendario de eventos',
		'media_title': 'Media de Xavier Rivadeneira',
		'media_desc': 'Xavier Rivadeneira galería de videos',
		'contact_title': 'Contacto con Xavier Rivadeneira',
		'contact_desc': 'Contáctate con Xavier Rivadeneira cantante de ópera',
		'opera_singer': 'Xavier Rivadeneira cantante de ópera',
		'phone': 'Teléfono',
		'send_message': 'Envio del mensaje',
		'message': 'Mensaje',
		'send': 'Enviar',
		'your_email': 'Su direccion E-mail',
		'your_name': 'Su nombre',
		'alert_message': 'El mensaje no ha podido enviarse por problemas técnicos, pruébelo más tarde.',
		'feedback': 'Comentarios',
		'success_message': 'Gracias por su atención, hemos procesado su mensaje.',
		'back': 'Regresar',
		'gallery_desc': 'Galería fotográfica de Xavier Rivadeneira cantante de ópera',
		'gallery_title': 'Galería de Xavier Rivadeneira'
	}
}