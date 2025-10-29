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

import { useState } from "react";

export default function VehicleFleet() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-20 bg-gradient-to-b from-[hsl(var(--background))] via-white to-[hsl(var(--background))]">
      {/* Premium Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-400/30 mb-4">
          <span className="text-2xl">✨</span>
          <span className="text-emerald-700 font-['Lato'] font-semibold text-sm tracking-widest uppercase">
            PREMIUM FLEET COLLECTION
          </span>
        </div>
        <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Enterprise-Grade Transportation
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] text-lg sm:text-xl max-w-4xl mx-auto px-4 font-['Lato'] leading-relaxed">
          Experience extraordinary comfort with our meticulously-maintained fleet of business-class and enterprise-grade vehicles. 
          <span className="text-emerald-700 font-semibold"> Precision. Luxury. Trust.</span>
        </p>
        
        {/* Premium Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          <div className="px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-emerald-700">✓ ISO Certified Fleet</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-blue-700">✓ 5-Star Safety Rating</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-purple-50 border border-purple-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-purple-700">✓ 24/7 Support</p>
          </div>
        </div>
      </div>

      {/* Premium Vehicle Cards Grid - Collapsible */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-emerald-100/50 hover:border-emerald-400/60"
          >
            {/* Vehicle Image Container */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50">
              <img 
                src={vehicle.image} 
                alt={`Premium ${vehicle.name}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Tier Badge - Top Left */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-200/50 shadow-md">
                <span className="text-xs font-['Lato'] font-bold text-emerald-700 uppercase tracking-wider">
                  {vehicle.tier}
                </span>
              </div>

              {/* Premium Badge - Top Right */}
              <div className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${vehicle.accentColor} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                <span>{vehicle.icon}</span>
                <span>{vehicle.badge}</span>
              </div>
              
              {/* Capacity Badge - Bottom Left */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg flex items-center gap-1.5 border border-white/50">
                <span className="text-lg">{vehicle.icon}</span>
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] font-['Lato']">Capacity</p>
                  <p className="text-[hsl(var(--foreground))] font-bold text-xs font-['Lato']">
                    {vehicle.capacity}
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Card Content - Always Visible */}
            <div className="p-5 sm:p-6">
              {/* Vehicle Name & Subtitle */}
              <div className="mb-4">
                <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-1">
                  {vehicle.name}
                </h3>
                <p className="text-emerald-600 text-xs sm:text-sm font-['Lato'] font-semibold line-clamp-1">
                  {vehicle.subtitle}
                </p>
              </div>
              
              {/* Compact Pricing */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-3 mb-4 border border-emerald-100/50">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-[10px] text-[hsl(var(--muted-foreground))] font-['Lato']">Local</p>
                    <p className="text-emerald-700 font-['Lato'] font-bold text-xs">{vehicle.localRent}</p>
                  </div>
                  <div className="border-l border-r border-emerald-200/50">
                    <p className="text-[10px] text-[hsl(var(--muted-foreground))] font-['Lato']">Per KM</p>
                    <p className="text-emerald-700 font-['Lato'] font-bold text-xs">{vehicle.outstationRate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[hsl(var(--muted-foreground))] font-['Lato']">Min</p>
                    <p className="text-emerald-700 font-['Lato'] font-bold text-xs">{vehicle.minKms}</p>
                  </div>
                </div>
              </div>

              {/* Top Features - Compact */}
              <div className="mb-4">
                <ul className="space-y-1.5">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[hsl(var(--muted-foreground))] text-xs sm:text-sm font-['Lato']">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                        <path d="M6 10L9 13L14 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                  {expandedCard === index && (
                    <>
                      {vehicle.features.slice(2).map((feature, idx) => (
                        <li key={idx + 2} className="flex items-start gap-1.5 text-[hsl(var(--muted-foreground))] text-xs sm:text-sm font-['Lato']">
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                            <path d="M6 10L9 13L14 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>

              {/* Expandable Content */}
              {expandedCard === index && (
                <div className="mb-4 pt-3 border-t border-emerald-100/50 space-y-3 animate-in fade-in duration-300">
                  {/* Specifications */}
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100/50">
                    <p className="text-xs text-blue-700 font-['Lato'] font-bold mb-2">Technical Specs</p>
                    <div className="space-y-1">
                      {vehicle.specs.map((spec, idx) => (
                        <p key={idx} className="text-xs text-blue-600 font-['Lato']">• {spec}</p>
                      ))}
                    </div>
                  </div>

                  {/* Full Pricing Details */}
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100/50">
                    <p className="text-xs text-emerald-700 font-['Lato'] font-bold mb-2">Detailed Pricing</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-emerald-600">🏙️ Local/Day:</span>
                        <span className="font-bold text-emerald-700">{vehicle.localRent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-emerald-600">⛽ Diesel/KM:</span>
                        <span className="font-bold text-emerald-700">{vehicle.localDiesel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-emerald-600">🛣️ Outstation/KM:</span>
                        <span className="font-bold text-emerald-700">{vehicle.outstationRate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Expand/Collapse Button & Reserve Button */}
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleExpand(index)}
                  className="flex-1 py-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-['Lato'] font-semibold text-sm transition-all"
                >
                  {expandedCard === index ? "Show Less ▲" : "Details ▼"}
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-['Lato'] font-bold text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Premium Accent Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${vehicle.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
          </div>
        ))}
      </div>

      {/* Premium Service Standards Section */}
      <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-emerald-100/50">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-14">
          <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl font-bold mb-3">
            Enterprise Service Standards
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-lg font-['Lato'] max-w-2xl mx-auto">
            Every journey backed by our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-14">
          {/* What's Included */}
          <div className="bg-white rounded-xl p-7 border-2 border-emerald-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-xl font-bold">
                Inclusions
              </h4>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "👨‍💼", title: "Elite Driver", desc: "Certified professionals with 5+ years experience" },
                { icon: "🔧", title: "Premium Maintenance", desc: "Regular servicing and sanitization included" },
                { icon: "🗺️", title: "GPS Navigation", desc: "Real-time tracking and optimal route planning" },
                { icon: "📞", title: "24/7 Concierge", desc: "Dedicated support for your journey" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato'] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Safety & Quality */}
          <div className="bg-white rounded-xl p-7 border-2 border-blue-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🛡️</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-xl font-bold">
                Safety & Quality
              </h4>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "⭐", title: "5-Star Safety", desc: "Advanced ABS, airbags, and stability control" },
                { icon: "🔍", title: "Quality Audits", desc: "Monthly inspections and certifications" },
                { icon: "🧼", title: "Hygiene Protocol", desc: "ISO-certified sanitization procedures" },
                { icon: "📋", title: "Compliance", desc: "Full RTO and insurance documentation" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato'] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Additional Charges */}
          <div className="bg-white rounded-xl p-7 border-2 border-purple-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">💳</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-xl font-bold">
                Additional Services
              </h4>
            </div>
            <div className="space-y-4">
              {[
                { icon: "🍽️", title: "Driver Meal", cost: "₹300/day", desc: "Breakfast & lunch included" },
                { icon: "🛣️", title: "Toll & Parking", cost: "As actual", desc: "Transparent billing" },
                { icon: "🏛️", title: "State Taxes", cost: "As actual", desc: "Interstate permits" },
                { icon: "🎯", title: "Customized Tours", cost: "Quote based", desc: "Personalized itineraries" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-start p-3 rounded-lg bg-gradient-to-r from-purple-50 to-transparent border border-purple-100/50 group hover:bg-purple-50 transition-colors">
                  <div className="flex items-start gap-2 flex-1">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-sm">
                        {item.title}
                      </p>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato']">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-purple-700 font-['Lato'] font-bold text-sm flex-shrink-0 ml-2">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Guarantee */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-7 border-l-4 border-emerald-600">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🏆</span>
            <div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold mb-2">
                GUPTAS AGENCY Premium Guarantee
              </h4>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed font-['Lato']">
                Every journey exceeds expectations. Transparent pricing with no hidden charges. Professional drivers dedicated to your comfort. 
                <span className="text-emerald-700 font-semibold"> Real-time support available 24/7.</span> We don't just transport—we curate experiences.
              </p>
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
              Book your extraordinary journey with GUPTAS AGENCY today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap">
              <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-['Lato'] font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap">
                <span>�</span>
                <span>Call: +91 98765 43210</span>
              </button>
              <button className="px-10 py-4 rounded-xl border-2 border-emerald-600 text-emerald-700 font-['Lato'] font-bold text-lg hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap">
                <span>💬</span>
                <span>WhatsApp Us</span>
              </button>
              <button className="px-10 py-4 rounded-xl bg-blue-50 border-2 border-blue-200 text-blue-700 font-['Lato'] font-bold text-lg hover:bg-blue-100 transition-all flex items-center gap-2 whitespace-nowrap">
                <span>📧</span>
                <span>Email Inquiry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
