if (window.location.href.split("#").length >= 2) {
  var div_url = "#" + window.location.href.split("#")[1];
  if (div_url != "")
    scroll_to(div_url, 90, flag=true);
}

function scroll_to(clicked_link, nav_height, flag=false) {
  if (flag == false) {
    var element_class = clicked_link.attr('href');
  }
  else {
    var element_class = clicked_link;
  }
  var scroll_to = 0;
  console.log(element_class);
  if(element_class != '#mv-home') {
    scroll_to = $(element_class).offset().top - nav_height;
  }
  if($(window).scrollTop() != scroll_to) {
      $('html, body').stop().animate({scrollTop: scroll_to}, 100);
  }
}

$('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    $(".navbar-nav li a").removeClass("active");
    $(this).addClass("active");
    $(".navbar-collapse").collapse("hide");
    scroll_to($(this), 90);
});

function copyText() {
    var $temp = $("<input>");
    var $url = $("#mv-contract-address").text().replace("                       ", "");
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $('#mv-copy-button').text('Copied');
} 

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#404040"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#404040",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "mode": "repulse"
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
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  })
