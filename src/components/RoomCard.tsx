import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  name: string;
  description: string;
  image: string;
  attributes: string[];
  view: string;
  bed: string;
  occupancy: string;
  level: string;
  shower: string;
}

const RoomCard = ({ 
  name, 
  description, 
  image, 
  attributes, 
  view, 
  bed, 
  occupancy, 
  level, 
  shower 
}: RoomCardProps) => {
  return (
    <div className="luxury-card group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover resort-transition-gentle group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 resort-transition" />
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-playfair text-3xl heading-luxury">{name}</h3>
          <Badge variant="secondary" className="text-ocean bg-ocean/10 border-ocean/20">
            {view} View
          </Badge>
        </div>
        
        <p className="text-luxury mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Bed Type:</span>
            <span className="text-luxury font-medium">{bed}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Occupancy:</span>
            <span className="text-luxury font-medium">{occupancy}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Level:</span>
            <span className="text-luxury font-medium">{level}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shower:</span>
            <span className="text-luxury font-medium">{shower}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {attributes.map((attribute, index) => (
            <Badge key={index} variant="outline" className="text-xs border-sage text-sage-soft bg-sage/5">
              {attribute}
            </Badge>
          ))}
        </div>
        
        <Button className="w-full ocean-gradient text-white font-medium resort-transition hover:scale-105 border-0">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default RoomCard;