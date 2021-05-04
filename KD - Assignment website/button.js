//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 00 || document.documentElement.scrollTop > 00) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "show";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 580;
  document.documentElement.scrollTop = 580;
}
