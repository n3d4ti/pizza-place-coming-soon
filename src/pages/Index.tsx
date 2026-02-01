import pizzaHero from "@/assets/pizza-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section with Background */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pizzaHero})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Pizza Icon */}
          <div className="mb-6 text-6xl">🍕</div>
          
          {/* Restaurant Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            La Bella Pizza
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 italic">
            Authentic Italian Flavors
          </p>
          
          {/* Under Construction Badge */}
          <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold mb-8 animate-pulse">
            🚧 Site Under Development 🚧
          </div>
          
          {/* Message */}
          <p className="text-primary-foreground/90 text-lg mb-10 leading-relaxed">
            We're cooking up something special! Our new website is coming soon. 
            In the meantime, visit us in person for the best wood-fired pizza in town.
          </p>
          
          {/* Contact Info */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-foreground text-xl font-semibold mb-4">Visit Us</h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>123 Pizza Street, Little Italy</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span>(555) 123-PIZZA</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>🕐</span>
                <span>Open Daily: 11am - 10pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground/70 text-center py-4 text-sm">
        © 2025 La Bella Pizza. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
