  //  banner part
  
$('#banner-part').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    // autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });









// venobox part
  
  $('.venobox').venobox(); 




// testimonial part

  $('.testi-slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// counterup js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// sponsor slider
       $('.sponsor-slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

// colourfultab
      
     
          
          $("#colorful").colorfulTab();    
          
  
// fixed/sticky menu

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  
  if(scrollamount > 700){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }

    



  if(scrollamount > 500){
    $(".btop").fadeIn();
  }else{
    $(".btop").fadeOut();
  }
})


$(".btop").click(function(){
$("html,body").animate({
  scrollTop:0
},3000)
})


   

       
   