const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="w-full mx-auto max-w-7xl p-5 mt-10">
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-10">

    <!-- Brand -->
    <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
      <h2 class="md:text-4xl text-3xl text-zinc-900 font-semibold">Nightgale Wealth</h2>
      <p class="md:mt-5 mt-3 text-zinc-700">
        Independent Registered Investment Adviser providing disciplined
        <strong class="text-zinc-900">portfolio management</strong>, tailored
        <strong class="text-zinc-900">financial &amp; retirement planning</strong>, and clear
        <strong class="text-zinc-900">insurance guidance</strong>.
      </p>

      <div class="mt-7 flex items-center gap-3 flex-wrap">
        <a href="/contact.html"
           class="tracking-wider py-2 px-7 text-center rounded-sm border-2 border-[#D4AF37] bg-[#D4AF37] text-zinc-900 font-medium hover:opacity-85 transition-all duration-300">
          Schedule a Call
        </a>
        <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener"
           class="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 transition">
          <i class="fa-solid fa-shield-check text-[#D4AF37]"></i> Verify on FINRA BrokerCheck
        </a>
      </div>
    </div>

    <!-- Quick Links -->
    <div data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-2xl text-zinc-900 font-semibold">Quick Links</h3>
      <ul class="mt-5 space-y-3 text-zinc-700 font-medium">
        <li><a href="/index.html#home" class="hover:text-[#8C6A1C]">Home</a></li>
        <li><a href="/services.html" class="hover:text-[#8C6A1C]">Services</a></li>
        <li><a href="/about.html" class="hover:text-[#8C6A1C]">About</a></li>
        <li><a href="/disclosures.html" class="hover:text-[#8C6A1C]">Disclosures</a></li>
        <li><a href="/index.html#faq" class="hover:text-[#8C6A1C]">FAQ</a></li>
      </ul>
    </div>

    <!-- Services -->
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-2xl text-zinc-900 font-semibold">Services</h3>
      <ul class="mt-5 space-y-3 text-zinc-700 font-medium">
        <li><a href="/services.html#portfolio" class="hover:text-[#8C6A1C]">Portfolio Management</a></li>
        <li><a href="/services.html#retirement" class="hover:text-[#8C6A1C]">Financial &amp; Retirement Planning</a></li>
        <li><a href="/services.html#insurance" class="hover:text-[#8C6A1C]">Insurance Solutions</a></li>
        <li><a href="/disclosures.html#fees" class="hover:text-[#8C6A1C]">Transparent Fees</a></li>
      </ul>
    </div>

    <!-- Resources -->
    <div data-aos="fade-up" data-aos-delay="300">
      <h3 class="text-2xl text-zinc-900 font-semibold">Resources</h3>
      <ul class="mt-5 space-y-3 text-zinc-700 font-medium">
        <li><a href="/docs/Form_CRS.pdf" class="hover:text-[#8C6A1C]">Form CRS (PDF)</a></li>
        <li><a href="/docs/Privacy_Policy.pdf" class="hover:text-[#8C6A1C]">Privacy Policy (PDF)</a></li>
        <li><a href="/docs/Business_Continuity_Plan.pdf" class="hover:text-[#8C6A1C]">Business Continuity Plan (PDF)</a></li>
        <li><a href="/ccpa-do-not-sell" class="hover:text-[#8C6A1C]">Do Not Sell My Personal Information (CCPA)</a></li>
      </ul>
    </div>

  </div>

  <!-- Legal / bottom bar -->
  <div class="mt-8 border-t border-zinc-200 pt-4">
    <p class="text-zinc-600 text-sm">
      Securities are custodied at <strong>Charles Schwab &amp; Co., Inc.</strong> Member FINRA/SIPC. Nightgale Wealth Management LLC is independent and not affiliated with or supervised by Schwab.
      Advisory services offered only where properly registered or exempt. Check the background of your financial professional on
      <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener" class="text-[#8C6A1C] hover:opacity-80">FINRA BrokerCheck</a>.
    </p>

    <p class="text-center text-zinc-600 mt-4">
      Copyright © <span id="copyright"></span> Nightgale Wealth Management LLC. All rights reserved.
    </p>
  </div>
</footer>
`

const year = new Date().getFullYear()
document.getElementById('copyright').textContent = year