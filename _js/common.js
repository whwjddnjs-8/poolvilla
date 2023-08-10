$(function () {
	/* Nice Select */
	$(".custom-select").niceSelect();

	$("header").load("/_inc/header.html", function () {
		$('ul.gnb>li').mouseover(function () {
			$("ul.gnb>li ul.snb").not($(this).children().siblings()).stop().slideUp();
			$(this).children('ul.snb').stop().slideDown();
		}).mouseout(function () {
			$(this).children('ul.snb').stop().slideUp();
		})
	});

	$("footer").load("/_inc/footer.html");
})

function openModal(id) {
	$('#' + id).show()
	$('html').css('overflow-y', 'hidden')
}

function closeModal(id) {
	$('#' + id).hide()
	$("html").css("overflow-y", "scroll");
}