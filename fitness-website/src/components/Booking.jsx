import { useState } from "react";
import aboutImg from '../assets/about.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Booking = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.3);
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="booking"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#EF4444] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-4">
            Book a Session
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#1F2937] mb-6">
            Schedule Your Free Consultation
          </h3>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Ready to transform your fitness journey? Book a free consultation 
            and let's create a personalized plan just for you.
          </p>
        </div>

        {/* Two Column Layout - Always Visible */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-8 fade-in-up ${contentVisible ? 'visible' : ''}`}
        >
          
          {/* LEFT SIDE - Image & Info Cards (Always Visible) */}
          <div className="space-y-6">
            
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#EF4444]/20 to-[#3B82F6]/20 rounded-3xl -z-10"></div>
              
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                {/* Replace with your image */}
                <img 
                  src={aboutImg}
                  alt="Personal Training Session" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* OR use placeholder (uncomment if no image) */}
                {/* <div className="w-full h-full bg-gradient-to-br from-[#F9FAFB] to-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💪</div>
                    <p className="text-[#4B5563] font-semibold text-lg">Transform Your Life</p>
                  </div>
                </div> */}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#EF4444] text-white px-6 py-4 rounded-2xl shadow-xl z-10 hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-90">Free</p>
                  <p className="text-2xl font-black">30 Min</p>
                  <p className="text-xs font-bold">Consultation</p>
                </div>
              </div>
            </div>

            {/* Info Card - What to Expect */}
            <div className="bg-gradient-to-br from-[#1F2937] to-[#374151] text-white p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">What to Expect</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Personalized fitness assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Goal setting & strategy planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Custom training recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Q&A about programs & pricing</span>
                </li>
              </ul>
            </div>

            {/* Trust Badge */}
            <div className="bg-[#F9FAFB] p-6 rounded-2xl border-2 border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🏆</div>
                <div>
                  <p className="font-bold text-[#1F2937] mb-1">No Obligation Required</p>
                  <p className="text-sm text-[#4B5563]">
                    100% free consultation with zero commitment. Let's talk about your goals!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Button OR Form */}
          <div className="flex items-start justify-center pt-0">
            
            {!showForm ? (
              /* BEFORE CLICK - Show Big Button */
              <div className="text-center space-y-6 max-w-md">
                <div className="bg-white p-12 rounded-3xl border-2 border-[#E5E7EB] shadow-xl">
                  <div className="text-6xl mb-6">📅</div>
                  <h4 className="text-2xl font-black text-[#1F2937] mb-4">
                    Ready to Get Started?
                  </h4>
                  <p className="text-[#4B5563] mb-8">
                    Click below to open the booking form and schedule your free consultation.
                  </p>
                  
                  <button
                    onClick={() => setShowForm(true)}
                    className="group w-full px-8 py-5 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#EF4444]/40 flex items-center justify-center gap-3"
                  >
                    Schedule Now
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

                  <p className="text-sm text-[#4B5563] mt-4">
                    ⚡ Takes less than 2 minutes
                  </p>
                </div>
              </div>
            ) : (
              /* AFTER CLICK - Show Form */
              <div className="w-full animate-slide-in">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#E5E7EB] relative">
                  
                  {/* Close Button Inside Form */}
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Google Form */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf0bcl5drnAdid44zc-dqSJgXa3AeTdRisOPuM9Eo15FlExzA/viewform?embedded=true"
                    width="100%"
                    height="1000"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="w-full"
                    title="Booking Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Booking;