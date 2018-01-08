$(document).ready(function() {
  if (($(window).width() < 1280)) { // < 1260
    // $(window).resize(function() {
    var wdth = $(window).width()
    if (wdth < 1280) { // < 1260
      $(window).scroll(function(evt){
        if ($(window).scrollTop()>800 && $(window).scrollTop()<1500) {
          $(".left").removeClass("inactive");
        } else {
          $(".left").addClass("inactive")
        }
      })

    }
    // })
  }
})

$(window).scroll(function(evt){
  if ($(window).scrollTop()>300) {
    $(".navbar").removeClass("navbarTop");
  } else {
    $(".navbar").addClass("navbarTop")
  }
});

var wrapperClick = 0;

$(".wrapper").click(function(){
    if ((wrapperClick%2)==0) {
        wrapperClick++;
        $(".wrapper").addClass("d");
    } else {
        wrapperClick++;
        $(".wrapper").removeClass("d");
    }
});

$(window).scroll(function(evt){
  if ($(window).scrollTop()>1300 && $(window).scrollTop()<2300) {
    $(".left").removeClass("inactive");
  } else {
    $(".left").addClass("inactive")
  }
});


var getRes = $(window).resize()

$("#home").on("click", function(evt){
  $('html, body').animate({
    scrollTop: 0
  }, 1500);
  evt.preventDefault();
});

$("#intro").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#movieIntro").offset().top  
  }, 1000);
  e.preventDefault();
});

$("#pre").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#preview").offset().top  
  }, 1000);
  e.preventDefault();
});

$("#scene").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#movieScene").offset().top  
  }, 1000);
  e.preventDefault();
});

$("#info").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#movieInfo").offset().top  
  }, 1000);
  e.preventDefault();
});
