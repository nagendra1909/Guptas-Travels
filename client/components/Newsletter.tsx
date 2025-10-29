export default function Newsletter() {
  return (
    <section className="w-full px-8 lg:px-24 py-20">
      <div className="relative w-full rounded-3xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))] via-[hsl(var(--temple-gold))] to-[hsl(var(--kumkum-red))] overflow-hidden shadow-2xl">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1170 358" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="mandala" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala)" />
          </svg>
        </div>

        {/* Om symbol decoration */}
        <div className="absolute top-10 right-10 text-white/10 text-9xl font-bold">
          ॐ
        </div>

        <div className="relative z-10 text-center py-16 px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <span className="text-2xl">🔔</span>
            <span className="text-white font-['Lato'] font-semibold text-sm tracking-wide">
              STAY BLESSED & INFORMED
            </span>
          </div>

          <h2 className="text-white font-['Playfair_Display'] text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Join Our Sacred Community
          </h2>
          <p className="text-white/90 font-['Lato'] text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to receive divine blessings, exclusive darshan packages, festival updates, and special offers for pilgrims
          </p>

          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-3 items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 outline-none text-[hsl(var(--foreground))] font-['Lato'] placeholder:text-[hsl(var(--muted-foreground))] rounded-xl w-full"
              />
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <span>Subscribe</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-white/70 text-xs font-['Lato'] mt-4">
              🙏 Join 10,000+ devotees receiving divine updates • Unsubscribe anytime
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-['Lato'] text-sm">Verified Tours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-['Lato'] text-sm">Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-['Lato'] text-sm">100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
