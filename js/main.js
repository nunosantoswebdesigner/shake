$( document ).ready(function() {
    console.log( "ready!" );
    $(".thankyou_message").hide();

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        keyboardControl: true
    });
    console.log(swiper)

    $("input").focus(function(){
        $("#footer_image_letters_on").hide();
    });
    
    //listen to shake event
    var shakeEvent = new Shake({
        threshold: 15
    });
    
    shakeEvent.start();
    
    window.addEventListener('shake', function () {
        setInterval( () => {

            $(".thankyou_message").show();
            $(".first-slide").hide();
            $(".second-slide").hide();
        }, 4500)
        $("#my_form").submit().delay('5000');

        stopShake();
    }, false);
    
    //stop listening
    function stopShake() {
        shakeEvent.stop();
    }
    
    //check if shake is supported or not.
    if (!("ondevicemotion" in window)) {
        alert("Not Supported");
    }
    
});
