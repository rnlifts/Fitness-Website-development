import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    { icon: "📧", title: "Email", detail: "coach@fitnessedu.com", link: "mailto:coach@fitnessedu.com" },
    { icon: "📱", title: "Phone", detail: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: "📍", title: "Location", detail: "123 Fitness St, City, ST 12345", link: "#" }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
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

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "phone", "service", "message"].map((field, idx) => (
                <div key={idx}>
                  <label htmlFor={field} className="block text-sm font-semibold text-[#1F2937] mb-2">
                    {field === "service" ? "Service Interested In *" : field.charAt(0).toUpperCase() + field.slice(1)}{field !== "phone" && "*"}
                  </label>

                  {field === "service" ? (
                    <select
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="nutrition">Nutrition Coaching</option>
                      <option value="online">Online Coaching</option>
                      <option value="group">Group Classes</option>
                      <option value="education">Fitness Education</option>
                      <option value="competition">Competition Prep</option>
                    </select>
                  ) : field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your fitness goals..."
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== "phone"}
                      className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors duration-300"
                      placeholder={field === "phone" ? "+1 (555) 123-4567" : field.charAt(0).toUpperCase() + field.slice(1)}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#F9FAFB] p-8 rounded-2xl border-2 border-[#E5E7EB]">
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
                      <div className="text-[#4B5563] group-hover:text-[#3B82F6] transition-colors duration-300">
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
                {["📘","📷","🐦","💼"].map((icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300">
                    <span className="text-xl">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
