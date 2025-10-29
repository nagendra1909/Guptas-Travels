import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  {
    name: "Tirupati Temples",
    description: "Lord Venkateswara & nearby shrines",
    icon: "🛕",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=340&h=240&fit=crop",
  },
  {
    name: "Sri kalahasti",
    description: "Rahu-Ketu temple tours",
    icon: "🕉️",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=340&h=240&fit=crop",
  },
  {
    name: "Kanipakam",
    description: "Vinayaka darshan packages",
    icon: "🐘",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=940&h=480&fit=crop",
  },
  {
    name: "Talakona Falls",
    description: "Waterfall & temple trek",
    icon: "💧",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=340&h=240&fit=crop",
  },
  {
    name: "Horsley Hills",
    description: "Hill station getaway",
    icon: "⛰️",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=340&h=240&fit=crop",
  },
  {
    name: "Chandragiri Fort",
    description: "Historical heritage site",
    icon: "🏰",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=340&h=240&fit=crop",
  },
  {
    name: "Nagalapuram Falls",
    description: "Trekking & waterfalls",
    icon: "🏞️",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=340&h=240&fit=crop",
  },
  {
    name: "Sri Venkateswara Zoo",
    description: "Wildlife & nature park",
    icon: "🦁",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=340&h=240&fit=crop",
  },
  {
    name: "Papavinasanam",
    description: "Sacred waterfall temple",
    icon: "🙏",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=340&h=240&fit=crop",
  },
  {
    name: "Akasa Ganga",
    description: "Mountain spring trek",
    icon: "⛲",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=340&h=240&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 px-2 sm:px-0">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 rounded-full bg-[hsl(var(--temple-gold))/10] mb-4">
            <span className="text-[hsl(var(--temple-gold))] font-['Lato'] font-semibold text-sm tracking-wide">
              TOUR PACKAGES
            </span>
          </div>
          <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Tirupati Region
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))] bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-sm sm:text-base">
            Explore sacred temples, scenic waterfalls, and natural wonders around Tirupati
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
            {categories.map((category, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[45%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-sm hover:shadow-md transition-all duration-300 border border-[hsl(var(--border))]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  
                  {/* Icon badge - cleaner */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  
                  {/* Description - cleaner positioning */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-[10px] font-['Lato'] font-medium text-center leading-tight drop-shadow-lg">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-sm font-semibold text-center leading-tight group-hover:text-[hsl(var(--temple-gold))] transition-colors px-1">
                  {category.name}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:-left-4 lg:-left-6 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-[hsl(var(--border))] bg-white hover:bg-[hsl(var(--temple-gold))] hover:border-[hsl(var(--temple-gold))] hover:text-white transition-all" />
        <CarouselNext className="right-0 sm:-right-4 lg:-right-6 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-[hsl(var(--border))] bg-white hover:bg-[hsl(var(--temple-gold))] hover:border-[hsl(var(--temple-gold))] hover:text-white transition-all" />
      </Carousel>
      
      {/* Mobile swipe indicator - minimal */}
      <div className="flex sm:hidden justify-center mt-6">
        <div className="text-[hsl(var(--muted-foreground))] text-[10px] font-['Lato'] flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[hsl(var(--border))]">
          <span className="text-xs">←</span>
          <span className="uppercase tracking-wider">Swipe</span>
          <span className="text-xs">→</span>
        </div>
      </div>
      </div>
    </section>
  );
}
