console.log("Your index.js file is loaded correctly");

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $("#topArrow").fadeIn(200);         // Fade in the arrow
    } else {
        $("#topArrow").fadeOut(200);   // Else fade out the arrow
    }
});
$("#topArrow").click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
