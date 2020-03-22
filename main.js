console.log("main.js loaded");
$(document).ready(function() {
	$("#home-link").click(function() {
		$('button').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-home').show();
	});
	$("#data-link").click(function() {
		$('button').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-data').show();
        var divElement = document.getElementById('viz1584901929003');var vizElement = divElement.getElementsByTagName('object')[0];if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}var scriptElement = document.createElement('script');scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement, vizElement);
        var divElement = document.getElementById('viz1584901951391');var vizElement = divElement.getElementsByTagName('object')[0];if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}var scriptElement = document.createElement('script');scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement, vizElement);
        var divElement = document.getElementById('viz1584901979008');var vizElement = divElement.getElementsByTagName('object')[0];if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}var scriptElement = document.createElement('script');scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement, vizElement);
	});
	$("#news-link").click(function() {
		$('button').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-news').show();
	});
	$("#supplies-link").click(function() {
		$('button').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-supplies').show();
	});
});
