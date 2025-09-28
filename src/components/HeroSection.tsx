import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-resort.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-6 heading-luxury text-white">
          Rooms & Property
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          Intentional luxury crafted from the finest materials, where every detail speaks to the soul of tranquility
        </p>
        <Button 
          size="lg" 
          className="ocean-gradient text-white font-medium px-8 py-4 text-lg resort-transition hover:scale-105 border-0"
        >
          Explore Our Rooms
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;