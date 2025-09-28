import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl mb-6">Serenity Resort</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Where luxury meets tranquility. Experience the pinnacle of hospitality in our carefully curated accommodations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-ocean-light hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-ocean-light hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-ocean-light hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-light" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-light" />
                <span className="text-white/80">info@serenityresort.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-ocean-light" />
                <span className="text-white/80">Paradise Island, Caribbean</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#rooms" className="block text-white/80 hover:text-ocean-light resort-transition">
                Rooms & Suites
              </a>
              <a href="#amenities" className="block text-white/80 hover:text-ocean-light resort-transition">
                Amenities
              </a>
              <a href="#dining" className="block text-white/80 hover:text-ocean-light resort-transition">
                Dining
              </a>
              <a href="#spa" className="block text-white/80 hover:text-ocean-light resort-transition">
                Spa & Wellness
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center">
          <Button className="sand-gradient text-ocean font-medium px-8 py-3 mb-6 resort-transition hover:scale-105">
            Book Your Stay
          </Button>
          <p className="text-white/60 text-sm">
            © 2024 Serenity Resort. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;