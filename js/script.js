// Internet Explorer Detection Script
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
  else return 0; //It is not IE
}
if (GetIEVersion() > 0) alert("This is Internet Explore. Your browser is not supported. Please use Google Chrome or Mozilla Firefox.");

// hide navbar on scroll down and show on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll-nav").style.top = "0";
  } else {
    document.getElementById("scroll-nav").style.top = "-125px";
  }
  prevScrollpos = currentScrollPos;
};

// hotspots
jQuery(function ($) {
  var pop = $(".map-popup");
  pop.click(function (e) {
    e.stopPropagation();
  });

  $("a.marker").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).next(".marker").toggleClass("markerClicked");
    $(this).next(".map-popup").toggleClass("open");
    $(this).parent().siblings().children(".map-popup").removeClass("open");
    $(this).parent().siblings().children(".marker").removeClass("markerClicked");
  });

  $(document).click(function () {
    pop.removeClass("open");
    element.removeClass("markerClicked");
  });

  pop.each(function () {
    var w = $(window).outerWidth(),
      edge = Math.round($(this).offset().left + $(this).outerWidth());
    if (w < edge) {
      $(this).addClass("edge");
    }
  });
});

