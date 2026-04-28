import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020b2d] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">ScaleWithClicks</h2>
          <p className="text-gray-300 leading-7">
            Helping businesses generate leads
            <br />
            using Ads, SEO & tracking.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/services/google-ads">Google Ads</Link>
            </li>
            <li>
              <Link href="/services/meta-ads">Meta Ads</Link>
            </li>
            <li>
              <Link href="/services/seo">SEO</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/google-ads">Google Ads</Link>
            </li>
            <li>
              <Link href="/seo">SEO</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        © 2026 ScaleWithClicks
      </div>
    </footer>
  );
}
