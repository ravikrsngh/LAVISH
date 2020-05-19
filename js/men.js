$(function(){

  $("#menu-bar-icon").hover(function(){
    $(".side-menubar").removeClass("animated slideOutLeft fast");
    $(".side-menubar").addClass("animated slideInLeft fast");
    $(".side-menubar").css({"display" : "block"});
  });
  $(".side-menubar").mouseleave(function(){
    $(".side-menubar").removeClass("animated slideInLeft fast");
    $(".side-menubar").addClass("animated slideOutLeft fast");
  });

  $(".women-menu").click(function(){
    $(".women-list").toggleClass("view-list");
  });
  $(".men-menu").click(function(){
    $(".men-list").toggleClass("view-list");
  });
  $(".kids-menu").click(function(){
    $(".kids-list").toggleClass("view-list");
  });
  $(".sb-menu").click(function(){
    $(".sb-list").toggleClass("view-list");
  });

  $(".side-menubar li").click(function(){
    location.href = "men.html";
  })
  $(".home").click(function(){
    location.href = "home.html"
  })
  $(".i1 img").click(function(){
    location.href = "product.html";
  })
  $(".home").hover(function(){
    $(this).css({"cursor" : "pointer"});
  })
  $(".side-menubar li").hover(function(){
    $(this).css({"cursor" : "pointer"});
  })
  $(".side-menubar h1").hover(function(){
    $(this).css({"cursor" : "pointer"});
  })
  $(".i1 img").hover(function(){
    $(this).css({"cursor" : "pointer"});
  })


});
