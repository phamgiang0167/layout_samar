window.onscroll = function () {
  scrollFunction();
};
let sawCount = false;
function scrollFunction() {
    // header effect
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".header").css("padding", "0px 0");
    $(".header").css("box-shadow", "0 0px 15px rgba(0, 0, 0, 0.1)");
  } else {
    $(".header").css("padding", "10px 0");
    $(".header").css("box-shadow", "");
  }

  //check window scroll to count section
  var hT = $(".count").offset().top,
    hH = $(".count").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
      if(!sawCount){
         sawCount++;
         countEffect()
      } 
  }
}

function countEffect(){
    var classes = document.getElementsByClassName("count__number"); 
    for(let i = 0; i < classes.length; ++i){
        let end = classes[i].innerHTML.substring(0,2)
        let count = 0
        
        setInterval(()=>{
            if(count < end){
                let mi = ""
                if(i != 3){
                    mi = " MI"
                }
                classes[i].innerHTML = count + 1 + mi
                count++
            }else{
                clearInterval()
            }
        }, 5000/end)
    }
}

$(document).ready(function(){
  $('.carousel__content').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});


$(document).on('click', ".button__monthly, .button__yearly", function(){
    if($(event.target).attr('class') == "button__yearly"){
      $('.backgorund-white').css('transform', 'translateX(100%)')
      $(this).css('color','black')
      $('.button__monthly').css('color','white')
    }else{
      $('.backgorund-white').css('transform', 'translateX(0%)')
      $(this).css('color','black')
      $('.button__yearly').css('color','white')
    }
})

$(document).ready(function(){
  $('.blog__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  });
});

$(document).ready(function(){
  $('.brand').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500
  });
});