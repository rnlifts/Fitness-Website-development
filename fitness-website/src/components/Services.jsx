const Services = () => {
  const services = [
    {
      icon: "💪",
      title: "Personal Training",
      description: "One-on-one customized workout sessions tailored to your specific goals and fitness level",
      features: ["Custom Programs", "Form Correction", "Progress Tracking", "Flexible Scheduling"]
    },
    {
      icon: "🥗",
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition guidance to fuel your body and support your fitness journey",
      features: ["Meal Planning", "Macro Tracking", "Supplement Advice", "Habit Formation"]
    },
    {
      icon: "📱",
      title: "Online Coaching",
      description: "Train from anywhere with personalized online programs and virtual support",
      features: ["Video Calls", "App Access", "24/7 Support", "Weekly Check-ins"]
    },
    {
      icon: "👥",
      title: "Group Classes",
      description: "High-energy group training sessions that build community and accountability",
      features: ["HIIT Workouts", "Strength Training", "Mobility Work", "All Fitness Levels"]
    },
    {
      icon: "🎓",
      title: "Fitness Education",
      description: "Learn the science behind effective training through workshops and seminars",
      features: ["Exercise Science", "Injury Prevention", "Training Methods", "Certifications"]
    },
    {
      icon: "🏆",
      title: "Competition Prep",
      description: "Specialized training for athletes preparing for competitions and events",
      features: ["Peak Training", "Periodization", "Mental Prep", "Recovery Plans"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-4">Services</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#1F2937] mb-6">
            Comprehensive Fitness Solutions
          </h3>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Choose from a range of services designed to meet you wherever you are 
            in your fitness journey and take you to the next level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-[#F9FAFB] p-8 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#3B82F6] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#1F2937] mb-4 group-hover:text-[#EF4444] transition-colors duration-300">{service.title}</h4>
              <p className="text-[#4B5563] mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#4B5563]">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0 text-[#EF4444]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-3 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#EF4444]/30">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
