const vehicles = [
  {
    name: "Sedan",
    subtitle: "Etios / Swift Dzire / Amaze / Ciaz",
    capacity: "4 Seater",
    localRent: "₹2,000",
    localDiesel: "₹10/km",
    outstationRate: "₹14/km",
    minKms: "300 kms",
    features: ["AC", "Music System", "GPS Tracking", "Comfortable Seating"],
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg",
    badge: "Popular",
    icon: "🚗",
  },
  {
    name: "Ertiga",
    subtitle: "Premium 6-7 Seater",
    capacity: "6-7 Seater",
    localRent: "₹2,500",
    localDiesel: "₹10/km",
    outstationRate: "₹19/km",
    minKms: "300 kms",
    features: ["AC", "Spacious Interior", "Luggage Space", "Family Friendly"],
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg",
    badge: "Family Choice",
    icon: "🚙",
  },
  {
    name: "Innova Crysta",
    subtitle: "Luxury SUV",
    capacity: "6-7 Seater",
    localRent: "₹2,800",
    localDiesel: "₹10/km",
    outstationRate: "₹22/km",
    minKms: "300 kms",
    features: ["AC", "Premium Comfort", "Extra Luggage Space", "Smooth Ride"],
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg",
    badge: "Premium",
    icon: "🚐",
  },
  {
    name: "Tempo Traveller",
    subtitle: "12 Seater",
    capacity: "12 Seater",
    localRent: "₹3,500",
    localDiesel: "100/- per 8kms",
    outstationRate: "₹25/km",
    minKms: "300 kms",
    features: ["AC", "Pushback Seats", "Entertainment", "Group Travel"],
    image:
      "https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3350WB-mob.png",
    badge: "Group Travel",
    icon: "🚌",
  },
  {
    name: "Tempo Traveller",
    subtitle: "17 Seater",
    capacity: "17 Seater",
    localRent: "₹4,500",
    localDiesel: "100/- per 7kms",
    outstationRate: "₹35/km",
    minKms: "300 kms",
    features: ["AC", "Pushback Seats", "Entertainment", "Large Group Travel"],
    image:
      "https://assets.tractorjunction.com/truck-junction/assets/images/truck/urbania-1669023374.webp",
    badge: "Best for Groups",
    icon: "🚌",
  },
];

