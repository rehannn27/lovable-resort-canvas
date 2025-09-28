import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-playfair text-2xl font-medium text-ocean">
          Serenity Resort
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#rooms" className="text-luxury hover:text-ocean resort-transition font-medium">
            Rooms
          </a>
          <a href="#amenities" className="text-luxury hover:text-ocean resort-transition font-medium">
            Amenities
          </a>
          <a href="#contact" className="text-luxury hover:text-ocean resort-transition font-medium">
            Contact
          </a>
          <Button className="ocean-gradient text-white font-medium resort-transition hover:scale-105 border-0">
            Book Now
          </Button>
        </div>
        
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;