import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";

const destinations = [
  {
    title: "Sri Venkateswara Temple",
    subtitle: "Divine Darshan & Prasadam",
    price: "₹2,500",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=724&h=480&fit=crop",
    featured: true,
    description: "Experience the divine presence of Lord Balaji at Tirumala",
    duration: "1 Day",
  },
  {
    title: "Srikalahasti Temple",
    subtitle: "Rahu-Ketu Pooja Special",
    price: "₹2,800",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=724&h=480&fit=crop",
    description: "Famous temple for Rahu-Ketu dosham removal, 36 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Kanipakam Vinayaka",
    subtitle: "Swayambhu Ganesha Temple",
    price: "₹2,200",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=724&h=480&fit=crop",
    description: "Self-manifested Vinayaka idol, 70 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Chandragiri Fort",
    subtitle: "Historical Heritage Site",
    price: "₹1,800",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=724&h=480&fit=crop",
    description: "11th-century fort with palaces, just 15 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Talakona Waterfalls",
    subtitle: "Highest Waterfall in AP",
    price: "₹3,200",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=724&h=480&fit=crop",
    featured: true,
    description: "270 feet waterfall in Sri Venkateswara National Park, 50 km away",
    duration: "1 Day",
  },
  {
    title: "Srinivasam Mangapuram",
    subtitle: "Ancient Vishnu Temple",
    price: "₹2,000",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=724&h=480&fit=crop",
    description: "Lord Venkateswara temple where He got ready for marriage, 12 km away",
    duration: "Half Day",
  },
  {
    title: "Horsley Hills",
    subtitle: "Hill Station Retreat",
    price: "₹4,500",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=724&h=480&fit=crop",
    description: "Scenic hill station at 4,312 feet, 144 km from Tirupati",
    duration: "1 Day",
  },
  {
    title: "Sri Venkateswara Zoo",
    subtitle: "Wildlife & Nature Park",
    price: "₹1,500",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=724&h=480&fit=crop",
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
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[85%] sm:basis-[75%] md:basis-1/2 lg:basis-1/3">
              <div className="group h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[hsl(var(--border))]">
                {/* Featured badge - cleaner design */}
                {destination.featured && (
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-[hsl(var(--sacred-saffron))] text-white text-[10px] font-bold uppercase tracking-wider">
                    Popular
                  </div>
                )}

                {/* Image - reduced height for cleaner look */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    width={724}
                    height={480}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Duration badge - simplified */}
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm">
                    <span className="text-[10px] font-semibold text-[hsl(var(--foreground))] font-['Lato'] uppercase tracking-wide">
                      {destination.duration}
                    </span>
                  </div>
                </div>

                {/* Content - more compact and clean */}
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold mb-0.5 leading-tight">
                      {destination.title}
                    </h3>
                    <p className="text-[hsl(var(--sacred-saffron))] font-['Lato'] text-xs font-medium">
                      {destination.subtitle}
                    </p>
                  </div>

                  <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-xs leading-relaxed mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Price and CTA - cleaner layout */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-xl font-bold">
                        {destination.price}
                      </span>
                      <span className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-[10px]"> /person</span>
                    </div>
                    <button 
                      onClick={() => handleBooking(destination.title, destination.price)}
                      className="px-4 py-1.5 rounded-lg font-['Lato'] font-semibold text-xs transition-all bg-[hsl(var(--sacred-saffron))] text-white hover:bg-[hsl(var(--sacred-saffron))]/90"
                    >
                      Book Now
                    </button>
                  </div>

                  {/* Facilities - minimal icons only */}
                  <div className="flex items-center justify-center gap-4 pt-3 border-t border-[hsl(var(--border))]">
                    <div className="flex items-center gap-1 text-[hsl(var(--muted-foreground))] text-[10px] font-['Lato']">
                      <span className="text-sm">🚗</span>
                    </div>
                    <div className="flex items-center gap-1 text-[hsl(var(--muted-foreground))] text-[10px] font-['Lato']">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex items-center gap-1 text-[hsl(var(--muted-foreground))] text-[10px] font-['Lato']">
                      <span className="text-sm">🙏</span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:-left-4 lg:-left-6 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-[hsl(var(--border))] bg-white hover:bg-[hsl(var(--sacred-saffron))] hover:border-[hsl(var(--sacred-saffron))] hover:text-white transition-all" />
        <CarouselNext className="right-0 sm:-right-4 lg:-right-6 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-[hsl(var(--border))] bg-white hover:bg-[hsl(var(--sacred-saffron))] hover:border-[hsl(var(--sacred-saffron))] hover:text-white transition-all" />
      </Carousel>
      
      {/* Mobile swipe indicator - minimal */}
      <div className="flex sm:hidden justify-center mt-6">
        <div className="text-[hsl(var(--muted-foreground))] text-[10px] font-['Lato'] flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--border))]">
          <span className="text-xs">←</span>
          <span className="uppercase tracking-wider">Swipe</span>
          <span className="text-xs">→</span>
        </div>
      </div>
      </div>
    </section>
  );
}
