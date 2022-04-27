// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    //alert(element);
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    
    if(element.alt === "Weather Forecast"){
        captionText.innerHTML = `<span class="w3-center" style="font-size:2rem"><a href="https://rekhawb.github.io/Weather-Forecast/" target="_blank">`+element.alt+`</a></span>`;
    }else if(element.alt === "Food recall website"){
        captionText.innerHTML = `<span class="w3-center" style="font-size:2rem"><a href="https://rekhawb.github.io/Food-Recall/" target="_blank">`+element.alt+`</a></span>`;
    }else if(element.alt === "Code Quiz"){
        captionText.innerHTML = `<span class="w3-center" style="font-size:2rem"><a href="https://rekhawb.github.io/CodeQuiz/" target="_blank">`+element.alt+`</a></span>`;
    }
    else if(element.alt === "WorkDay Scheduler"){
        captionText.innerHTML = `<span class="w3-center" style="font-size:2rem"><a href="https://rekhawb.github.io/Work-Day-Scheduler/" target="_blank">`+element.alt+`</a></span>`;
    } 
     else if(element.alt === "Bingo"){
        captionText.innerHTML = `<span class="w3-center" style="font-size:2rem"><a href=" https://rekhawb.github.io/Bingo/" target="_blank">`+element.alt+`</a></span>`;
    }
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }