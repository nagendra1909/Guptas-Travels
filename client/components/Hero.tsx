import { useToast } from "@/hooks/use-toast";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { toast } = useToast();

  const handlePhoneClick = () => {
    toast({
      title: "📞 Call Us Now",
      description: (
        <div className="mt-2 space-y-2">
          <p className="font-semibold text-[hsl(var(--sacred-saffron))]">
            +91 9014486017
          </p>
          <p className="text-sm">
            We're available 24/7 to assist you
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            Talk to our travel experts and book your Tirupati darshan today!
          </p>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <>
    <section className="w-full px-3 sm:px-8 lg:px-24 pt-4 sm:pt-16 pb-8 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-[#f0f9f6] via-white to-[#e8f5f0]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-16 relative z-10">
        <div className="flex-1 max-w-3xl w-full px-1 sm:px-0 flex flex-col items-center lg:items-start">
          {/* Premium badge */}
          <div
            className="relative inline-flex items-center gap-1 sm:gap-3 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#34a870]/10 to-[#5dbd7f]/10 border border-[#34a870]/30 mb-3 sm:mb-6 shadow-sm hover:shadow-md transition-shadow smooth-transition"
            role="status"
            aria-label="Excellence in motion"
            title="Excellence in Motion — Signature Travel Experience"
          >
            <span className="relative flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#34a870] flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#34a870] opacity-30 animate-ping"></span>
              <svg className="relative w-2 h-2 sm:w-3 sm:h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0">
              <span className="text-[#34a870] font-['Lato'] font-semibold text-[9px] sm:text-sm tracking-wider">
                EXCELLENT TRAVEL PARTNER
              </span>
            </div>
          </div>

          <h1 className="font-['Playfair_Display'] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#1a4d32] mb-3 sm:mb-6 text-center lg:text-left">
            <span className="block mb-1 sm:mb-2">Journey with</span>
            <span className="text-gradient-green block py-2 sm:py-3">GUPTA TRAVELS</span>
            <span className="block text-[#34a870] text-sm sm:text-2xl lg:text-4xl font-light mt-2 sm:mt-3">Where Travel Dreams Come True</span>
          </h1>
          
          <p className="text-[#4d4d4d] text-xs sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-5 sm:mb-10 font-['Lato'] max-w-3xl text-center lg:text-left">
            Trusted by thousands, refined by years. Experience premium transportation reimagined. Our meticulously-maintained fleet, elite drivers, and unwavering commitment to excellence ensure every journey transcends expectation.
          </p>

          {/* Stats - Single line on mobile, centered */}
          <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-4 lg:gap-8 mb-6 sm:mb-12 w-full overflow-x-auto">
            <div className="flex items-baseline gap-1 flex-shrink-0">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#34a870] font-['Playfair_Display']">
                10,000+
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] font-['Lato'] font-medium whitespace-nowrap">
                Journeys
              </div>
            </div>
            <div className="w-px h-5 sm:h-8 bg-[#34a870]/20 flex-shrink-0"></div>
            <div className="flex items-baseline gap-1 flex-shrink-0">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#34a870] font-['Playfair_Display']">
                15+
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] font-['Lato'] font-medium whitespace-nowrap">
                Years Trust
              </div>
            </div>
            <div className="w-px h-5 sm:h-8 bg-[#34a870]/20 flex-shrink-0"></div>
            <div className="flex items-baseline gap-1 flex-shrink-0">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#34a870] font-['Playfair_Display']">
                50+
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] font-['Lato'] font-medium whitespace-nowrap">
                Vehicles
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
            <button className="px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#34a870] to-[#5dbd7f] text-white font-['Lato'] font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 smooth-transition flex items-center justify-center gap-2 w-full sm:w-auto">
              <span>Book Your Ride Now</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={handlePhoneClick}
              className="px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl border-2 border-[#34a870] text-[#34a870] font-['Lato'] font-bold text-sm sm:text-lg hover:bg-[#34a870] hover:text-white smooth-transition flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <a href="tel:+919014486017" className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Call: +91 9014486017</span>
                <span className="sm:hidden">+91 9014486017</span>
              </a>
            </button>
          </div>
        </div>

        {/* Hero image section - Below text on mobile, right side on desktop, moved up */}
        <div className="flex-1 relative w-full max-w-lg lg:block order-last lg:order-none -mt-4 sm:-mt-6 lg:-mt-16 xl:-mt-20">
          <div className="relative">
            {/* Decorative green circle - ONLY on image section */}
            <div className="absolute top-0 -right-12 sm:-right-8 lg:-right-4 w-80 h-80 sm:w-96 sm:h-96 opacity-5 lg:opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="60" fill="none" stroke="#34a870" strokeWidth="2"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="#5dbd7f" strokeWidth="1"/>
                <circle cx="100" cy="100" r="20" fill="none" stroke="#b8e6d5" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Main image */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/tirmula2.png"
                alt="Tirupati Temple"
                width={600}
                height={700}
                loading="eager"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating card - Hidden on mobile, visible on desktop */}
              <div className="hidden sm:block absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-2xl px-2 sm:px-3 py-2 sm:pt-2 shadow-lg sm:shadow-xl border-l-4 border-[hsl(var(--sacred-saffron))]">
                <div className="flex items-start gap-3 sm:gap-8">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="\tirmula3.jpg"
                      alt="Temple Icon"
                      width={100}
                      height={100}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Playfair_Display'] text-xs sm:text-lg font-bold text-[hsl(var(--foreground))] mb-0.5 sm:mb-1">
                      Sri Venkateswara Temple
                    </h3>
                    <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] mb-1 sm:mb-2">
                      Tirumala, Tirupati
                    </p>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-3 sm:w-4 h-3 sm:h-4 fill-[hsl(var(--temple-gold))]"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-semibold text-[hsl(var(--foreground))] font-['Lato']">
                        5.0 Divine
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Section - Below hero on all devices */}
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 bg-gradient-to-br from-white to-[#f0f9f6]">
      <div className="max-w-6xl mx-auto">
        {/* Key Features */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-[#34a870]/20">
          <h3 className="text-[#1a4d32] font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">✨</span>
            Why Choose GUPTA TRAVELS?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34a870]/15 to-[#5dbd7f]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚗</span>
              </div>
              <div>
                <h4 className="font-['Lato'] font-bold text-[#1a4d32] mb-1">
                  Premium Fleet
                </h4>
                <p className="text-sm text-[#4d4d4d] font-['Lato']">
                  Well-maintained AC vehicles with experienced drivers
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34a870]/15 to-[#5dbd7f]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🙏</span>
              </div>
              <div>
                <h4 className="font-['Lato'] font-bold text-[#1a4d32] mb-1">
                  Professional Service
                </h4>
                <p className="text-sm text-[#4d4d4d] font-['Lato']">
                  Courteous drivers with local knowledge and expertise
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34a870]/15 to-[#5dbd7f]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h4 className="font-['Lato'] font-bold text-[#1a4d32] mb-1">
                  Best Prices
                </h4>
                <p className="text-sm text-[#4d4d4d] font-['Lato']">
                  Transparent pricing with no hidden charges
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34a870]/15 to-[#5dbd7f]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h4 className="font-['Lato'] font-bold text-[#1a4d32] mb-1">
                  24/7 Support
                </h4>
                <p className="text-sm text-[#4d4d4d] font-['Lato']">
                  Round-the-clock assistance for your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
