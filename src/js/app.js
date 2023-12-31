$(document).ready(function () {
    var slider = tns({
        container: ".my-slider",
        items: 3,
        gutter: 60,
        edgePadding: 100,
        nav: false,
        controls: false,
        rewind: false,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        swipeAngle: false,
        speed: 4000,
        responsive: {
            0: {
              items: 1,
              gutter: 40,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 2
            },
            1200: {
                items: 3
              }
          }
    });

    $('.menu-link').on('click', () => {
        if ( $('#menuCheck').is(":checked") ){
            $('#menuCheck').prop('checked', false);
        }
    });
});
