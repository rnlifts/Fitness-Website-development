import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [formRef, formVisible] = useScrollAnimation(0.3);
  const [infoRef, infoVisible] = useScrollAnimation(0.3);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const API_URL = 'http://localhost:3001/api/send-email';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      detail: "coach@fitnessedu.com",
      link: "mailto:coach@fitnessedu.com"
    },
    {
      icon: "📱",
      title: "Phone",
      detail: "+977 9801234567",
      link: "tel:+9779801234567"
    },
    {
      icon: "📍",
      title: "Location",
      detail: "Kathmandu, Nepal",
      link: "#"
    }
  ];
  const socialLinks = [
  {
    icon: "📷",
    name: "Instagram",
    link: "https://www.instagram.com/srinivasthandlay_fitness/"
  },
  {
    icon: "💼",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/srinivas-thandlay-a07975157"
  },
  {
    icon: "💬",
    name: "WhatsApp",
    link: "https://wa.me/9779864152770"
  }
];


  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF4444] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-4">Contact</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#1F2937] mb-6">
            Let's Start Your Journey
          </h3>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Ready to transform your life? Get in touch today and let's discuss 
            how we can work together to achieve your fitness goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          <div 
            ref={formRef}
            className={`fade-in-left ${formVisible ? 'visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl animate-slide-down">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold">Message Sent Successfully! 🎉</p>
                      <p className="text-sm">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 text-red-800 px-6 py-4 rounded-xl animate-slide-down">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold">Oops! Something went wrong.</p>
                      <p className="text-sm">Please try again or email me directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300 text-[#1F2937] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300 text-[#1F2937] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300 text-[#1F2937] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300 text-[#1F2937] disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select a service</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Nutrition Coaching">Nutrition Coaching</option>
                  <option value="Online Coaching">Online Coaching</option>
                  <option value="Group Classes">Group Classes</option>
                  <option value="Fitness Education">Fitness Education</option>
                  <option value="Competition Prep">Competition Prep</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1F2937] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300 resize-none text-[#1F2937] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tell me about your fitness goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#EF4444]/30 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          <div 
            ref={infoRef}
            className={`space-y-8 fade-in-right ${infoVisible ? 'visible' : ''}`}
          >
            <div className="bg-white p-8 rounded-2xl border-2 border-[#E5E7EB]">
              <h4 className="text-2xl font-bold text-[#1F2937] mb-6">Get In Touch</h4>
              <p className="text-[#4B5563] leading-relaxed mb-8">
                Have questions? Want to schedule a consultation? I'm here to help 
                you every step of the way. Reach out through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1F2937] mb-1">{info.title}</div>
                      <div className="text-[#4B5563] group-hover:text-[#EF4444] transition-colors duration-300">
                        {info.detail}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          {/* Social Links */}
<div className="bg-[#3B82F6] text-white p-8 rounded-2xl">
  <h4 className="text-xl font-bold mb-6">Follow My Journey</h4>

  <div className="flex gap-4">
    {socialLinks.map((social, idx) => (
      <a
        key={idx}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
      >
        <span className="text-xl">{social.icon}</span>
      </a>
    ))}
  </div>
</div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
