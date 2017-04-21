var x = document.querySelector("nav"),
 	z = document.querySelector("div.overlay");

function myFunction() {
  if (x.className === "ordinary") {
    x.className = "responsive";
    z.className = "responsive";
  } else {
    x.className = "ordinary";
    z.className = "overlay";
  };
}

z.addEventListener('click', function(){x.className="ordinary"; z.className = "overlay";});


var y = document.querySelectorAll("nav li a");
for (var i = 0; i < y.length; i++) {
		y[i].addEventListener('click', menuClick);
	};
function menuClick(){
	for (var i = 0; i < y.length; i++) {
		y[i].classList.remove("active");
		this.classList.add("active");
	}
};





