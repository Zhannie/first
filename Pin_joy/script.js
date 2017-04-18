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





