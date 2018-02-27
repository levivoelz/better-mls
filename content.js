$(document).ready(function() {
  if ($('body').hasClass('mg-report-ui')) {
    $('body')
      .append('<div class="better-mls--carousel-container"><div class="better-mls--carousel"></div></div>')

    var $images = []
    $('img').clone().each(function() {
      $images.push($(this)
        .removeAttr('width height')
        .addClass('slide-image')
        .wrap("<div class='inner-slide'></div>")
        .parent())
    })

    $('.better-mls--carousel').append($images)

    $('.better-mls--carousel').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    })  
  }
})
