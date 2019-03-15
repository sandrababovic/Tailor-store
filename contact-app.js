window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("contact-animation").classList.add('animated','zoomIn');
    
  } else {
    document.getElementById("contact-animation").classList.remove('animated','zoomIn');
  }
}