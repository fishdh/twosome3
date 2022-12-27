$(document).ready(function(){

  //topmenu 마우스 올렸을때
  $(".topMenu>ul").on("mouseenter click",function(){
    $(this).find('ul').stop().slideDown();
    $('#menuBg').stop().slideDown();
  });

  //상단메뉴에 마우스를 치울때
  $(".topMenu>ul").on("mouseleave",function(){
    $(this).find('ul').stop().slideUp();
    $('#menuBg').stop().slideUp();
  });

  //페이드 아웃:2.8초마다 함수 호출
  setInterval(fading,2800);
  let i = 2;
  function fading(){
    if($(".fadeout a").eq(1).css("display") == "none"){
      $(".fadeout a").fadeIn(800);
      i = 2;
    } else{
      $(".fadeout a").eq(i).fadeOut(1000);
      i--;
    }
  }//fading()끝
});//////////all end
