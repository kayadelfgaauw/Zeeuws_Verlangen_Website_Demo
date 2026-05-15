import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';

gsap.registerPlugin(ScrollTrigger);

const lunchCategories = [
  {
    title: "Zeeuwse Klassiekers",
    desc: "Met liefde bereid op rustiek landbrood",
    items: [
      { title: "Uitsmijter Ham & Kaas", price: "12,50", desc: "Drie eieren met ham en kaas, geserveerd op rustiek Zeeuws brood met een kleine salade." },
      { title: "Rundvleeskroketten", price: "11,50", desc: "Twee rundvleeskroketten op rustiek Zeeuws brood, geserveerd met mosterd en een kleine salade." },
      { title: "Broodje Carpaccio", price: "15,50", desc: "Dungesneden rundercarpaccio op rustiek Zeeuws brood, met rucola, pijnboompitten, Parmezaanse kaas en truffelmayonaise." },
      { title: "Gerookte Zalm", price: "16,50", desc: "Gerookte zalm op rustiek Zeeuws brood met roomkaas, rode ui, kappertjes en een kleine salade." },
      { title: "Tosti Ham & Kaas", price: "8,50", desc: "Geroosterd rustiek Zeeuws brood met ham en kaas, geserveerd met ketchup en een kleine salade." },
    ]
  },
  {
    title: "Warm & Hartig",
    desc: "Voor de stevige trek",
    items: [
      { title: "Soep van de Dag", price: "7,50", desc: "Dagvers bereide soep, geserveerd met rustiek Zeeuws brood. Vraag onze medewerkers naar de soep." },
      { title: "Signature Hamburger", price: "18,50", desc: "Runderhamburger met kaas, sla, tomaat en barbecuesaus, geserveerd met frietjes en een kleine salade." },
      { title: "Friet met Snack", price: "9,50", desc: "Friet met een snack naar keuze: frikandel, kroket, kaassoufflé of kipnuggets. Met saus naar keuze." }
    ]
  }
];

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-elem', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // Line animation
      gsap.fromTo('.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', delay: 0.5 }
      );

      // Category titles
      gsap.utils.toArray('.category-header').forEach((header) => {
        gsap.fromTo(header,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: header,
              start: "top 85%"
            }
          }
        );
      });

      // Menu items staggered
      gsap.utils.toArray('.menu-category').forEach((category) => {
        const items = category.querySelectorAll('.lunch-item');
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: {
              trigger: category,
              start: "top 80%"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={containerRef} className="min-h-screen bg-[#FDFCF8] text-textDark selection:bg-accent selection:text-white pb-32 pt-32 lg:pt-48 relative overflow-hidden">
        
        {/* Subtle Background Pattern / Noise */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24 md:mb-32 items-end">
            <div className="flex-1">
              <span className="hero-elem block font-heading text-accent uppercase tracking-[0.3em] text-sm mb-6 border-l border-accent/40 pl-4">
                Middag & Genieten
              </span>
              <h1 className="hero-elem font-heading text-6xl md:text-8xl lg:text-[9rem] tracking-tight uppercase leading-[0.85] text-primary">
                Lunch
              </h1>
              <div className="hero-elem font-drama text-4xl md:text-6xl text-accent italic mt-2 md:mt-0 md:-ml-2">
                aan de Zeeuwse Kust
              </div>
            </div>
            <div className="flex-1 pb-2 md:pb-8">
              <p className="hero-elem font-light text-lg md:text-xl text-textDark/70 leading-relaxed max-w-lg">
                Laat de zilte zeelucht uw eetlust opwekken. Geniet van kraakverse ingrediënten, ambachtelijk bereid en geserveerd met een warme glimlach.
              </p>
            </div>
          </div>

          <div className="hero-line w-full h-px bg-textDark/10 origin-left mb-16 md:mb-24"></div>

          {/* Menu Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Decorative/Nav Column */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40">
                <p className="font-heading text-xs tracking-[0.2em] uppercase text-textDark/40 mb-6 border-l border-textDark/20 pl-4">
                  Onze Keuken
                </p>
                <ul className="space-y-4 font-light text-sm text-textDark/60 mb-16">
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Dagverse Producten
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Ambachtelijk Brood
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Liefde voor het Vak
                  </li>
                </ul>
                
                {/* Decorative Element */}
                <div className="w-32 h-48 border border-accent/20 rounded-t-full flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:border-accent/40 transition-colors duration-500">
                  <div className="absolute inset-0 bg-accent/5"></div>
                  <span className="font-drama text-7xl text-accent opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700">L</span>
                  <div className="absolute bottom-4 w-full text-center">
                    <span className="block font-heading text-[0.5rem] tracking-[0.3em] uppercase text-textDark/30">Est. 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-9 space-y-24 md:space-y-32">
              {lunchCategories.map((cat, index) => (
                <div key={index} className="menu-category">
                  <div className="category-header mb-12 md:mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl text-primary uppercase tracking-wider mb-2 md:mb-4 flex items-center gap-6">
                      {cat.title}
                      <span className="flex-1 h-px bg-textDark/10 hidden md:block mt-2"></span>
                    </h2>
                    <p className="font-drama text-2xl md:text-3xl text-accent italic opacity-90">{cat.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="lunch-item group cursor-default">
                        <div className="flex justify-between items-baseline mb-3 border-b border-textDark/5 pb-2 relative overflow-hidden">
                          <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide group-hover:text-primary transition-colors duration-300 relative z-10">
                            {item.title}
                          </h3>
                          <span className="font-light text-lg md:text-xl shrink-0 ml-4 relative z-10 text-accent group-hover:text-primary transition-colors duration-300">
                            € {item.price}
                          </span>
                          
                          {/* Hover animated border */}
                          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></div>
                        </div>
                        <p className="font-light text-textDark/60 leading-relaxed text-sm md:text-base pr-4">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
