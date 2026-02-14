const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Weight Loss Journey",
      image: "👩",
      text: "Lost 40 pounds and gained so much confidence! The personalized approach made all the difference. I finally found a sustainable way to stay fit.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Strength Training",
      image: "👨",
      text: "Went from barely lifting to hitting PRs I never thought possible. The expertise and motivation kept me going even on tough days.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marathon Prep",
      image: "👩",
      text: "Completed my first marathon thanks to the structured training plan and constant support. The injury prevention tips were invaluable!",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Body Transformation",
      image: "👨",
      text: "At 45, I'm in the best shape of my life. The combination of training and nutrition coaching completely changed my lifestyle.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Online Coaching",
      image: "👩",
      text: "The online program fit perfectly into my busy schedule. Got amazing results while working full-time and raising two kids!",
      rating: 5
    },
    {
      name: "David Park",
      role: "Athletic Performance",
      image: "👨",
      text: "Improved my athletic performance dramatically. The science-based approach and attention to detail set this apart from other trainers.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-4">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#1F2937] mb-6">
            Success Stories That Inspire
          </h3>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Real results from real people. See how others have transformed their lives 
            through dedicated training and expert guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-[#F9FAFB] p-8 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#3B82F6] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#EF4444]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#4B5563] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E5E7EB]">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-[#1F2937]">{testimonial.name}</div>
                  <div className="text-sm text-[#4B5563]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#4B5563] mb-6">Ready to write your own success story?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
