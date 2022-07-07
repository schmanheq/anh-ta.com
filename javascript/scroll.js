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
  var sec1 = document.querySelector(".sec1");
  var sec2 = document.querySelector(".sec2");
  var sec3 = document.querySelector(".sec3");
  var sec4 = document.querySelector(".sec4")
  var wrapper = document.querySelector(".noticeWindow");
  if (i) {
     wrapper.style.display = "none";
     sec1.style.filter = "none";
     sec2.style.filter = "none";
     sec3.style.filter = "none";
     sec4.style.filter = "none";
  }
}