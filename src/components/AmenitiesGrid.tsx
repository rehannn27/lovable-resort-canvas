import { 
  Wifi, 
  Car, 
  Shield, 
  Snowflake, 
  Coffee, 
  Headphones,
  Leaf,
  Clock
} from "lucide-react";

const amenities = [
  { icon: Wifi, name: "Complimentary WiFi" },
  { icon: Car, name: "Private Transport" },
  { icon: Shield, name: "In-Room Safe" },
  { icon: Snowflake, name: "Climate Control" },
  { icon: Coffee, name: "Premium Amenities" },
  { icon: Headphones, name: "24/7 Service" },
  { icon: Leaf, name: "Natural Toiletries" },
  { icon: Clock, name: "Flexible Check-in" },
];

const AmenitiesGrid = () => {
  return (
    <section className="py-20 px-6 bg-sand/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-16 heading-luxury">
          Thoughtful Amenities
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="text-center group resort-transition hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-ocean/10 rounded-full flex items-center justify-center group-hover:bg-ocean/20 resort-transition">
                <amenity.icon className="w-8 h-8 text-ocean" />
              </div>
              <p className="text-luxury text-sm font-medium">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;