const dynamic_navbar = document.getElementById("navbar");

dynamic_navbar.innerHTML = `
  <nav class="fixed navbar md:top-6 top-4 px-4 left-0 w-full z-40 transition-all duration-300">
    <div data-aos="fade-down"
      class="max-w-7xl mx-auto glass rounded-2xl flex justify-between items-center w-full md:p-5 p-3 md:h-20 h-20">

      <!-- Logo -->
      <a href="/index.html" class="flex items-center justify-center lg:justify-start" aria-label="Nightgale Wealth Home">
        <img src="/docs/assets/images/logo.png" class="md:h-16 h-12" alt="Nightgale Wealth logo">
      </a>

      <!-- Desktop Nav -->
      <div class="md:flex hidden items-center gap-10">
        <div class="md:flex items-center gap-10 hidden">
          <ul class="md:flex hidden items-center text-zinc-800 font-medium uppercase gap-10">
            <li><a href="/index.html" class="hover:text-[#C9A227] transition-all duration-300">Home</a></li>
            <li><a href="/about.html" class="hover:text-[#C9A227] transition-all duration-300">About </a></li>
            <li><a href="/services.html" class="hover:text-[#C9A227] transition-all duration-300">Services</a></li>
            <li><a href="/disclosures.html" class="hover:text-[#C9A227] transition-all duration-300">Disclosures</a></li>
          </ul>
        </div>
      </div>

      <!-- Desktop CTA -->
      <div class="md:flex items-center justify-center gap-4 hidden">
        <a href="/contact.html"
          class="md:block hidden transition-all duration-300 hover:opacity-85 px-10 py-2.5 uppercase rounded-lg text-zinc-900 border-2 border-[#D4AF37] bg-[#D4AF37]">
          Schedule a Call
        </a>
      </div>

      <!-- Mobile menu button -->
      <i class="fa-solid mobileMenuBtn text-zinc-800 fa-bars md:!hidden text-2xl cursor-pointer mr-2" aria-label="Open menu"></i>
    </div>
  </nav>

  <!-- Mobile Drawer -->
  <div id="mobileMenu"
    class="fixed left-0 top-0 bg-white max-w-none md:max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">

    <div class="flex items-end justify-end p-5">
      <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-700 text-xl cursor-pointer" aria-label="Close menu"></i>
    </div>

    <div class="p-6">
      <ul class="flex relative z-50 text-zinc-800 font-medium uppercase flex-col gap-7">
        <li><a href="/index.html" class="mobileMenuCloseBtn hover:text-[#C9A227] transition-all duration-300">Home</a></li>
        <li><a href="/about.html" class="mobileMenuCloseBtn hover:text-[#C9A227] transition-all duration-300">About</a></li>
        <li><a href="/services.html" class="mobileMenuCloseBtn hover:text-[#C9A227] transition-all duration-300">Services</a></li>
        <li><a href="/disclosures.html" class="mobileMenuCloseBtn hover:text-[#C9A227] transition-all duration-300">Disclosures</a></li>
      </ul>

      <a href="/contact.html"
        class="block text-nowrap transition-all duration-300 hover:opacity-85 px-6 py-3 uppercase rounded-lg text-zinc-900 border-2 border-[#D4AF37] bg-[#D4AF37] text-center mt-3 mobileMenuCloseBtn">
        Schedule a Call
      </a>
    </div>
  </div>
`;

// JS behavior (unchanged)
const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn");
const navbar = document.querySelector(".navbar");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos <= 300) {
    // Always show navbar within first 300px
    navbar.style.transform = `translateY(0%)`;
  } else {
    // Apply hide/show logic after 300px
    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      navbar.style.transform = `translateY(-9rem)`;
    } else {
      // Scrolling up
      navbar.style.transform = `translateY(0%)`;
    }
  }

  prevScrollPos = currentScrollPos;
});

mobileMenuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileMenu.style.maxWidth = "100vw"; // override the cap
    mobileMenu.style.width = "100vw";
  });
});

mobileMenuCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileMenu.style.width = "0";
    mobileMenu.style.maxWidth = ""; // reset
  });
});
