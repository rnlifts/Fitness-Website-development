import { useState } from 'react';
import fatloss from '../assets/certifications/fatloss.jpg';
import hormones from '../assets/certifications/hormones.jpg';
import pcod from '../assets/certifications/pcod.jpg';
import precision from '../assets/certifications/precision.jpg';
import redcross from '../assets/certifications/redcross.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CertificationsSection = () => {

  // ================= SCROLL ANIMATION HOOKS =================
  // Controls fade-in animations when sections enter viewport
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [featuredRef, featuredVisible] = useScrollAnimation(0.3);
  const [gridRef, gridVisible] = useScrollAnimation(0.2);
  

  // ================= MODAL STATE =================
  // Controls certificate preview popup
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // ================= GRID TOGGLE STATE =================
  // Controls View All / Show Less behavior
  const [showAllCerts, setShowAllCerts] = useState(false);


  // ================= MODAL OPEN =================
  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };


  // ================= MODAL CLOSE =================
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };


  // ================= GRID TOGGLE =================
  const toggleAllCerts = () => {
    setShowAllCerts(!showAllCerts);
  };


  // ================= DEMO CERTIFICATION DATA =================
  const certifications = [
    {
      id: 1,
      title: "Fat Loss Expert",
      issuer: "Classic Fitness Academy",
      year: "2024",
      category: "Fat Loss",
      image: fatloss,
      featured: true
    },
    {
      id: 2,
      title: "Precision Nutrition Level 1",
      issuer: "Precision Nutrition",
      year: "2024",
      category: "Nutrition",
      image: precision,
      featured: true
    },
    {
      id: 3,
      title: "Effects of Hormones on Exercise Performance",
      issuer: "Classic Fitness Academy",
      year: "2024",
      category: "Hormonal Health",
      image: hormones,
      featured: true
    },
    {
      id: 4,
      title: "PCOD: Role of Fitness Professionals",
      issuer: "Classic Fitness Academy",
      year: "2024",
      category: "PCOD",
      image: pcod,
      featured: false
    },
    {
      id: 5,
      title: "CPR TRAINING",
      issuer: "Nepal Red Cross Society",
      year: "2024",
      category: "First Aid",
      image: redcross,
      featured: false
    },
    
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-white relative overflow-hidden">


      {/* ================= BACKGROUND GRID =================
         Decorative grid pattern
      */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>


      {/* ================= GRADIENT ORBS =================
         Soft glow background effects
      */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EF4444]/5 rounded-full blur-3xl"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">


        {/* ================= HEADER =================
           Section title + intro
        */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-4">
            Professional Credentials
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#1F2937] mb-6">
            Certifications & Qualifications
          </h3>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Continuously advancing my expertise through industry-leading certifications.
          </p>
        </div>


        {/* ================= FEATURED SLIDER =================
           Highlighted top certifications
        */}
        <div 
          ref={featuredRef}
          className={`mb-12 fade-in-up ${featuredVisible ? 'visible' : ''}`}
        >
          <h4 className="text-2xl font-bold text-[#1F2937] mb-8 text-center">
            Featured Certifications
          </h4>

          <div className="flex justify-center gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

            {featuredCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openModal(cert)}
                className="group flex-shrink-0 w-80 bg-[#F9FAFB] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#3B82F6] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer snap-center"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={cert.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold text-[#1F2937] mb-2">{cert.title}</h5>
                  <div className="flex justify-between text-sm">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="text-center mb-12">
          <button
            onClick={toggleAllCerts}
            className="px-8 py-4 bg-[#EF4444] text-white rounded-xl font-bold"
          >
            {showAllCerts ? "Show Less" : `View All Certifications (${certifications.length})`}
          </button>
        </div>


        {/* ================= ALL CERTIFICATIONS GRID ================= */}
        {showAllCerts && (
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${gridVisible ? 'visible' : ''}`}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openModal(cert)}
                className="group bg-[#F9FAFB] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#EF4444] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={cert.image} className="w-full h-full object-cover"/>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold text-[#1F2937] mb-2">{cert.title}</h5>
                  <div className="flex justify-between text-sm">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>


      {/* ================= MODAL =================
         Certificate preview popup
      */}
      {isModalOpen && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
             onClick={closeModal}>
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8"
               onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="float-right text-red-500">✕</button>
            <img src={selectedCert.image} className="mb-6"/>
            <h3 className="text-3xl font-black">{selectedCert.title}</h3>
            <p>{selectedCert.issuer} • {selectedCert.year}</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default CertificationsSection;
