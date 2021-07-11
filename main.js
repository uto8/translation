$(function(){
  $(window).scroll(function(){
    $(".animation").each(function(){
      var scroll=$(window).scrollTop();
      var pos=$(this).offset().top;
      var delay=600;
      if(scroll>pos-delay){
        $(this).addClass("view");
      }
    });
  });
})
