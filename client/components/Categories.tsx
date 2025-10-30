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
    image: "/placeholder.svg",
  },
  {
    name: "Sri kalahasti",
    description: "Rahu-Ketu temple tours",
    icon: "🕉️",
    image: "/srikalahasti.jpg",
  },
  {
    name: "Kanipakam",
    description: "Vinayaka darshan packages",
    icon: "🐘",
    image: "/placeholder.svg",
  },
  {
    name: "Talakona Falls",
    description: "Waterfall & temple trek",
    icon: "💧",
    image: "/placeholder.svg",
  },
  {
    name: "Horsley Hills",
    description: "Hill station getaway",
    icon: "⛰️",
    image: "/placeholder.svg",
  },
  {
    name: "Chandragiri Fort",
    description: "Historical heritage site",
    icon: "🏰",
    image: "/placeholder.svg",
  },
  {
    name: "Nagalapuram Falls",
    description: "Trekking & waterfalls",
    icon: "🏞️",
    image: "/placeholder.svg",
  },
  {
    name: "Sri Venkateswara Zoo",
    description: "Wildlife & nature park",
    icon: "🦁",
    image: "/placeholder.svg",
  },
  {
    name: "Papavinasanam",
    description: "Sacred waterfall temple",
    icon: "🙏",
    image: "/placeholder.svg",
  },
  {
    name: "Akasa Ganga",
    description: "Mountain spring trek",
    icon: "⛲",
    image: "/placeholder.svg",
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
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[100%] sm:basis-[60%] md:basis-1/2 lg:basis-1/4">
                <div className="group cursor-pointer h-full">
                  {/* Premium Card Container */}
                  <div className="relative w-full aspect-video sm:aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#e0e0e0] hover:border-[#34a870] bg-gradient-to-br from-white to-[#f9f9f9]">
                    {/* Background Image with Premium Effects */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    
                    {/* Multi-layer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-[#34a870]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Name - On Image */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-2 sm:px-4 text-center">
                      <h3 className="text-white font-['Playfair_Display'] text-lg sm:text-xl lg:text-2xl font-bold leading-tight drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                    
                    {/* Description - Bottom Area */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-6 sm:pt-8 pb-3 sm:pb-4 px-3 sm:px-4 transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-xs sm:text-base font-['Lato'] font-medium text-center drop-shadow-lg line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                    
                    {/* Animated Corner Accents */}
                    <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-[#34a870]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-[#34a870]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                  </div>
                  
                  {/* Travel Here Button - Below Image */}
                  <button className="w-full px-4 py-3 sm:py-4 rounded-xl font-['Lato'] font-bold text-sm sm:text-base transition-all duration-300 bg-gradient-to-r from-[#34a870] to-[#5dbd7f] text-white hover:shadow-lg hover:shadow-[#34a870]/40 hover:-translate-y-1 uppercase tracking-wide">
                    Travel Here
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Premium Carousel Controls */}
          <CarouselPrevious className="left-0 sm:-left-6 lg:-left-8 w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 border-2 border-[#34a870] bg-white text-[#34a870] hover:bg-[#34a870] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center" />
          <CarouselNext className="right-0 sm:-right-6 lg:-right-8 w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 border-2 border-[#34a870] bg-white text-[#34a870] hover:bg-[#34a870] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center" />
        </Carousel>
        
        {/* Premium Mobile Swipe Indicator */}
        <div className="flex sm:hidden justify-center mt-8">
          <div className="text-[#34a870] text-xs sm:text-sm font-['Lato'] flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#f0f9f6] to-white border-2 border-[#34a870]/40 font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all">
            <span className="text-xl animate-bounce">←</span>
            <span>Swipe for More</span>
            <span className="text-xl animate-bounce">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
