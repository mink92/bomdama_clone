//문서를 읽고와서 시작하자
$(function(){
  //주메뉴
  //.menu에 마우스가 올라가면  mouseenter,mouseover,hover
  $(".menu").mouseenter(function(){
  //.depth 위에서 스르르 내려오고
  $(this).find(".depth").stop().slideDown();
  //nav에 클래스 active추가해라.  addClass
  $("nav").addClass("active");
  });
  //떠나면 mouseleave,mouseout,
  //hover(function(){마우스올라왔을때 할일},function(){마우스떠났을때할일})
  $(".menu").mouseleave(function(){
    //.depth 위에서 스르르 올라가고
    $(this).find(".depth").stop().slideUp();
    //nav에 클래스 active삭제해라.  removeClass
    $("nav").removeClass("active");
    });
  });//ready