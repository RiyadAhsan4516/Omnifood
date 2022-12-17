// This is just some jquery code. We will do mximum stuffs using the vue.js so this part is not the most essential thing to know.
// Vue.js can do everything jquery can.

$(document).ready(function() {
    $('.js--section--feature').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        };
    }, {
            offset: '80px'      /* this means the function will execute 60px before we enter the feature section */
    });
    
    // Scroll on buttons :
    $(".js--scroll-to-plans").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
    });
    $(".js--scroll-to-start").click(function(){
        $('html, body').animate({scrollTop: $('.js--section--feature').offset().top}, 1000);
    })
})