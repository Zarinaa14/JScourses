$(document).ready(function() {
  $.ajax({
    // dataType: 'application/json',
    url: 'images.json',
    type: 'GET',
    success: function(data){
      if (typeof data === 'string' || data instanceof String) {
        data = $.parseJSON(data);
      }
      data.forEach(function(imageObj) {
        var link = $('<a>',{
            title: imageObj.title,
        }).appendTo('.thumbnails');
  
        $('<img>', {
          src: imageObj.image
        }).appendTo(link);
      });
      $('.thumbnails a:first').addClass('active');
    },
    error: function(data) {
        alert('woops!');
    }
  });
});


$(function(){
  $('body').on('click', 'img', function(event) {
    if (event.target.tagName.toLowerCase() !== 'img') {
      return;
    }

    let $currentImg = $(event.target);
    $(".big-image img").attr({ src: $currentImg[0].src });
    $currentImg.parent().siblings('a').removeClass('active');
    $currentImg.parent().addClass('active');
  });

  $('.next').on('click', function() {                        
    let $activeEl = $('.thumbnails .active');
    $activeEl.removeClass('active');

    let $nextEl = $activeEl.next();
    let $firstEl = $('.thumbnails a:first');

    if ($nextEl.length) {
      $nextEl.addClass('active');
      $('.big-image img').attr({ src: $nextEl.children()[0].src });
    } else {
      $firstEl.addClass('active');
      $('.big-image img').attr({ src: $firstEl.children()[0].src }); 
    }
  });


  $('.prev').on('click', function() {
    let $activeEl = $('.thumbnails .active');
    $activeEl.removeClass('active');

    let $prevEl = $activeEl.prev();
    let $lastEl = $('.thumbnails a:last');

    if ($prevEl.length) {
      $prevEl.addClass('active');
      $('.big-image img').attr({ src: $prevEl.children()[0].src });
    } else {
      $lastEl.addClass('active');
      $('.big-image img').attr({ src: $lastEl.children()[0].src }); 
    }
  });
                                            
});
