$(document).ready(function(){
    $(".toggler").click(function(){
        $(".nav-links").toggleClass("collapse");
        $(".toggler i").toggleClass("hidden");
    });
    $(".nav-links a").click(function(){
        $(".nav-links").toggleClass("collapse");
        $(".toggler i").toggleClass("hidden");
    });
});

var gallerySlider = tns({
    container: ".gallery-slider",
    items: 40,
    slideBy: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: "#gallery-control",
    responsive: {
        1600: {
            items: 4,
            gutter: 20
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        480: {
            items: 1
        },
        300: {
            items: 1
        }
    }
});

