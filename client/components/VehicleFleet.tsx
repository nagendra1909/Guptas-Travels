const vehicles = [
  {
    name: "Executive Sedan",
    subtitle: "Etios / Swift Dzire / Amaze / Ciaz",
    tier: "Business Class",
    capacity: "4 Executive Seats",
    localRent: "₹2,000",
    localDiesel: "₹10/km",
    outstationRate: "₹14/km",
    minKms: "300 kms",
    features: ["Premium AC Climate Control", "Leather Appointments", "Advanced GPS Navigation", "Premium Audio System", "USB Charging", "Water Bottle Service"],
    specs: ["Avg Mileage: 15-18 km/l", "Luggage: 400L", "Safety: 5-Star Rating"],
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg",
    badge: "Business Class",
    icon: "🎩",
    accentColor: "from-blue-500 to-blue-600",
  },
  {
    name: "Comfort Premium",
    subtitle: "Ertiga Premium 6-7 Seater",
    tier: "Business Class",
    capacity: "6-7 Premium Seats",
    localRent: "₹2,500",
    localDiesel: "₹10/km",
    outstationRate: "₹19/km",
    minKms: "300 kms",
    features: ["Dual-Zone Climate Control", "Panoramic Sunroof", "Ample Luggage Space", "Premium Upholstery", "Individual Reading Lights", "Refreshment Service"],
    specs: ["Avg Mileage: 14-16 km/l", "Luggage: 500L", "Safety: Advanced ABS"],
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg",
    badge: "Family Premium",
    icon: "�‍👩‍👧‍👦",
    accentColor: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Innova Luxury",
    subtitle: "Toyota Innova Crysta - Enterprise Grade",
    tier: "Enterprise Grade",
    capacity: "6-7 Luxury Seats",
    localRent: "₹2,800",
    localDiesel: "₹10/km",
    outstationRate: "₹22/km",
    minKms: "300 kms",
    features: ["Triple-Zone Automatic AC", "Leather Interior", "Power Steering + Power Windows", "Premium Sound System", "Cup Holders & Storage", "Concierge Service Available"],
    specs: ["Avg Mileage: 12-14 km/l", "Luggage: 600L", "Safety: 6+ Airbags"],
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg",
    badge: "Enterprise Grade",
    icon: "�",
    accentColor: "from-purple-500 to-purple-600",
  },
  {
    name: "Tempo Traveller",
    subtitle: "12 Seater - Executive Group Travel",
    tier: "Enterprise Grade",
    capacity: "12 Executive Seats",
    localRent: "₹3,500",
    localDiesel: "100/- per 8kms",
    outstationRate: "₹25/km",
    minKms: "300 kms",
    features: ["Individual Pushback Seats", "Built-in Entertainment System", "Wide Aisles for Movement", "Multiple USB Charging Ports", "Premium Washroom Facility", "Dedicated Group Coordinator"],
    specs: ["Avg Mileage: 8-10 km/l", "Luggage: 1200L", "Safety: Anti-Skid Braking"],
    image:
      "https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3350WB-mob.png",
    badge: "Corporate Grade",
    icon: "🏢",
    accentColor: "from-orange-500 to-orange-600",
  },
  {
    name: "Urbania Executive",
    subtitle: "17 Seater - Premium Corporate Transport",
    tier: "Enterprise Grade",
    capacity: "17 Executive Seats",
    localRent: "₹4,500",
    localDiesel: "100/- per 7kms",
    outstationRate: "₹35/km",
    minKms: "300 kms",
    features: ["Reclining Pushback Seats", "Full HD Entertainment Display", "Premium Cabin Lighting", "Advanced Safety Features", "Real-time GPS Tracking", "Executive Travel Protocol"],
    specs: ["Avg Mileage: 8-9 km/l", "Luggage: 1500L", "Safety: Stability Control"],
    image:
      "https://assets.tractorjunction.com/truck-junction/assets/images/truck/urbania-1669023374.webp",
    badge: "Enterprise Premium",
    icon: "🌟",
    accentColor: "from-red-500 to-red-600",
  },
  {
    name: "Urbania Grande",
    subtitle: "21 Seater - Ultimate Group Experience",
    tier: "Enterprise Grade",
    capacity: "21 Premium Seats",
    localRent: "₹5,000",
    localDiesel: "100/- per 6kms",
    outstationRate: "₹30/km",
    minKms: "300 kms",
    features: ["Luxury Reclining Seats", "Dual Entertainment Systems", "Individual Reading Lights", "Advanced Climate Control", "Professional Attendant", "VIP Travel Coordination"],
    specs: ["Avg Mileage: 7-8 km/l", "Luggage: 1800L", "Safety: ESC + ABS"],
    image:
      "https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3350WB-mob.png",
    badge: "Ultimate Premium",
    icon: "�",
    accentColor: "from-amber-500 to-amber-600",
  },
];

