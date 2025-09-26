const lenis = new Lenis({
    autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
  class="bottomToTop fadeIn w-12 h-12 fixed bottom-5 right-5 z-40 hidden
         cursor-pointer rounded-full flex items-center justify-center
         bg-[#D4AF37] text-zinc-900 hover:bg-[#C9A227]
         shadow-md ring-1 ring-[#D4AF37]/40 transition-all duration-500">
  <i class="fa-solid fa-angle-up"></i>
</div>

`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

AOS.init({
    once: true,
    duration: 1000
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});