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

var x = document.querySelectorAll("div.row div.mini");
var z = document.querySelector(".morebutton");

z.addEventListener('click', collapseIt);


function collapseIt() {
	if (z.textContent === "Хочу больше значков!") {
		showAll();
	} else {
		hideIt();
	}

};

function showAll() {
	for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("col-md-1", "col-sm-2", "col-xs-2");
		x[i].classList.add("col-md-3", "col-sm-4", "col-xs-6", "full");
		z.innerHTML = "Свернуть";
	}
};

	
function hideIt() {
		for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("col-md-3", "col-sm-4", "col-xs-6", "full");
		x[i].classList.add("col-md-1", "col-sm-2", "col-xs-2");
		z.innerHTML = "Хочу больше значков!";
		}
};



