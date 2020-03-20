console.log("main.js loaded");
$(document).ready(function() {
	$("#home-link").click(function() {
		$('a').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-home').show();
	});
	$("#data-link").click(function() {
		$('a').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-data').show();
	});
	$("#news-link").click(function() {
		$('a').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-news').show();
	});
	$("#contact-link").click(function() {
		$('a').removeClass('active');
		$(this).addClass('active');
		$(".tab").hide();
		$('#tab-contact').show();
	});
});
