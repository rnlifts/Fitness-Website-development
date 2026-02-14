const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Personal Training', href: '#services' },
      { name: 'Nutrition Coaching', href: '#services' },
      { name: 'Online Coaching', href: '#services' }
      
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-bold inline-block mb-4">
              SRINIVAS<span className="text-gray-400">FITNESS</span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming lives through expert fitness training and education. 
              Your journey to a stronger, healthier you starts here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300">
                <span>🐦</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get fitness tips and updates delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:border-white focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SRINIVAS FITNESS. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
