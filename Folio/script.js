function myFunction() {
 var x = document.querySelector("nav"); 
  if (x.className === "ordinary") {
    x.className = "responsive";
  } else {
    x.className ="ordinary";
  };
}

var but = document.querySelector(".icon");
but.addEventListener('blur', myFunction);
// function menuHide() {

// }

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