import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function VehicleFleet() {
  const [currentVehicle, setCurrentVehicle] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-carousel effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentVehicle((prev) => (prev === vehicles.length - 1 ? 0 : prev + 1));
    }, 4000); // Change vehicle every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-20 bg-gradient-to-b from-[hsl(var(--background))] via-white to-[hsl(var(--background))]">
      {/* Animated Highway Marquee */}
      <div className="relative w-full h-32 sm:h-40 lg:h-48 mb-12 sm:mb-16 rounded-2xl overflow-hidden shadow-2xl">
        {/* Highway Background - Black Road */}
        <div className="absolute inset-0 bg-black">
          {/* CSS Animations */}
          <style>{`
            @keyframes car-move {
              0% { transform: translate(-100%, -50%); }
              100% { transform: translate(calc(100vw + 100%), -50%); }
            }
          `}</style>
        </div>

        {/* Top White Edge Line */}
        <div className="absolute top-3 left-0 w-full h-1 bg-white"></div>

        {/* Bottom White Edge Line */}
        <div className="absolute bottom-3 left-0 w-full h-1 bg-white"></div>

        {/* Center Lane - Static White Dashed Lines */}
        <div
          className="absolute top-1/2 left-0 w-full flex justify-around items-center"
          style={{ transform: "translateY(-50%)" }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-8 sm:w-12 h-1 bg-white"></div>
          ))}
        </div>

        {/* Animated Car with Marquee */}
        <div
          className="absolute top-1/4 -translate-y-1/2"
          style={{
            animation: "car-move 8s linear infinite",
          }}
        >
          {/* Car Image */}
          <img
            src="/car.png"
            alt="Moving Car"
            className="h-20 sm:h-24 lg:h-28 w-auto drop-shadow-2xl"
          />
        </div>
        <div
          className="absolute top-3/4 translate-x-1/2"
          style={{
            animation: "car-move 8s linear infinite reverse",
          }}
        >
          {/* Van Image */}
          <img
            src="/van.png"
            alt="Moving Van"
            className="h-20 sm:h-24 lg:h-28 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Speed Lines Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 h-0.5 bg-white/30"
              style={{
                left: `${i * 20}%`,
                width: "15%",
                transform: "translateY(-50%)",
                animation: `speed-line ${1 + i * 0.2}s linear infinite`,
              }}
            ></div>
          ))}
        </div>
        <style>{`
          @keyframes speed-line {
            0% { transform: translateX(100vw) translateY(-50%); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateX(-100%) translateY(-50%); opacity: 0; }
          }
        `}</style>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center">
            <h3 className="text-white font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-lg">
              Your Journey Awaits
            </h3>
            <p className="text-white/90 font-['Lato'] text-sm sm:text-base mt-1 pb-5 drop-shadow-lg">
              Premium vehicles for every destination
            </p>
          </div>
        </div>
      </div>

      {/* Premium Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-400/30 mb-4">
          {/* <span className="text-2xl">✨</span> */}
          {/* <span className="text-emerald-700 font-['Lato'] font-semibold text-sm tracking-widest uppercase">
            PREMIUM FLEET COLLECTION
          </span> */}
        </div>
        <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Our Vehicles
        </h2>
        {/* <p className="text-[hsl(var(--muted-foreground))] text-lg sm:text-xl max-w-4xl mx-auto px-4 font-['Lato'] leading-relaxed">
          Experience extraordinary comfort with our meticulously-maintained fleet of business-class and enterprise-grade vehicles. 
          <span className="text-emerald-700 font-semibold"> Precision. Luxury. Trust.</span>
        </p> */}

        {/* Premium Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          {/* <div className="px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-emerald-700">✓ ISO Certified Fleet</p>
          </div> */}
          <div className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-blue-700">
              ✓ 5-Star Safety Rating
            </p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-purple-50 border border-purple-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-purple-700">
              ✓ 24/7 Support
            </p>
          </div>
        </div>
      </div>

      {/* Single Vehicle Carousel with Mouse Navigation */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
        <div
          className="relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const centerZone = width * 0.5; // 50% center zone for image
            const leftZone = (width - centerZone) / 2;

            if (x < leftZone) {
              // Left zone - hover to go previous
              e.currentTarget.style.cursor = "w-resize";
            } else if (x > leftZone + centerZone) {
              // Right zone - hover to go next
              e.currentTarget.style.cursor = "e-resize";
            } else {
              // Center zone - show details on hover
              e.currentTarget.style.cursor = "default";
            }
          }}
        >
          {/* Left Navigation Zone - Hover to go previous */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/4 z-20"
            onMouseEnter={() => {
              setIsAutoPlaying(false);
              setCurrentVehicle(
                currentVehicle === 0 ? vehicles.length - 1 : currentVehicle - 1,
              );
              setShowDetails(false);
            }}
            onMouseLeave={() => {
              setIsAutoPlaying(true);
            }}
          ></div>

          {/* Center Content Zone - Hover to show details */}
          <div
            className="absolute left-1/4 right-1/4 top-0 bottom-0 z-20"
            onMouseEnter={() => {
              setIsAutoPlaying(false);
              setShowDetails(true);
            }}
            onMouseLeave={() => {
              setShowDetails(false);
              setIsAutoPlaying(true);
            }}
          ></div>

          {/* Right Navigation Zone - Hover to go next */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/4 z-20"
            onMouseEnter={() => {
              setIsAutoPlaying(false);
              setCurrentVehicle(
                currentVehicle === vehicles.length - 1 ? 0 : currentVehicle + 1,
              );
              setShowDetails(false);
            }}
            onMouseLeave={() => {
              setIsAutoPlaying(true);
            }}
          ></div>

          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentVehicle
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Full Screen Vehicle Image */}
              <div className="absolute inset-0">
                <img
                  src={vehicle.image}
                  alt={`Premium ${vehicle.name}`}
                  className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Vehicle Details Overlay - Shows on hover in center */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 pointer-events-none ${
                  showDetails && index === currentVehicle
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                  {/* Vehicle Name & Badge */}
                  <div className="mb-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/50 mb-3">
                      <span className="text-emerald-300 font-['Lato'] text-sm font-semibold">
                        {vehicle.badge}
                      </span>
                    </div>
                    <h3 className="text-white font-['Playfair_Display'] text-3xl sm:text-5xl font-bold mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-emerald-300 text-lg sm:text-xl font-['Lato'] font-semibold">
                      {vehicle.subtitle}
                    </p>
                  </div>

                  {/* Pricing Cards */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                      <p className="text-white/70 text-xs sm:text-sm font-['Lato'] mb-1">
                        Local/Day
                      </p>
                      <p className="text-emerald-300 font-['Playfair_Display'] font-bold text-lg sm:text-2xl">
                        {vehicle.localRent}
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                      <p className="text-white/70 text-xs sm:text-sm font-['Lato'] mb-1">
                        Per KM
                      </p>
                      <p className="text-emerald-300 font-['Playfair_Display'] font-bold text-lg sm:text-2xl">
                        {vehicle.outstationRate}
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                      <p className="text-white/70 text-xs sm:text-sm font-['Lato'] mb-1">
                        Capacity
                      </p>
                      <p className="text-emerald-300 font-['Playfair_Display'] font-bold text-lg sm:text-2xl">
                        {vehicle.capacity.split(" ")[0]}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-white/90 font-['Lato'] text-sm sm:text-base mb-3">
                      Key Features:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-['Lato']"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="flex-shrink-0"
                          >
                            <path
                              d="M6 10L9 13L14 7"
                              stroke="#6ee7b7"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Hints */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                  <span className="text-white text-2xl">‹</span>
                </div>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                  <span className="text-white text-2xl">›</span>
                </div>
              </div>

              {/* Vehicle Counter */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/40">
                <span className="text-white font-['Lato'] font-semibold text-sm">
                  {index + 1} / {vehicles.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {vehicles.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentVehicle(index);
                setShowDetails(false);
                // Resume auto-play after 5 seconds
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentVehicle
                  ? "w-12 h-3 bg-emerald-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View ${vehicles[index].name}`}
            ></button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-4 py-2 rounded-full bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-700 font-['Lato'] font-semibold text-sm transition-all flex items-center gap-2"
          >
            {isAutoPlaying ? (
              <>
                <span>⏸</span>
                <span>Pause Auto-Play</span>
              </>
            ) : (
              <>
                <span>▶</span>
                <span>Resume Auto-Play</span>
              </>
            )}
          </button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6">
          <p className="text-base text-gray-700 font-['Lato']">
            <span className="inline-flex items-center gap-2 mx-2">
              <span className="text-2xl">←</span>
              <span className="font-semibold">Hover Left</span>
              <span className="text-gray-500">Previous</span>
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-2 mx-2">
              <span className="text-2xl">🖱️</span>
              <span className="font-semibold">Hover Center</span>
              <span className="text-gray-500">Details</span>
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-2 mx-2">
              <span className="font-semibold">Hover Right</span>
              <span className="text-2xl">→</span>
              <span className="text-gray-500">Next</span>
            </span>
          </p>
          <p className="text-sm text-gray-500 font-['Lato'] mt-2">
            Auto-rotates every 4 seconds • Hover to pause
          </p>
        </div>
      </div>

      {/* Premium Service Standards Section */}
      <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 sm:p-12 shadow-xl border-2 border-emerald-100/50">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">
            Enterprise Service Standards
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg font-['Lato'] max-w-2xl mx-auto">
            Every journey backed by our commitment to excellence
          </p>
        </div>

        {/* Optimized Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* What's Included */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-emerald-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold">
                Inclusions
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { icon: "👨‍💼", title: "Elite Driver", desc: "5+ years expert" },
                {
                  icon: "🔧",
                  title: "Premium Maintenance",
                  desc: "Regular servicing",
                },
                {
                  icon: "🗺️",
                  title: "GPS Navigation",
                  desc: "Real-time tracking",
                },
                {
                  icon: "📞",
                  title: "24/7 Concierge",
                  desc: "Always available",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 group">
                  <div className="min-w-0">
                    <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-xs sm:text-sm">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato']">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Safety & Quality */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-blue-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold">
                Safety & Quality
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { icon: "⭐", title: "5-Star Safety", desc: "ABS & airbags" },
                { icon: "🔍", title: "Quality Audits", desc: "Monthly checks" },
                {
                  icon: "🧼",
                  title: "Hygiene Protocol",
                  desc: "ISO-certified",
                },
                { icon: "📋", title: "Compliance", desc: "Full insurance" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 group">
                  <div className="min-w-0">
                    <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-xs sm:text-sm">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato']">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-purple-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold">
                Additional Charges
              </h4>
            </div>
            <div className="space-y-3">
              {[
                { icon: "🍽️", title: "Driver Meal", cost: "₹300" },
                { icon: "🛣️", title: "Toll & Parking", cost: "Actual" },
                { icon: "🏛️", title: "State Taxes", cost: "Actual" },
                { icon: "🎯", title: "Custom Tours", cost: "Quote" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start p-2 rounded-lg bg-purple-50/50 border border-purple-100/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="min-w-0">
                      <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-xs sm:text-sm">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <span className="text-purple-700 font-['Lato'] font-bold text-xs flex-shrink-0 ml-2">
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-10 border-t-2 border-emerald-100/50">
          <div className="text-center">
            <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-3">
              Experience Premium Transportation
            </h4>
            <p className="text-[hsl(var(--muted-foreground))] mb-8 font-['Lato'] text-lg">
              Book your extraordinary journey with GUPTA TRAVELS today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap">
              <a
                href="tel:+919704466557"
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-['Lato'] font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 9704466557</span>
              </a>
              <a
                href="https://wa.me/919704466557"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl border-2 border-emerald-600 text-emerald-700 font-['Lato'] font-bold text-lg hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:info@guptaagency.com"
                className="px-10 py-4 rounded-xl bg-blue-50 border-2 border-blue-200 text-blue-700 font-['Lato'] font-bold text-lg hover:bg-blue-100 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-5 h-5" />
                <span>Email Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
