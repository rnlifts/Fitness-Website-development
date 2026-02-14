import trainerImage from '../assets/trainer.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F9FAFB]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#EF4444]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF4444]"></span>
              </span>
              <span className="text-sm font-semibold text-[#4B5563]">Fitness Educator | Certified Personal Trainer</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1F2937] leading-tight">
              Transform Your
              <span className="block mt-2">Body & Mind</span>
            </h1>

            {/* Subheading with gradient */}
            <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#EF4444] to-[#3B82F6] bg-clip-text text-transparent">
              Achieve Your Ultimate Potential
            </p>

            {/* Body Text */}
            <p className="text-lg text-[#4B5563] leading-relaxed max-w-xl">
              Want to become a skilled fitness coach, deepen your knowledge as an enthusiast,
               or start your personal transformation with expert support? I’m here to guide your journey step by step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#EF4444]/30 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="#services"
                className="group px-8 py-4 border-2 border-[#3B82F6] hover:bg-[#3B82F6] text-[#3B82F6] hover:text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Programs
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-[#E5E7EB]">
              <div className="group cursor-pointer">
                <div className="text-4xl font-black text-[#1F2937] group-hover:text-[#EF4444] transition-colors duration-300">
                  500+
                </div>
                <div className="text-sm font-medium text-[#4B5563] mt-1">Clients Transformed</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-black text-[#1F2937] group-hover:text-[#3B82F6] transition-colors duration-300">
                  10+
                </div>
                <div className="text-sm font-medium text-[#4B5563] mt-1">Years Experience</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-black text-[#1F2937] group-hover:text-[#EF4444] transition-colors duration-300">
                  98%
                </div>
                <div className="text-sm font-medium text-[#4B5563] mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[650px] flex items-center justify-center animate-fade-in-up animation-delay-200">
            <div className="relative w-full max-w-md">
              
              {/* Decorative elements behind image */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-[#EF4444]/20 to-[#3B82F6]/20 rounded-3xl -z-10"></div>
              
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                <img 
                  src={trainerImage} 
                  alt="Professional Fitness Trainer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge - Top Right */}
              <div className="absolute -top-6 -right-6 bg-[#EF4444] text-white px-6 py-4 rounded-2xl shadow-xl z-10 hover:scale-110 transition-transform duration-300 cursor-pointer animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-xs font-semibold opacity-90">Goal</p>
                    <p className="text-sm font-bold">Focused</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[#3B82F6] px-6 py-4 rounded-2xl shadow-xl z-10 hover:scale-110 transition-transform duration-300 cursor-pointer animate-float animation-delay-1000">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-xs font-semibold text-[#4B5563]">Expert</p>
                    <p className="text-sm font-bold text-[#1F2937]">Guidance</p>
                  </div>
                </div>
              </div>

              {/* Accent Badge - Middle Right */}
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#3B82F6] text-white px-5 py-3 rounded-xl shadow-lg z-10 hover:scale-110 transition-transform duration-300 cursor-pointer animate-float animation-delay-500">
                <div className="text-center">
                  <p className="text-2xl font-black">💪</p>
                  <p className="text-xs font-bold mt-1">Results</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;