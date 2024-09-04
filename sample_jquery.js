$(function() {
    var secTopArr = new Array();
    var moveFlug = false;
    var allHeight = $('body').outerHeight(true);
    var bgImg = new Array('#000','#eee', '#555', '#ccc', '#999');
    ////各sectionの位置
    $('div.section').each(function (i) {
        secTopArr[i] = $(this).offset().top;
    });
    var current = -1;
    //現在位置がセクションの位置より大きい場合は背景切り替え
    $(window).scroll(function () {
        for (var i = secTopArr.length-1; i>=0; i--) {
            if ($(window).scrollTop() > secTopArr[i] - 100) {
                chengeBG(i);
                break;
            }
        }
    });
    //背景変更
    function chengeBG(secNum) {
            if (secNum != current && moveFlug == false) {
                $('#bg'+current)
                    .fadeOut(500, function(){
                        $(this).remove();
                    });
                $('#wrap').append('<div id="bg'+secNum+'"></div>');
                $('#bg'+secNum)
                    .height(allHeight)
                    .css('display','none')
                    .fadeIn(500);
                current = secNum;
            }
    }
    $('#nav li').click(function(){
        moveFlug = true;
        var getNum = $(this).index();
        var secTop = $('.section').eq(getNum).offset().top;
        $('html,body').animate({ scrollTop: secTop }, 'slow', function() {
            moveFlug = false;
            chengeBG(getNum);
        });
        return false;
     });
});


  
function sliderSet() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
            slider = $('.slider').bxSlider({
            touchEnabled:false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
      mode: 'vertical',//縦スライド指定
      controls: false,//前後のコントロールを表示させない。
      auto: 'true',//自動的にスライド
      pager: false//ページ送り無効化
    });
            sliderFlag = true;
        } else if (windowWidth < breakpoint && sliderFlag) {
            slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
            sliderFlag = false;
        }
    }

$(window).on('load resize', function() {
        sliderSet();
});

//◆タブレット以下も1行で表示させたい場合は下記のみの記述でOK
//$('.slider').bxSlider({
//touchEnabled:false,
//mode: 'vertical',
//controls: false,
//auto: 'true',
//pager: false
//});

$(window).scroll(function (){
	$('.fadein').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass('scrollin');
			}
	});
});

$(document).ready(function () {
    let fadeContainer = $(".fade-container");
  
    $(window).scroll(function () {
      let scrollPosition = $(window).scrollTop();
      let windowHeight = $(window).height();
  
      // Adjust this value for when you want the fade effect to start
      let triggerPosition = windowHeight * 0.01;
  
      if (scrollPosition > triggerPosition && !fadeContainer.hasClass("fade-in")) {
        fadeContainer.addClass("fade-in");
      } else if (scrollPosition <= triggerPosition && fadeContainer.hasClass("fade-in")) {
        fadeContainer.removeClass("fade-in");
      }
    });
  });


$(function(){
    const content = ".content-wrap--bg";
    const showClass = "show"; 

    $(window).on("load scroll resize", function(){
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
      const offset = $(content).offset().top;
      const setTiming = windowHeight * 0.5;

      if (scroll + windowHeight >= offset + setTiming){
        $(content).addClass(showClass);
      } else {
        $(content).removeClass(showClass);
      }
    });
});
$(function(){
  $(window).scroll(function (){
    $('.js-fade').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scroll');
      }
    });
  });
});
function initMap() {
          var map = new google.maps.Map(document.getElementById('sample'), {
 
   

            center: {lat: 34.70194, lng: 135.510025},

   
            zoom: 18,

            "elementType": "geometry",
  
            "stylers": [
   
  
  // stylesの直後にペースト
  
   
  
    ]
  
   
  
     });
  
   

  }

  $(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("#background-video").addClass("grayscale");
        } else {
            $("#background-video").removeClass("grayscale");
        }
    });
});

jQuery(function($) {
  $(window).on('load scroll', function (){
  
    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  });
  })
  
