export default function Features() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[hsl(var(--background))] via-white to-[hsl(var(--sacred-saffron))/5] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-[hsl(var(--sacred-saffron))/10] to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-[hsl(var(--kumkum-red))/5] to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-16 lg:gap-20">
        {/* Left side - Image section */}
        <div className="flex-1 w-full max-w-xl order-2 lg:order-1">
          <div className="relative group">
            {/* Decorative ring background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(var(--sacred-saffron))] via-[hsl(var(--temple-gold))] to-[hsl(var(--kumkum-red))] opacity-20 blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700"></div>
            
            {/* Main image with decorative elements */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=700&fit=crop"
                alt="Pilgrims on spiritual journey"
                width={600}
                height={700}
                loading="lazy"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            {/* Floating stats cards with enhanced design - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border-l-4 border-[hsl(var(--sacred-saffron))] hover:shadow-[0_20px_60px_-15px_rgba(255,140,0,0.3)] transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-white/95 z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/20 to-[hsl(var(--kumkum-red))]/20 flex items-center justify-center animate-pulse">
                  <span className="text-3xl sm:text-4xl">🙏</span>
                </div>
                <div>
                  <div className="text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] text-3xl sm:text-4xl font-bold leading-tight">
                    1000+
                  </div>
                  <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-xs sm:text-sm font-medium">
                    Happy Pilgrims
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-6 sm:-top-8 -left-4 sm:-left-8 bg-gradient-to-br from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 text-white hover:shadow-[0_20px_60px_-15px_rgba(255,140,0,0.4)] transform hover:-translate-y-2 transition-all duration-300 z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                  <span className="text-3xl sm:text-4xl animate-pulse">🕉️</span>
                </div>
                <div>
                  <div className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold leading-tight">
                    25+
                  </div>
                  <div className="font-['Lato'] text-xs sm:text-sm font-medium opacity-95">
                    Sacred Destinations
                  </div>
                </div>
              </div>
            </div>

            {/* Additional decorative element - experience badge - Hidden on mobile */}
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-6 bg-gradient-to-br from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))] rounded-full w-20 sm:w-24 h-20 sm:h-24 flex-col items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 z-10 border-4 border-white">
              <div className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold leading-none">28+</div>
              <div className="font-['Lato'] text-[10px] sm:text-xs font-semibold mt-1">YEARS</div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))/15] to-[hsl(var(--kumkum-red))/10] mb-4 sm:mb-6 border border-[hsl(var(--sacred-saffron))/20] hover:scale-105 transition-transform duration-300">
            <span className="text-xl sm:text-2xl">✨</span>
            <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold text-xs sm:text-sm tracking-widest">
              ABOUT  GUPTAS TRAVELS
            </span>
          </div>
          
          <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Your Trusted Spiritual
            <br />
            <span className="text-gradient bg-gradient-to-r from-[hsl(var(--sacred-saffron))] via-[hsl(var(--temple-gold))] to-[hsl(var(--kumkum-red))] bg-clip-text text-transparent">
              Journey Partner
            </span>
          </h2>
          
          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            With over <span className="text-[hsl(var(--sacred-saffron))] font-bold">28 years of dedicated service</span>, we specialize in providing comfortable and reliable 
            transportation for pilgrims visiting Tirupati and surrounding sacred sites. Our commitment to 
            devotional excellence and customer satisfaction has made us the preferred choice for thousands 
            of devotees.
          </p>

          {/* Achievement stats with enhanced design */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-8 sm:mb-10">
            <div className="group text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-[hsl(var(--sacred-saffron))/5] to-white border-2 border-[hsl(var(--sacred-saffron))/20 hover:border-[hsl(var(--sacred-saffron))] hover:shadow-[0_10px_40px_-10px_rgba(255,140,0,0.3)] transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--temple-gold))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                28+
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-xs sm:text-sm font-semibold">
                Years of Service
              </div>
            </div>
            
            <div className="group text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-[hsl(var(--temple-gold))/5] to-white border-2 border-[hsl(var(--temple-gold))/20 hover:border-[hsl(var(--temple-gold))] hover:shadow-[0_10px_40px_-10px_rgba(255,191,0,0.3)] transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-[hsl(var(--temple-gold))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-xs sm:text-sm font-semibold">
                Blessed Journeys
              </div>
            </div>
            
            <div className="group text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-[hsl(var(--kumkum-red))/5] to-white border-2 border-[hsl(var(--kumkum-red))/20 hover:border-[hsl(var(--kumkum-red))] hover:shadow-[0_10px_40px_-10px_rgba(220,20,60,0.3)] transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--kumkum-red))] to-[hsl(var(--sacred-saffron))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-[hsl(var(--kumkum-red))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-xs sm:text-sm font-semibold">
                Satisfaction Rate
              </div>
            </div>
          </div>

          {/* Key points with enhanced design */}
          <div className="space-y-3 sm:space-y-5">
            <div className="group flex items-start gap-3 sm:gap-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-[hsl(var(--sacred-saffron))/5] hover:to-transparent transition-all duration-300 hover:shadow-lg hover:-translate-x-2 cursor-pointer border-l-4 border-transparent hover:border-[hsl(var(--sacred-saffron))]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/20 to-[hsl(var(--kumkum-red))]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[hsl(var(--sacred-saffron))]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-['Lato'] font-bold text-[hsl(var(--foreground))] text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-[hsl(var(--sacred-saffron))] transition-colors">
                  Experienced Professional Drivers
                </h4>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] leading-relaxed">
                  Well-trained and courteous drivers familiar with temple routes and traditions, ensuring a safe and comfortable pilgrimage
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-3 sm:gap-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-[hsl(var(--temple-gold))/5] hover:to-transparent transition-all duration-300 hover:shadow-lg hover:-translate-x-2 cursor-pointer border-l-4 border-transparent hover:border-[hsl(var(--temple-gold))]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(var(--temple-gold))]/20 to-[hsl(var(--sacred-saffron))]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[hsl(var(--temple-gold))]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-['Lato'] font-bold text-[hsl(var(--foreground))] text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-[hsl(var(--temple-gold))] transition-colors">
                  Modern & Well-Maintained Fleet
                </h4>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] leading-relaxed">
                  Clean, comfortable AC vehicles serviced regularly for your safety and peace of mind throughout your journey
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-3 sm:gap-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-[hsl(var(--kumkum-red))/5] hover:to-transparent transition-all duration-300 hover:shadow-lg hover:-translate-x-2 cursor-pointer border-l-4 border-transparent hover:border-[hsl(var(--kumkum-red))]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(var(--kumkum-red))]/20 to-[hsl(var(--sacred-saffron))]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[hsl(var(--kumkum-red))]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-['Lato'] font-bold text-[hsl(var(--foreground))] text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-[hsl(var(--kumkum-red))] transition-colors">
                  Transparent & Affordable Pricing
                </h4>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] leading-relaxed">
                  No hidden costs or surprise charges - honest and competitive pricing designed with devotees' needs in mind
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold text-sm sm:text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>Start Your Journey Today</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
