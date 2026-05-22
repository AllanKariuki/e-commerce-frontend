import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const columns = [
    {
      title: "Shop",
      links: ["Women", "Men", "New Arrivals", "Sale", "Lookbook"],
    },
    {
      title: "Company",
      links: ["About us", "Stores", "Sustainability", "Careers", "Press"],
    },
    {
      title: "Support",
      links: ["Help center", "Delivery", "Returns", "Size guide", "Contact"],
    },
    {
      title: "Connect",
      links: ["Newsletter", "Affiliates", "Wholesale", "Gift cards"],
    },
  ];

  return (
    <footer className="bg-ink-1 text-white mt-20 rounded-t-[2.5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-baseline">
              <span className="font-display text-5xl">BR.</span>
              <span className="font-display text-5xl text-white/40">F</span>
            </div>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Modern wardrobe staples, made to last. Try-on at home, M-Pesa
              checkout, and same-day boda delivery across Nairobi.
            </p>
            <div className="flex items-center gap-3 text-white/70">
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center transition-colors"><FaTwitter size={14} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center transition-colors"><FaInstagram size={14} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center transition-colors"><FaFacebook size={14} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center transition-colors"><FaYoutube size={14} /></a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center group"
                      >
                        {link}
                        <ArrowUpRight
                          size={14}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <span>© {new Date().getFullYear()} BR.F — Made in Nairobi.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
