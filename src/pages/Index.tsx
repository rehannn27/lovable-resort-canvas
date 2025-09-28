import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import RoomCard from "@/components/RoomCard";
import Footer from "@/components/Footer";

// Import room images
import roomOcean from "@/assets/room-ocean.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import villaBeachfront from "@/assets/villa-beachfront.jpg";

const rooms = [
  {
    name: "Serenity",
    description: "A peaceful sanctuary with breathtaking ocean views, where the sound of waves creates a natural symphony. Features elegant furnishings and private balcony overlooking the endless horizon.",
    image: roomOcean,
    attributes: ["Private Balcony", "Ocean Breeze", "Sunset Views", "Premium Linens"],
    view: "Ocean",
    bed: "King Bed",
    occupancy: "2 Guests",
    level: "Upper Level",
    shower: "Indoor & Outdoor"
  },
  {
    name: "Tranquil",
    description: "Immersed in lush tropical gardens, this room offers complete privacy and connection with nature. Wake up to birdsong and gentle morning light filtering through ancient trees.",
    image: roomGarden,
    attributes: ["Garden Immersion", "Bird Watching", "Natural Light", "Zen Design"],
    view: "Garden",
    bed: "King Bed",
    occupancy: "2 Guests",
    level: "Ground Level",
    shower: "Rainfall Shower"
  },
  {
    name: "Paradise",
    description: "The ultimate expression of luxury living with direct beach access and private pool. An exclusive retreat where every moment feels like paradise found.",
    image: villaBeachfront,
    attributes: ["Private Pool", "Beach Access", "Butler Service", "Wine Cellar"],
    view: "Beachfront",
    bed: "Master Suite",
    occupancy: "4 Guests",
    level: "Beachfront Villa",
    shower: "Infinity Pool Shower"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AmenitiesGrid />
      
      <section id="rooms" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl mb-6 heading-luxury">
              Luxury Accommodations
            </h2>
            <p className="text-xl text-luxury max-w-3xl mx-auto leading-relaxed">
              Each room is thoughtfully designed to create an intimate connection between you and the natural beauty that surrounds our resort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 sand-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 heading-luxury">
            Experience Intentional Luxury
          </h2>
          <p className="text-xl text-luxury mb-8 leading-relaxed">
            Every detail has been carefully considered to create spaces that nurture the soul and inspire lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="ocean-gradient text-white font-medium px-8 py-4 rounded-lg resort-transition hover:scale-105 text-lg">
              Book Your Retreat
            </button>
            <button className="bg-white/80 text-ocean font-medium px-8 py-4 rounded-lg resort-transition hover:bg-white border border-ocean/20 text-lg">
              View Gallery
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
