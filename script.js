var slides = document.getElementsByClassName("mySlides");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var dots = document.getElementsByClassName("dot");

var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  var newIndex = slideIndex += n;
  handleDisabled(newIndex);

  showDivs(newIndex);
}

function currentSlide(n) {
    handleDisabled(slideIndex = n);
    showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function handleDisabled(newIndex) {
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  if (newIndex === slides.length) {
    nextBtn.disabled = true;
  } else if (newIndex === 1) {
    prevBtn.disabled = true;
  }
}



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
//   handleDisabled(newIndex);

// //   showDivs(newIndex);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var nextBtn = document.getElementsByClassName("prev");
//     var prevBtn = document.getElementsByClassName("next");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// function handleDisabled(newIndex) {
//     prevBtn.disabled = false;
//     nextBtn.disabled = false;
  
//     if (newIndex === slides.length) {
//       nextBtn.disabled = true;
//     } else if (newIndex === 1) {
//       prevBtn.disabled = true;
//     }
// }