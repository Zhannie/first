var y = document.querySelectorAll(".nav li");
for (var i = 0; i < y.length; i++) {
		y[i].addEventListener('click', menuClick);
	};
function menuClick(){
	for (var i = 0; i < y.length; i++) {
		y[i].classList.remove("active");
		this.classList.add("active");
	}
};

var z = document.querySelectorAll("a.hex");
for (var i = 0; i < z.length; i++) {
	z[i].addEventListener('click', function(){});
};

$(function() {
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if (top < 100)
			$('#hideMe').stop().animate({'opacity':'1'}, 100);
		else
			$('#hideMe').stop().animate({'opacity':'.7'}, 100);
	});
});

	$('#hideMe').hover (
		function (e) {
			var top = $(window).scrollTop();
			if(top != 0) {
				$('#hideMe').stop().animate({'opacity':'1'}, 200);
			}
		});
		
		




