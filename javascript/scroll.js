/* scroll appear animation */ 
function reveal() {
    var reveals = document.querySelectorAll(".js-scroll");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);
reveal();


function dissapear() {
  var i = true;
  var wrapper = document.querySelector(".noticeWindow");
  if (i) {
     wrapper.style.display = "none";
  }
}