particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1, /*.2*/
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5, /*2*/
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 5 /*3*/
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  var typed = new Typed('.typing', {
    strings: ["In a world where you can be <br> anything be kind.","Hey, I am Pankaj.","I am a web developer.", "I am a Freelancer.","I am a Student."],
    typeSpeed: 50 ,
    backSpeed: 40 ,
    loop:true
  });


  $(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });

    $(".fa-toggle-on").on("click", function() {
          $("header").toggleClass("mode");
          $("nav ul").addClass("showing");
    });


});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('grey');
    }

    else {
          $('nav').removeClass('grey');
    }
})










$(document).ready(function hide_div(){
  var counter = 2;
  var timer_status = setInterval(function(){
     counter--;
     if(counter > 0){
     var msg = 'hide div after ' + counter + ' seconds'
          $('#time_status').text(msg);
     }
     else{
          $('#time_status').text('hide successfully after 10 seconds');
          $('#h_div').addClass("high");
          clearInterval(timer_status);
    }
  }, 1000);
  
});
