import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { Car, Users, ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Sri Venkateswara Temple",
    subtitle: "Divine Darshan & Prasadam",
    price: "₹2,500",
    image: "/tirmula2.png",
    featured: true,
    description: "Experience the divine presence of Lord Balaji at Tirumala",
    duration: "1 Day",
  },
  {
    title: "Srikalahasti Temple",
    subtitle: "Rahu-Ketu Pooja Special",
    price: "₹2,800",
    image: "/srikalahasti.jpg",
    description: "Famous for Rahu-Ketu dosham removal, 36 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Kanipakam Vinayaka",
    subtitle: "Swayambhu Ganesha Temple",
    price: "₹2,200",
    image: "/kanipakam_vinayaka.jpg",
    description: "Self-manifested Vinayaka idol, 70 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Chandragiri Fort",
    subtitle: "Historical Heritage Site",
    price: "₹1,800",
    image: "/chandragiri_fort.jpg",
    description: "11th-century fort with palaces, just 15 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Talakona Waterfalls",
    subtitle: "Highest Waterfall in AP",
    price: "₹3,200",
    image: "/Talakona_waterfall.jpg",
    featured: true,
    description:
      "270 feet waterfall in Sri Venkateswara National Park, 50 km away",
    duration: "1 Day",
  },
  {
    title: "Srinivasam Mangapuram",
    subtitle: "Ancient Vishnu Temple",
    price: "₹2,000",
    image: "/srinivasa_mangapuram.jpg",
    description:
      "Lord Venkateswara temple where He got ready for marriage, 12 km away",
    duration: "Half Day",
  },
  {
    title: "Sri Venkateswara Zoo",
    subtitle: "Wildlife & Nature Park",
    price: "₹1,500",
    image: "/zoo.jpg",
    description: "One of the best zoos in South India, within Tirupati city",
    duration: "Half Day",
  },
];

export default function PopularDestinations() {
  const { toast } = useToast();

  const handleBooking = (destinationTitle: string, price: string) => {
    toast({
      title: "🙏 Booking Request Received!",
      description: (
        <div className="mt-2 space-y-2">
          <p className="font-semibold text-[hsl(var(--sacred-saffron))]">
            {destinationTitle}
          </p>
          <p className="text-sm">Price: <span className="font-bold">{price}/person</span></p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            Our team will contact you shortly to confirm your pilgrimage booking.
          </p>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-20 bg-[hsl(var(--background))]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 px-2 sm:px-0">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-[hsl(var(--sacred-saffron))/10] mb-4">
            <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-semibold text-sm tracking-wide">
              SACRED DESTINATIONS
            </span>
          </div>
          <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Tirupati Region
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] bg-clip-text text-transparent">
              Sacred Destinations
            </span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-sm sm:text-base max-w-xl">
            Explore divine temples, historic forts, and scenic waterfalls in and around Tirupati
          </p>
        </div>
      </div>

      <div className="relative px-2 sm:px-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[90%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3">
                <div className="group h-full bg-gradient-to-br from-white to-[#f9f9f9] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#e0e0e0] hover:border-[#34a870] relative">
                  {/* Featured badge - premium style */}
                  {destination.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#34a870] to-[#5dbd7f] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg">
                      ⭐ Popular
                    </div>
                  )}

                  {/* Image - premium styling with overlay */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      width={724}
                      height={480}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Duration badge - premium positioning */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                      <span className="text-[10px] font-bold text-[#34a870] font-['Lato'] uppercase tracking-wide">
                        ⏱ {destination.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content - premium layout */}
                  <div className="p-5 sm:p-6 flex flex-col">
                    {/* Title section */}
                    <div className="mb-3">
                      <h3 className="text-[#1a4d32] font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1 leading-tight group-hover:text-[#34a870] transition-colors">
                        {destination.title}
                      </h3>
                      <p className="text-[#34a870] font-['Lato'] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        {destination.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#666666] font-['Lato'] text-sm leading-relaxed mb-4 line-clamp-2">
                      {destination.description}
                    </p>

                    {/* Highlights/Benefits */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#34a870]">✓</span>
                        <span className="text-[#555555] font-['Lato']">Guided tours included</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#34a870]">✓</span>
                        <span className="text-[#555555] font-['Lato']">Comfortable transportation</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-[#34a870]/20 via-[#34a870] to-[#34a870]/20 rounded-full mb-4"></div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[#34a870] font-['Playfair_Display'] text-2xl sm:text-3xl font-bold">
                          {destination.price}
                        </span>
                        <span className="text-[#999999] font-['Lato'] text-xs ml-1">/person</span>
                      </div>
                      <button 
                        onClick={() => handleBooking(destination.title, destination.price)}
                        className="px-5 py-2.5 rounded-xl font-['Lato'] font-bold text-sm transition-all duration-300 bg-gradient-to-r from-[#34a870] to-[#5dbd7f] text-white hover:shadow-lg hover:shadow-[#34a870]/40 hover:-translate-y-0.5 uppercase tracking-wide"
                      >
                        Explore
                      </button>
                    </div>

                    {/* Premium features row - compact */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#e8e8e8]">
                      <div className="flex items-center gap-1.5 text-[#34a870]">
                        <Car className="w-4 h-4" />
                        <span className="text-xs font-['Lato'] font-medium">Transfer</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#34a870]">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-['Lato'] font-medium">Guide</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#34a870]">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-['Lato'] font-medium">Darshan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Premium carousel controls */}
          <CarouselPrevious className="left-0 sm:-left-6 lg:-left-8 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#34a870] bg-white text-[#34a870] hover:bg-[#34a870] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" />
          <CarouselNext className="right-0 sm:-right-6 lg:-right-8 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#34a870] bg-white text-[#34a870] hover:bg-[#34a870] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" />
        </Carousel>
        
        {/* Mobile swipe indicator - premium style */}
        <div className="flex sm:hidden justify-center mt-8">
          <div className="text-[#34a870] text-xs font-['Lato'] flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#f0f9f6] to-white border-2 border-[#34a870]/30 font-semibold uppercase tracking-wider">
            <ArrowRight className="w-4 h-4 animate-bounce -scale-x-100" />
            <span>Swipe for More</span>
            <ArrowRight className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
