// Implementace funkce pro smooth scroll
jQuery(document).ready(function()
{
  jQuery("a").on('click', function(event) 
  {
    if (this.hash != "") 
    {
      event.preventDefault();
      var navBar = document.getElementById("nav");
      var hash = this.hash;
      var top = $(hash).offset().top - navBar.clientHeight - 5;
      $('html, body').animate({scrollTop: top}, 500, function()
      {
        window.location.hash = top;
      });
    } 
  });
});

// Implementace funkce pro pridani tridy .sticky pro prichyceni navigace na spodni hrane header
let i = 0;
var navOffset = 0;
function stickyNavBar()
{
    var navBar = document.getElementById("nav");
    var whoDiv = document.getElementById("whoDiv");

  if(i == 0) 
  {
    navOffset = visualViewport.height - navBar.clientHeight;
    i++;
  }

  if (window.pageYOffset >= navOffset) 
  {
    navBar.classList.add("sticky");
    navBar.clientWidth = whoDiv.clientWidth;
  } 
  else 
  {
    navBar.classList.remove("sticky");
  }
}

window.onscroll = function() {stickyNavBar()};

// Funkce pro zmenu fotografii u prezentace projektu
var position = 0;
var bistryImgs = ["./img/bistry1.jpg", "./img/bistry2.jpg"];
var pruvodceImgs = ["./img/izrael1.jpg", "./img/izrael2.jpg"];
var counterImgs = ["./img/chat1.jpg", "./img/chat2.jpg"];

function photoChange()
{
  var bistryImg = document.getElementById("bistry-img");
  var pruvodceImg = document.getElementById("pruvodce-img");
  var counterImg = document.getElementById("counter-img");

  if (++position >= 2)
  {
    position = 0;
  }

  bistryImg.src = bistryImgs[position];
  pruvodceImg.src = pruvodceImgs[position];
  counterImg.src = counterImgs[position];
}

setInterval(photoChange, 5000);