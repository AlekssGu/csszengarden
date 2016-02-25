jQuery(document).ready(function() {

  function isAtTop(clickedElement)
  {
      var $elem = $(clickedElement);
      var $window = $(window);

      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();

      console.log(docViewTop);
      console.log(elemBottom);

      return (docViewTop + 300 >= elemBottom);
  };

/*
  $('.navigation-star').hover(function(e) {
      e.stopPropagation();
      $('.navigation-star').removeClass('animated infinite');
  }, function(e) {
      e.stopPropagation();
      $('.navigation-star').addClass('animated infinite');
  });

  $('.navigation-star-other').hover(function(e) {
      e.stopPropagation();
      $('.navigation-star-other').removeClass('animated infinite');
  }, function(e) {
      e.stopPropagation();
      $('.navigation-star-other').addClass('animated infinite');
  });
*/

  $('.navigation-star').click(function () {
      var clickedElement = $(this);

      if (isAtTop(clickedElement)) {
        var ele = $("body");
      }
      else {
        var ele = $("#zen-preamble");
      }
      $("html, body").animate({
           scrollTop: $(ele).offset().top-175
      }, 100);
      return false;
  });

  $('.navigation-star-other').click(function () {
      var ele;
      var clickedElement = $(this);

      if (isAtTop(clickedElement)) {
        clickedElement = clickedElement.parents().closest("section");
      }
      else {
        clickedElement = clickedElement.parents().next("section");
      }
      // this will search within the section
      $("html, body").animate({
           scrollTop: $(clickedElement).offset().top
      }, 100);
      return false;
  });
});
