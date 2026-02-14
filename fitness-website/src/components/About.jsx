import aboutImg from '../assets/about.jpg';

const About = () => {

  
  const features = [
    {
      icon: "🎓",
      title: "Certified Expert",
      description: "Internationally certified personal trainer with advanced fitness education credentials"
    },
    {
      icon: "🎯",
      title: "Personalized Plans",
      description: "Custom training programs designed specifically for your goals and lifestyle"
    },
    {
      icon: "💡",
      title: "Science-Based",
      description: "Evidence-based approach combining fitness science with practical application"
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Continuous guidance, motivation, and accountability throughout your journey"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF4444]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative background element */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-[#EF4444]/10 to-[#3B82F6]/10 rounded-3xl -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
  <img
  src={aboutImg}
  alt="About me"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
/>

  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  {/* Optional caption overlay */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
    <p className="text-[#4B5563] font-semibold text-lg bg-white/70 px-4 py-1 rounded">
      Dedicated to Your Success
    </p>
  </div>
</div>

            
            {/* Accent Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#EF4444] text-white px-6 py-4 rounded-2xl shadow-xl z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-center">
                <p className="text-2xl font-black">10+</p>
                <p className="text-xs font-bold">Years</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-4">About Me</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#1F2937] mb-6 leading-tight">
                Your Partner in Fitness Excellence
              </h3>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                As a fitness educator and certified personal trainer, I focus on helping individuals and aspiring
                 coaches build real strength, knowledge, and confidence through structured training systems. 
              </p>
              <p className="text-lg text-[#4B5563] leading-relaxed">
               My approach
                  blends practical coaching experience with science-based methods so you can achieve meaningful results
                   and sustain progress long term.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-[#F9FAFB] hover:bg-white p-6 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#3B82F6] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#EF4444] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#EF4444]/30"
              >
                Explore My Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
