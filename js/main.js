document.addEventListener("DOMContentLoaded", function () {
    Pace.once('hide', ()=>{
        jQuery(".main").addClass("visible");
        setTimeout(function () {
            jQuery(".logo__link").addClass('remove-logo-glitch');
        }, 3000);
    });
});
jQuery(document).ready(function () {
        setInterval(function () {
                jQuery(".main-image").removeClass('glitch');
            setTimeout(function () {
                jQuery(".main-image").addClass('glitch');
            },3000);
        }, 5000);
    jQuery('.btn-play').on('click', function () {
        jQuery(this).toggleClass('play');
    });
    jQuery(function () {
        jQuery(window).on('resize', function () {
            var windowHeight = jQuery(window).height();
            var windowWidth = jQuery(window).width();
            var pi2Top = windowHeight / 4.34;
            var pi2Left = windowWidth / 100;
            var pi3Top = windowHeight / 33.3;
            var pi3Left = windowWidth / 33.3;
            var pi4Top = windowHeight / 50;
            var pi4Left = windowWidth / 4.5;
            var pi5Top = windowHeight / 100;
            var pi5Left = windowWidth / 2.6;
            var pi6Top = windowHeight / 50;
            var pi6Left = windowWidth / 1.88;
            var pi7Top = windowHeight / 50;
            var pi7Left = windowWidth / 1.56;
            var pi8Top = windowHeight / 2.56;
            var pi8Left = windowWidth / 1.2;
            jQuery(".paralax__img2").offset({top: pi2Top, left: pi2Left});
            jQuery(".paralax__img3").offset({top: pi3Top, left: pi3Left});
            jQuery(".paralax__img4").offset({top: pi4Top, left: pi4Left});
            jQuery(".paralax__img5").offset({top: pi5Top, left: pi5Left});
            jQuery(".paralax__img6").offset({top: pi6Top, left: pi6Left});
            jQuery(".paralax__img7").offset({top: pi7Top, left: pi7Left});
            jQuery(".paralax__img8").offset({top: pi8Top, left: pi8Left});
        });
        window.onload = function () {
            var speedo = 100
            var parallaxBox = document.getElementById('paralax-images');
            var l2left = document.getElementById('l2').offsetLeft,
                l2top = document.getElementById('l2').offsetTop;
            l3left = document.getElementById('l3').offsetLeft,
                l3top = document.getElementById('l3').offsetTop,
                l4left = document.getElementById('l4').offsetLeft,
                l4top = document.getElementById('l4').offsetTop,
                l5left = document.getElementById('l5').offsetLeft,
                l5top = document.getElementById('l5').offsetTop,
                l6left = document.getElementById('l6').offsetLeft,
                l6top = document.getElementById('l6').offsetTop,
                l7left = document.getElementById('l7').offsetLeft,
                l7top = document.getElementById('l7').offsetTop,
                l8left = document.getElementById('l8').offsetLeft,
                l8top = document.getElementById('l8').offsetTop;
            parallaxBox.onmousemove = function (event) {
                event = event || window.event;
                var x = event.clientX - parallaxBox.offsetLeft,
                    y = event.clientY - parallaxBox.offsetTop;
                mouseParallax('l2', l2left, l2top, x, y, 25);
                mouseParallax('l3', l3left, l3top, x, y, 60);
                mouseParallax('l4', l4left, l4top, x, y, 25);
                mouseParallax('l5', l5left, l5top, x, y, 65);
                mouseParallax('l6', l6left, l6top, x, y, 45);
                mouseParallax('l7', l7left, l7top, x, y, 65);
                mouseParallax('l8', l8left, l8top, x, y, 15);
            }
        }
        function mouseParallax(id, left, top, mouseX, mouseY, speed) {
            var obj = document.getElementById(id);
            var parentObj = obj.parentNode,
                containerWidth = parseInt(parentObj.offsetWidth),
                containerHeight = parseInt(parentObj.offsetHeight);
            obj.style.left = left - ( ( ( mouseX - ( parseInt(obj.offsetWidth) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
            obj.style.top = top - ( ( ( mouseY - ( parseInt(obj.offsetHeight) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
        }
        jQuery(window).trigger('resize');
    })
});
