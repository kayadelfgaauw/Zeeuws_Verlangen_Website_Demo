import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';

gsap.registerPlugin(ScrollTrigger);

const menuData = [
  {
    id: "voorgerechten",
    category: "Voorgerechten",
    letter: "V",
    color: "#E8E2D2", // Sand
    image: "Resort land en zee - april 2026-82.webp",
    items: [
      { name: "Soep van de dag", price: "8,50", desc: "Wisselende seizoenssoep, geserveerd met boerenbrood" },
      { name: "Gamba's uit de oven", price: "14,50", desc: "In knoflook en rode peper gebakken" },
      { name: "Vissoep", price: "12,50", desc: "Rijkgevuld met dagverse vis en zeevruchten" },
      { name: "Mosselen", price: "13,50", desc: "Uit de oven, gegratineerd met kruidenboter en Parmezaan" },
      { name: "Carpaccio", price: "15,50", desc: "Keuze uit mals rundvlees of gerookte zalm" }
    ]
  },
  {
    id: "vlees",
    category: "Vlees",
    letter: "M", // Meat
    color: "#DBCBBF", // Warm clay
    image: "Resort land en zee - april 2026-50.webp",
    items: [
      { name: "Varkenshaas", price: "24,50", desc: "Van de grill, met huisgemaakte chimichurri" },
      { name: "Spareribs", price: "23,50", desc: "Slow-cooked en afgelakt, met knoflooksaus" },
      { name: "Entrecote", price: "28,50", desc: "Mals gesneden rundvlees met rijke kruidenboter" },
      { name: "Smashburger", price: "19,50", desc: "250 gr. beef met tomaat, kaas en barbecuesaus" }
    ]
  },
  {
    id: "vis",
    category: "Vis",
    letter: "S", // Seafood
    color: "#C6D1D3", // Sea breeze
    image: "Resort land en zee - april 2026-34.webp",
    items: [
      { name: "Zalmfilet", price: "26,50", desc: "Op de huid gebakken, met paprika-roomsaus" },
      { name: "Kabeljauwfilet", price: "25,50", desc: "Uit de oven, met mediterrane kruiden en witte wijn" },
      { name: "Scholfilet", price: "23,50", desc: "Met een saus van room, kappertjes, ui, paprika en mosterd" },
      { name: "Catch of the day", price: "Dagprijs", desc: "De mooiste verse vangst uit de Zeeuwse wateren" }
    ]
  },
  {
    id: "vegetarisch",
    category: "Vegetarisch",
    letter: "G", // Green
    color: "#D3DAC6", // Sage green
    image: "Resort land en zee - april 2026-39.webp",
    items: [
      { name: "Lasagne", price: "19,50", desc: "Vegetarisch, met geroosterde groenten en romige bechamelsaus" },
      { name: "Putanesca", price: "18,50", desc: "Rijke tomatensaus met olijven, kappertjes, ui en knoflook" },
      { name: "Ravioli", price: "20,50", desc: "Gevuld met spinazie & ricotta, afgewerkt met een lichte roomsaus" }
    ]
  },
  {
    id: "desserts",
    category: "Desserts",
    letter: "D",
    color: "#E5D2D6", // Soft rose
    image: "Resort land en zee - april 2026-87.webp",
    items: [
      { name: "Cheesecake", price: "8,50", desc: "Huisgemaakt, met een wisselende seizoenscompote" },
      { name: "Tiramisu", price: "9,00", desc: "Klassiek Italiaans met een vleugje amaretto" },
      { name: "Dame Blanche", price: "8,50", desc: "Vanille-ijs overgoten met warme chocoladesaus" },
      { name: "Zeeuwse bolus", price: "9,50", desc: "Warm geserveerd met romig vanille-ijs" }
    ]
  }
];

