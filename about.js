var slideIndex=0;function showSlides(){var e=0,s=document.getElementsByClassName("slide");for(e=0;e<s.length;e++)s[e].style.display="none";++slideIndex>s.length&&(slideIndex=1),s[slideIndex-1].style.display="block",setTimeout(showSlides,6e3)}showSlides();