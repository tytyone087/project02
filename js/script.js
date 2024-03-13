$('#gnb > ul > li').on('mouseenter', function() {
  if($(window).width() > 1436){
      $('#header').addClass('open');
      
  }
});
$('#header').on('mouseleave', function() {
  if($(window).width() > 1436){
      $('#header').removeClass('open');
     
  }
});


$('#header a.menu').on('click', function() {
  $(this).toggleClass('close');
  $('#gnb').toggleClass('open');
  $('#header').removeClass('open');
});


$('#gnb > ul > li').on('click', function(){
  if($(window).width() < 1436){
    $('#gnb > ul > li > ul').slideUp(); 
    $('#gnb > ul > li>a>i').attr({'class': 'plus mobile'});
    $(this).find('ul').slideDown(); 
    $(this).find('i').attr({'class': 'minus mobile'});
}
   


});


// 검색창
$('#header .searchBtn').on('click', function() {
  $('.header_search_layer').addClass('on');
});
$('#header .search_closeBtn').on('click', function() {
  $('.header_search_layer').removeClass('on');

});

// 팝업창
$('#section05 .popup-btn').on('click', function(){
  document.querySelector('.common_popup').style.display = 'block';
  document.querySelector('.popup_bg').style.display = 'block';
})
$('.modal_close').on('click', function(){
  document.querySelector('.common_popup').style.display = 'none';
  document.querySelector('.popup_bg').style.display = 'none';
})

// 스와이퍼

var swiper1 = new Swiper(".section01_swiper_Frame", {
  pagination: {
    el: ".swiper_pagination",
    type: "fraction",
  },
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    loop:true,
  },
  navigation: {
    nextEl: ".swiper_nextBtn",
    prevEl: ".swiper_prevBtn",
  },
 
});
var sp=0;
$('#section01 .swiper_pauseBtn').click(function(){
  if(sp==0){
      $(this).attr({class:"swiper_playBtn"});
      swiper1.autoplay.stop();
      sp=1;
  }else{
      $(this).attr({class:"swiper_pauseBtn"});
      swiper1.autoplay.start();
      sp=0 ;
  }
});


var swiper2 = new Swiper(".book_wrap", {
  slidesPerView: 1,
  spaceBetween: 30,
 
  breakpoints:{
      768:{
          slidesPerView: 2,
      },
      1400:{
          slidesPerView: 3,
      }
  }
});



var sp=0;
$('#section04 .swiper_pauseBtn').click(function(){
  if(sp==0){
      $(this).attr({class:"swiper_playBtn"});
      swiper3.autoplay.stop();
      sp=1;
  }else{
      $(this).attr({class:"swiper_pauseBtn"});
      swiper3.autoplay.start();
      sp=0 ;
  }
});


var swiper4 = new Swiper(".tab_con1", {
  pagination: {
      el: ".tab_con1 .swiper_pagination",
      type: "fraction",
    },
    slidesPerView: 1,
   
    centeredSlides: true,
   
    navigation: {
      nextEl: ".tab_con1 .swiper_nextBtn",
      prevEl: ".tab_con1 .swiper_prevBtn",
    },
    watchOverflow : true
  });

  var swiper5 = new Swiper(".tab_con2", {
      pagination: {
          el: ".tab_con2 .swiper_pagination",
          type: "fraction",
        },
        centeredSlides: true,
        navigation: {
          nextEl: ".tab_con2 .swiper_nextBtn",
          prevEl: ".tab_con2 .swiper_prevBtn",
        },
        observer: true,
          observeParents: true,
  });
  var swiper6 = new Swiper(".tab_con3", {
      pagination: {
          el: ".tab_con3 .swiper_pagination",
          type: "fraction",
        },
        centeredSlides: true,
        navigation: {
          nextEl: ".tab_con3 .swiper_nextBtn",
          prevEl: ".tab_con3 .swiper_prevBtn",
        },
        observer: true,
        observeParents: true,
  });
  var swiper7 = new Swiper(".tab_con4", {
      pagination: {
          el: ".tab_con4 .swiper_pagination",
          type: "fraction",
        },
        centeredSlides: true,
        navigation: {
          nextEl: ".tab_con4 .swiper_nextBtn",
          prevEl: ".tab_con4 .swiper_prevBtn",
        },
        observer: true,
          observeParents: true,
  });

  var bullet = ['강좌', '답사', '공모', '논문'];
  var swiper3 = new Swiper(".tabslide", {
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination:true,
        pagination: {
          el: ".tap_pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
        },
        observer: true,
        observeParents: true,
  } });

var sp=0;
$('#section04 .swiper_pauseBtn').click(function(){
    if(sp==0){
        $(this).attr({class:"swiper_playBtn"});
        swiper3.autoplay.stop();
        sp=1;
    }else{
        $(this).attr({class:"swiper_pauseBtn"});
        swiper3.autoplay.start();
        sp=0 ;
    }
});


var swiper4 = new Swiper(".tab_con1", {
  pagination: {
      el: ".tab_con1 .swiper_pagination",
      type: "fraction",
    },
    centeredSlides: true,
    navigation: {
      nextEl: ".tab_con1 .swiper_nextBtn",
      prevEl: ".tab_con1 .swiper_prevBtn",
    },
    watchOverflow : true
  });
  var swiper5 = new Swiper(".tab_con2", {
      pagination: {
          el: ".tab_con2 .swiper_pagination",
          type: "fraction",
        },
        centeredSlides: true,
        navigation: {
          nextEl: ".tab_con2 .swiper_nextBtn",
          prevEl: ".tab_con2 .swiper_prevBtn",
        },
        watchOverflow : true
  });
  var swiper6 = new Swiper(".tab_con3", {
      pagination: {
          el: ".tab_con3 .swiper_pagination",
          type: "fraction",
        },
        centeredSlides: true,
        navigation: {
          nextEl: ".tab_con3 .swiper_nextBtn",
          prevEl: ".tab_con3 .swiper_prevBtn",
        },
        watchOverflow : true
  });
  var swiper7 = new Swiper(".tab_con4", {
      pagination: {
          el: ".tab_con4 .swiper_pagination",
          type: "fraction",
        },
        centeredSlides: true,
        navigation: {
          nextEl: ".tab_con4 .swiper_nextBtn",
          prevEl: ".tab_con4 .swiper_prevBtn",
        },
        watchOverflow : true
  });
  var swiper8 = new Swiper(".snsWrap_swiper", {
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: "row",
    },
    slidesPerGroup: 4,
    loop: true,
    spaceBetween: 2,
    navigation: {
      nextEl: ".swiper_next",
      prevEl: ".swiper_prev",
    },
    pagination: {
      el: ".swiper_pagination",
      clickable: true,
    },
    breakpoints:{
      960:{
          slidesPerView: 4,
          grid: {
            rows: 2,
            fill: "row",
          }
      },
      640:{
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        }
      }
  }
  });


  $('#footer .btn_select').on('click', function() {
    $(this).toggleClass('on');
  })

  // top 스크롤 이동
  $(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $("#top").click(function() {
        $('html, body').animate({scrollTop : 0 }, "slow");
        return false;
    });


});