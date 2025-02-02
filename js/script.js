$(document).ready(function () {
  $(".profile-carousel").slick({
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 768, // Tablets and smaller devices
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  });
});
