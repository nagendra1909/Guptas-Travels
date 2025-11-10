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
            +91 9704466557
          </p>
          <p className="text-sm">
            We're available 24/7 to assist you
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            Talk to our travel experts and book your Tirupati Trip today!
          </p>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image - Desktop */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/gupta_bg.jpg)'
        }}
      ></div>
      
      {/* Background Image - Mobile */}
      <div 
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/gupta_mobile_view.png)'
        }}
      ></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/10"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-8 lg:px-24 py-20">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-4 sm:mb-6 shadow-lg hover:bg-white/15 transition-all"
            role="status"
            aria-label="Excellence in motion"
          >
            <span className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[hsl(var(--sacred-saffron))] shadow-lg">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--sacred-saffron))] opacity-30 animate-ping"></span>
              <Sparkles className="relative w-3 h-3 text-white" />
            </span>
            <span className="text-white font-['Lato'] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              <span className="hidden sm:inline">Premium Travel Partner Since 2010</span>
              <span className="sm:hidden">Premium Travel Partner</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white mb-2 drop-shadow-lg">Your Journey to</span>
            <span className="block text-[hsl(var(--sacred-saffron))] drop-shadow-[0_2px_8px_rgba(255,183,0,0.8)]" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,183,0,0.3)'
            }}>
              Divine Destinations
            </span>
            <span className="block text-white/95 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-4 drop-shadow-lg">
              Begins with Gupta Travels
            </span>
          </h1>
          
          {/* Description */}
          {/* <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-['Lato'] max-w-2xl drop-shadow-lg">
            Experience world-class travel services with our premium fleet, professional chauffeurs, and unwavering commitment to excellence.
          </p> */}

          {/* Stats Bar */}
          {/* <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-10 pb-6 md:pb-8 border-b border-white/30">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] mb-1 drop-shadow-lg">
                15+
              </div>
              <div className="text-white text-xs sm:text-sm font-['Lato'] uppercase tracking-wide">
                Years
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] mb-1 drop-shadow-lg">
                10K+
              </div>
              <div className="text-white text-xs sm:text-sm font-['Lato'] uppercase tracking-wide">
                Travelers
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] mb-1 drop-shadow-lg">
                50+
              </div>
              <div className="text-white text-xs sm:text-sm font-['Lato'] uppercase tracking-wide">
                Vehicles
              </div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 pt-10">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--temple-gold))] text-white font-['Lato'] font-bold text-base sm:text-lg shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,183,0,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
              <span>Book Your Journey</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={handlePhoneClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-['Lato'] font-bold text-base sm:text-lg hover:bg-white hover:text-[#1a4d32] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <a href="tel:+919704466557" className="flex items-center gap-3 w-full justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Call: +91 9704466557</span>
                <span className="sm:hidden">+91 9704466557</span>
              </a>
            </button>
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[hsl(var(--sacred-saffron))] to-[hsl(var(--temple-gold))] border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                    {i}K
                  </div>
                ))}
              </div>
              <div className="text-white text-xs sm:text-sm font-['Lato']">
                <span className="font-bold">10,000+</span> Customers
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[hsl(var(--sacred-saffron))] drop-shadow-lg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-['Lato'] font-semibold">4.9/5.0 Rating</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>

    {/* Why Choose Section - Below hero on all devices */}
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 bg-gradient-to-br from-white to-[#f0f9f6]">
      <div className="max-w-6xl mx-auto">
        {/* Key Features */}
        {/* <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-[#34a870]/20">
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
        </div> */}
      </div>
    </section>
    </>
  );
}
