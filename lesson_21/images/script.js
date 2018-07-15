$(function(){
	
	
  $('.thumbnails a').click(function(){                                
    var images = $(this).find('img');   //
    var imgSrc = images.attr('src');
 
    $(".big-image img").attr({ src: imgSrc });                         
    $(this).siblings('a').removeClass('active');                       
    images.parent().addClass('active');                                
    return false;
  });
 
  $('.next').click(function(){                                         
    var count = $('.thumbnails a').length;                             
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      
    var activeImg = $('.thumbnails .active');                          
    var nextSrc;
 
    if (count != n){                                                   
      nextSrc = activeImg.next().find('img').attr('src');              
      $('.thumbnails .active').removeClass('active');                  
      activeImg.next().addClass('active');                             
    }else{                                                             
      nextSrc = $('.thumbnails a').first().find('img').attr('src');    
      $('.thumbnails .active').removeClass('active');                  
      $('.thumbnails a').first().addClass('active');                   
    }
    $('.big-image img').attr({ src: nextSrc });                        
    return false;
  });
 
 
  $('.prev').click(function(){                                         
    var count = $('.thumbnails a').length;                             
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      
    var activeImg = $('.thumbnails .active');                          
    var prevSrc;
 
    if (n != 1){                                                       
      prevSrc = activeImg.prev().find('img').attr('src');                    
      $('.thumbnails .active').removeClass('active');                  
      activeImg.prev().addClass('active');                             
    }else{                                                             
      prevSrc = $('.thumbnails a:last').find('img').attr('src');       
      $('.thumbnails .active').removeClass('active');                  
      $('.thumbnails a:last').addClass('active');                      
    }
    $('.big-image img').attr({ src: prevSrc });                        
    return false;
  });
})