export default function App() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(menuData[0]);

  useEffect(() => {
    // Override the layout body classes to enforce a light, airy canvas theme
    document.body.classList.remove('bg-background', 'text-textDark', 'bg-textDark', 'text-background');
    document.body.classList.add('bg-[#FDFCF8]', 'text-textDark');

    let ctx = gsap.context(() => {
      // Setup ScrollTriggers for each category section to update the active state
      menuData.forEach((cat) => {
        ScrollTrigger.create({
          trigger: `#section-${cat.id}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => updateActiveCategory(cat),
          onEnterBack: () => updateActiveCategory(cat),
        });
        
        // Parallax for the huge vertical title
        gsap.to(`#title-${cat.id}`, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: `#section-${cat.id}`,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
      
      // Hero entry animation
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );

    }, containerRef);
    
    return () => {
      ctx.revert();
      // Reset body class
      document.body.classList.add('bg-background', 'text-textDark');
      document.body.classList.remove('bg-[#FDFCF8]');
    };
  }, []);

  const updateActiveCategory = (cat) => {
    setActiveCategory(cat);
    // Animate the viewfinder background color
    gsap.to('.viewfinder-bg', {
      backgroundColor: cat.color,
      duration: 1.2,
      ease: 'power2.out'
    });
  };

  return (
    <Layout>
      <div ref={containerRef} className="relative w-full min-h-screen font-light text-textDark selection:bg-accent selection:text-white pb-32">
        
        {/* Mobile Viewfinder Header (Visible only on small screens) */}
        <div 
          className="lg:hidden sticky top-20 z-40 w-full h-32 md:h-48 transition-colors duration-1000 flex items-center justify-center overflow-hidden border-b border-textDark/10 relative"
          style={{ backgroundColor: activeCategory.color }}
        >
          {menuData.map((cat) => (
            <div 
              key={cat.id}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url('/images/${cat.image}')`,
                opacity: activeCategory.id === cat.id ? 0.7 : 0 
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute bottom-4 text-center w-full z-10">
            <span className="font-heading text-[0.6rem] tracking-[0.3em] uppercase text-white/70">
              Chapter
            </span>
            <p className="font-heading text-sm md:text-base tracking-widest uppercase mt-1 text-white">
              {activeCategory.category}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full relative">
          
          {/* Left Column: Scrolling Content */}
          <div className="w-full lg:w-[55%] xl:w-[60%] px-6 lg:px-16 xl:px-24 pt-32 lg:pt-48">
            
            {/* Hero Section */}
            <header className="mb-40 max-w-2xl">
              <span className="hero-text block font-heading tracking-[0.3em] uppercase text-xs md:text-sm text-textDark/50 mb-8 border-l border-textDark/30 pl-4">
                Restaurant Zeeuws Verlangen
              </span>
              <h1 className="hero-text font-heading text-6xl md:text-8xl xl:text-[7rem] tracking-tight uppercase leading-[0.85] mb-12">
                A la <br/>
                <span className="font-drama italic text-accent lowercase text-7xl md:text-9xl xl:text-[9rem] tracking-normal -ml-2">Carte</span>
              </h1>
              <p className="hero-text font-light text-lg md:text-xl text-textDark/70 leading-relaxed">
                Een culinaire ontdekkingsreis geïnspireerd door land en zee. Ontdek onze met passie samengestelde menukaart, ontworpen als een symfonie van smaken.
              </p>
            </header>

            {/* Menu Sections */}
            <div className="space-y-32 lg:space-y-48">
              {menuData.map((category) => (
                <section key={category.id} id={`section-${category.id}`} className="relative flex">
                  
                  {/* Vertical Title (Desktop only) */}
                  <div className="hidden lg:block w-24 relative shrink-0">
                    <div id={`title-${category.id}`} className="absolute top-0 left-0 -rotate-90 origin-top-left translate-y-full ml-8 whitespace-nowrap">
                      <h2 className="font-heading text-4xl xl:text-5xl uppercase tracking-[0.2em] text-textDark/10">
                        {category.category}
                      </h2>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="w-full flex-grow space-y-12 mt-12 lg:mt-0">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="group relative">
                        <div className="flex items-baseline justify-between mb-2 overflow-hidden">
                          <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide group-hover:text-accent transition-colors duration-500">
                            {item.name}
                          </h3>
                          <div className="flex-grow mx-4 border-b border-dotted border-textDark/20 relative top-[-6px]"></div>
                          <span className="font-light text-lg md:text-xl shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="font-light text-sm md:text-base text-textDark/60 max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            
            <div className="h-[20vh]"></div> {/* Padding at the bottom */}
          </div>

          {/* Right Column: Sticky Viewfinder (Desktop only) */}
          <div className="hidden lg:block lg:w-[45%] xl:w-[40%] relative">
            <div className="sticky top-0 h-screen w-full p-8 pt-32 xl:p-12 xl:pt-48">
              <div 
                ref={rightPanelRef}
                className="viewfinder-bg w-full h-full rounded-2xl overflow-hidden relative flex flex-col items-center justify-center shadow-2xl transition-colors duration-700 ease-out"
                style={{ backgroundColor: menuData[0].color }}
              >
                {/* Background images */}
                {menuData.map((cat) => (
                  <div 
                    key={cat.id}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                    style={{ 
                      backgroundImage: `url('/images/${cat.image}')`,
                      opacity: activeCategory.id === cat.id ? 1 : 0 
                    }}
                  />
                ))}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Minimalist corners framing the viewfinder */}
                <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/40 z-10"></div>
                <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/40 z-10"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/40 z-10"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/40 z-10"></div>

                {/* Subtle indicator of current category */}
                <div className="absolute bottom-12 text-center w-full z-10">
                  <span className="font-heading text-xs tracking-[0.3em] uppercase text-white/60">
                    Chapter
                  </span>
                  <p className="font-heading text-xl tracking-widest uppercase mt-2 text-white">
                    {activeCategory.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
