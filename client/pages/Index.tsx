import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import PopularDestinations from "@/components/PopularDestinations";
import VehicleFleet from "@/components/VehicleFleet";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Fleet Section */}
        <section id="fleet">
          <VehicleFleet />
        </section>
        
        {/* About Section */}
        <section id="about">
          <Features />
        </section>
        
        {/* Destinations Section */}
        <section id="destinations">
          <Categories />
        </section>
        
        {/* Darshanam Packages Section */}
        <section id="packages">
          <PopularDestinations />
        </section>
        
        
        
        {/* Contact/Newsletter Section
        <section id="contact">
          <Newsletter />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
