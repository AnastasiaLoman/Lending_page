@@include('../../node_modules/slick-carousel/slick/slick.js');
@@include('../../node_modules/magnific-popup/dist/jquery.magnific-popup.js');

const hamburger = document.querySelector('.header__nav__hamburger');
if (hamburger) {
   hamburger.addEventListener('click', function (event) {
      event.target.closest('.header__nav').classList.toggle('header__nav--active');
   });
}

$(document).ready(function () {

   $('.about__slider').slick({
      fade: true,
      infinite: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      waitForAnimate: true,
      pauseOnDots: true
   });

   // // E-mail Send
   // $("form").submit(function () { //Change
   //    var th = $(this);
   //    $.ajax({
   //       type: "POST",
   //       url: "mail.php", //Change
   //       data: th.serialize()
   //    }).done(function () {
   //       alert("Thank you!");
   //       setTimeout(function () {
   //          // Done Functions
   //          th.trigger("reset");
   //       }, 1000);
   //    });
   //    return false;
   // });


});