export default function VehicleFleet() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--sandalwood))/20]">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))/10] to-[hsl(var(--kumkum-red))/10] border border-[hsl(var(--sacred-saffron))/30] mb-4">
          <span className="text-2xl">🚗</span>
          <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-semibold text-sm tracking-wide">
            OUR FLEET
          </span>
        </div>
        <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Choose Your Perfect Ride
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-3xl mx-auto px-4 font-['Lato']">
          Well-maintained vehicles with experienced drivers. Transparent pricing for local and outstation travel.
        </p>
      </div>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[hsl(var(--sacred-saffron))/30]"
          >
            {/* Vehicle Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[hsl(var(--sacred-saffron))/5] to-[hsl(var(--kumkum-red))/5]">
              <img 
                src={vehicle.image} 
                alt={`Image of ${vehicle.name}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {vehicle.badge}
              </div>
              {/* Capacity Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="text-xl">{vehicle.icon}</span>
                <span className="text-[hsl(var(--foreground))] font-bold text-sm">
                  {vehicle.capacity}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Vehicle Name */}
              <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold mb-1">
                {vehicle.name}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4 font-['Lato']">
                {vehicle.subtitle}
              </p>
              
              {/* Pricing Tabs */}
              <div className="bg-gradient-to-r from-[hsl(var(--sacred-saffron))/5] to-[hsl(var(--kumkum-red))/5] rounded-xl p-4 mb-4 border border-[hsl(var(--sacred-saffron))/20]">
                {/* Local Pricing */}
                <div className="mb-3 pb-3 border-b border-[hsl(var(--sacred-saffron))/20]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[hsl(var(--foreground))] font-semibold text-sm flex items-center gap-1">
                      <span className="text-lg">🏙️</span> Local Tariff
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs">Per Day</p>
                      <p className="text-[hsl(var(--sacred-saffron))] font-bold text-lg">{vehicle.localRent}</p>
                    </div>
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs">Diesel</p>
                      <p className="text-[hsl(var(--foreground))] font-semibold">{vehicle.localDiesel}</p>
                    </div>
                  </div>
                </div>

                {/* Outstation Pricing */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[hsl(var(--foreground))] font-semibold text-sm flex items-center gap-1">
                      <span className="text-lg">🛣️</span> Outstation
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs">Per KM</p>
                      <p className="text-[hsl(var(--sacred-saffron))] font-bold text-lg">{vehicle.outstationRate}</p>
                    </div>
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs">Min/Day</p>
                      <p className="text-[hsl(var(--foreground))] font-semibold">{vehicle.minKms}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {vehicle.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] text-sm font-['Lato']"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill="hsl(var(--sacred-saffron))"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="hsl(var(--sacred-saffron))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                <span>Book Now</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Terms & Conditions Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-2 border-[hsl(var(--temple-gold))/20]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* What's Included */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold">
                What's Included
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--sacred-saffron))/10] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--sacred-saffron))/20] transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="hsl(var(--sacred-saffron))"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">
                    Driver Included
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                    Driver allowance is already included in the base fare
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--sacred-saffron))/10] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--sacred-saffron))/20] transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="hsl(var(--sacred-saffron))"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">
                    Clean & Well-Maintained Vehicles
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                    Regular servicing and sanitization for your safety
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--sacred-saffron))/10] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--sacred-saffron))/20] transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="hsl(var(--sacred-saffron))"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">
                    Experienced & Verified Drivers
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                    Professional drivers with valid licenses and local knowledge
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--sacred-saffron))/10] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--sacred-saffron))/20] transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="hsl(var(--sacred-saffron))"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">
                    Garage to Garage Calculation
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                    Fair and transparent distance measurement
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Additional Charges */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--kumkum-red))] to-[hsl(var(--sacred-saffron))] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">₹</span>
              </div>
              <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold">
                Additional Charges
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))/5] to-[hsl(var(--kumkum-red))/5] border border-[hsl(var(--sacred-saffron))/20] hover:border-[hsl(var(--sacred-saffron))/40] transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍽️</span>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">Driver Food</p>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">Per day charge</p>
                  </div>
                </div>
                <span className="text-[hsl(var(--sacred-saffron))] font-bold text-lg">₹300/day</span>
              </div>
              
              <div className="flex justify-between items-start p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))/5] to-[hsl(var(--kumkum-red))/5] border border-[hsl(var(--sacred-saffron))/20] hover:border-[hsl(var(--sacred-saffron))/40] transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛣️</span>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">Tolls & Parking</p>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">Highway & parking fees</p>
                  </div>
                </div>
                <span className="text-[hsl(var(--muted-foreground))] font-semibold">As actual</span>
              </div>
              
              <div className="flex justify-between items-start p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))/5] to-[hsl(var(--kumkum-red))/5] border border-[hsl(var(--sacred-saffron))/20] hover:border-[hsl(var(--sacred-saffron))/40] transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato']">State Taxes</p>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">Interstate permit fees</p>
                  </div>
                </div>
                <span className="text-[hsl(var(--muted-foreground))] font-semibold">As actual</span>
              </div>
            </div>
            
            {/* Important Note */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-[hsl(var(--temple-gold))/20] to-[hsl(var(--sacred-saffron))/10] border-l-4 border-[hsl(var(--sacred-saffron))]">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">ℹ️</span>
                <div>
                  <p className="text-[hsl(var(--foreground))] font-semibold mb-1 font-['Lato']">
                    Important Note
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    Starting and ending kilometers and days will be calculated from garage to garage for accurate and transparent billing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 pt-8 border-t-2 border-[hsl(var(--border))]">
          <div className="text-center">
            <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold mb-3">
              Ready to Book Your Ride?
            </h4>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 font-['Lato']">
              Contact us now for the best rates and availability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
                <span>📞</span>
                <span>Call: +91 98765 43210</span>
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-[hsl(var(--sacred-saffron))] text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold hover:bg-[hsl(var(--sacred-saffron))] hover:text-white transition-all flex items-center gap-2">
                <span>💬</span>
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
