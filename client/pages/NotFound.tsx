import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Zap, Users } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set meta tags for SEO (noindex for 404 pages)
    document.title = "404 - Page Not Found | GUPTA TRAVELS";
    
    // Add or update noindex meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      metaRobots.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(metaRobots);
    }

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );

    // Cleanup: restore default robots meta when leaving 404 page
    return () => {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
      document.title = "GUPTA TRAVELS - Your Trusted Travel Partner";
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 90;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--background))] via-white to-[hsl(var(--sacred-saffron))/5] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[hsl(var(--sacred-saffron))/10] to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[hsl(var(--temple-gold))/10] to-transparent rounded-full blur-3xl"></div>
      
      <div className="text-center relative z-10 px-6">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="font-['Playfair_Display'] text-[150px] lg:text-[200px] font-bold leading-none bg-gradient-to-r from-[hsl(var(--sacred-saffron))] via-[hsl(var(--temple-gold))] to-[hsl(var(--kumkum-red))] bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[hsl(var(--sacred-saffron))] to-transparent"></div>
            <Zap className="w-8 h-8 text-[hsl(var(--sacred-saffron))]" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[hsl(var(--temple-gold))] to-transparent"></div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl lg:text-4xl font-bold mb-4">
            Lost Your Way?
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-lg max-w-md mx-auto mb-2">
            The page you're looking for doesn't exist. Perhaps it was moved or you mistyped the URL.
          </p>
          <p className="text-[hsl(var(--sacred-saffron))] font-['Lato'] text-sm font-semibold">
            Let us guide you back to your spiritual journey
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => navigate("/")}
            className="group px-8 py-4 bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Home
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-[hsl(var(--sacred-saffron))] text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold rounded-full hover:bg-[hsl(var(--sacred-saffron))] hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </button>
        </div>

        {/* Quick links */}
        <div className="max-w-lg mx-auto">
          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-sm mb-4 font-semibold">
            Quick Links:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[hsl(var(--sacred-saffron))] hover:text-[hsl(var(--temple-gold))] font-['Lato'] text-sm font-semibold transition-colors"
            >
              About Us
            </button>
            <span className="text-[hsl(var(--border))]">•</span>
            <button
              onClick={() => scrollToSection("destinations")}
              className="text-[hsl(var(--sacred-saffron))] hover:text-[hsl(var(--temple-gold))] font-['Lato'] text-sm font-semibold transition-colors"
            >
              Destinations
            </button>
            <span className="text-[hsl(var(--border))]">•</span>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-[hsl(var(--sacred-saffron))] hover:text-[hsl(var(--temple-gold))] font-['Lato'] text-sm font-semibold transition-colors"
            >
              Packages
            </button>
            <span className="text-[hsl(var(--border))]">•</span>
            <button
              onClick={() => scrollToSection("fleet")}
              className="text-[hsl(var(--sacred-saffron))] hover:text-[hsl(var(--temple-gold))] font-['Lato'] text-sm font-semibold transition-colors"
            >
              Our Fleet
            </button>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[hsl(var(--border))] shadow-md">
            <Users className="w-6 h-6 text-[hsl(var(--sacred-saffron))]" />
            <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-sm">
              <span className="font-bold text-[hsl(var(--sacred-saffron))]">gupta Travels</span> - Your trusted pilgrimage partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
