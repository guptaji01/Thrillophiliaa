// header animation 
const header = document.getElementById('header');
const headerColored = document.getElementById('header-colored');
const sticky = header.clientHeight;

function myFunction() {
  if (window.scrollY >= sticky) {
    header.style.display = "none";
    headerColored.style.display = "block";
  } else {
    header.style.display = "block";
    headerColored.style.display = "none";
  }
}



// animation heading 
var headingAnimatedItems = document.getElementsByClassName('heading__animated-item');
var currentIndex = 0;

function animateHeadingAnimatedItems() {
var headingAnimatedItems = document.getElementsByClassName('heading__animated-item');

  if (currentIndex >= headingAnimatedItems.length) {
    currentIndex = 0;
  }

  var currenHeadingItem = headingAnimatedItems[currentIndex];
  currenHeadingItem.classList.add('active');
  currentIndex++;

  setTimeout(function() {
    currenHeadingItem.classList.remove('active');
    animateHeadingAnimatedItems();
  }, 1500); // Adjust the delay (in milliseconds) between each word animation
}

animateHeadingAnimatedItems();
