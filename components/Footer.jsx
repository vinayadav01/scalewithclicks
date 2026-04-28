import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white">
      
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-14 grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-[22px] font-semibold mb-4 tracking-wide">
            ScaleWithClicks
          </h2>
          <p className="text-[#94A3B8] text-[15px] leading-7 max-w-[260px]">
            Helping businesses generate leads
            <br />
            using Ads, SEO & tracking.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-[#94A3B8] text-[15px]">
            <li>
              <Link href="/services/google-ads" className="hover:text-white transition-colors duration-200">
                Google Ads
              </Link>
            </li>
            <li>
              <Link href="/services/meta-ads" className="hover:text-white transition-colors duration-200">
                Meta Ads
              </Link>
            </li>
            <li>
              <Link href="/services/seo" className="hover:text-white transition-colors duration-200">
                SEO
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Resources</h3>
          <ul className="space-y-3 text-[#94A3B8] text-[15px]">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white transition-colors duration-200">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Legal</h3>
          <ul className="space-y-3 text-[#94A3B8] text-[15px]">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#1E293B]" />

      {/* Bottom */}
      <div className="text-center text-[#94A3B8] text-[14px] py-6">
        © 2026 ScaleWithClicks
      </div>
    </footer>
  );
}
