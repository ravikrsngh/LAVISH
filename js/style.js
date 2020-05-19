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

  $(".left-click").click(function(){
    var leftchildren , rightchildren , text , name;
    leftchildren = document.querySelector(".left-option").children;
    rightchildren = document.querySelector(".right-option").children;
    leftname = document.querySelector("." + leftchildren[0].className);
    leftarrow = document.querySelector("." + leftchildren[1].className) ;
    rightname = document.querySelector("." + rightchildren[1].className);
    rightarrow = document.querySelector("." + rightchildren[0].className);
    if (leftname.innerHTML == "MAN") {
      $(".content").css({"transform" : "translateX(0)"});
      leftname.innerHTML = "";
      leftarrow.innerHTML = "";
      rightname.innerHTML = "WOMEN";
    }
    else if (leftname.innerHTML == "WOMEN") {
      $(".content").css({"transform" : "translateX(-100%)"});
      leftname.innerHTML = "MAN";
      rightname.innerHTML = "KIDS";
      rightarrow.innerHTML = "<span class=\"material-icons\">chevron_right</span>";
    }

  });

  $(".right-click").click(function(){
    var leftchildren , rightchildren , text , name;
    leftchildren = document.querySelector(".left-option").children;
    rightchildren = document.querySelector(".right-option").children;
    leftname = document.querySelector("." + leftchildren[0].className);
    leftarrow = document.querySelector("." + leftchildren[1].className) ;
    rightname = document.querySelector("." + rightchildren[1].className);
    rightarrow = document.querySelector("." + rightchildren[0].className);
    if (rightname.innerHTML == "KIDS") {
      $(".content").css({"transform" : "translateX(-200%)"});
      leftname.innerHTML = "WOMEN";
      rightname.innerHTML = "";
      rightarrow.innerHTML="";
    }
    else if (rightname.innerHTML == "WOMEN") {
      $(".content").css({"transform" : "translateX(-100%)"});
      leftname.innerHTML = "MAN";
      leftarrow.innerHTML = "<span class=\"material-icons\">chevron_left</span>";
      rightname.innerHTML = "KIDS";
    }

  });

  $(".side-menubar li").click(function(){
    location.href = "men.html";
  })
  $(".home").click(function(){
    location.href = "home.html"
  })


  $(".text-content a").click(function(){
    location.href = "men.html";
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
  $(".mobile-nav li").hover(function(){
    $(this).css({"cursor" : "pointer"});
  })

  $(".kids-section").click(function(){
    $(".content").css({"transform" : "translateX(-200%)"});
    $(this).addClass("active");
    $(".man-section").removeClass("active");
    $(".women-section").removeClass("active");
  })
  $(".man-section").click(function(){
    $(".content").css({"transform" : "translateX(0%)"});
    $(this).addClass("active");
    $(".kids-section").removeClass("active");
    $(".women-section").removeClass("active");
  })
  $(".women-section").click(function(){
    $(".content").css({"transform" : "translateX(-100%)"});
    $(this).addClass("active");
    $(".man-section").removeClass("active");
    $(".kids-section").removeClass("active");
  })

});

/**
  function myFunction() {
    var height = document.querySelector(".logo").offsetHeight;
    var y = document.querySelector(".women").scrollTop;

    console.log(y/height);
    if(y >= height * 0 && flag == 0)
    {
      flag = 1;
      console.log("hey");
      $(".women").animate({
        scrollTop: height+1
      } , 1000);
    }
  }
*/
