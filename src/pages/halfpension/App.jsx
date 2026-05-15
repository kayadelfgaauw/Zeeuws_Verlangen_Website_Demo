import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';

gsap.registerPlugin(ScrollTrigger);

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

      // Sidebar decorative elements
      gsap.fromTo('.sidebar-elem',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power2.out', delay: 0.8 }
      );

      // Menu Days staggered
      gsap.utils.toArray('.menu-day').forEach((dayElem) => {
        gsap.fromTo(dayElem,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: dayElem,
              start: "top 85%"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const menus = [
    {
      day: "Menu 1",
      hoofd: "Varkensrollade met jachtjus en ovenaardappelen\nof\nGebakken visfilet met knoflookmayonaise\nof\nFlammkuchen met tomaat, mozzarella, olijven, kappertjes, paprika en feta"
    },
    {
      day: "Menu 2",
      hoofd: "Kip Madras met rijst of friet\nof\nRoodbaarsfilet uit de oven met citroen\nof\nVegetarische lasagne"
    },
    {
      day: "Menu 3",
      hoofd: "Schnitzel met champignonsaus\nof\nZeebaarsfilet met tartaarsaus\nof\nRavioli uit de oven"
    },
    {
      day: "Menu 4",
      hoofd: "Kipsaté met atjar en kroepoek\nof\nKabeljauwfilet uit de oven\nof\nSpaghetti putanesca"
    },
    {
      day: "Menu 5",
      hoofd: "Varkensmedaillons met pepersaus\nof\nViscurry met rijst\nof\nVegetarische schnitzel met champignonsaus"
    },
    {
      day: "Menu 6",
      hoofd: "Huisgemaakte spareribs\nof\nZalmfilet met mosterd roomsaus\nof\nTortellini met ricotta, spinazie en roomsaus"
    },
    {
      day: "Menu 7",
      hoofd: "Kipreepjes Griekse stijl\nof\nWijtingfilet met ravigottesaus\nof\nTagliatelle arrabiata"
    }
  ];

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
                Elke Avond Verrassend
              </span>
              <h1 className="hero-elem font-heading text-5xl md:text-7xl lg:text-[8rem] tracking-tight uppercase leading-[0.85] text-primary">
                Half<br/>pension
              </h1>
              <div className="hero-elem font-drama text-3xl md:text-5xl text-accent italic mt-4 md:mt-6 md:-ml-2">
                Driegangen Diner
              </div>
            </div>
            <div className="flex-1 pb-2 md:pb-8">
              <p className="hero-elem font-light text-lg md:text-xl text-textDark/70 leading-relaxed max-w-lg">
                Boekt u halfpension? Dan geniet u elke avond van een gevarieerd 3-gangenmenu, zorgvuldig samengesteld met lokale seizoensgebonden producten. Laat u culinair verwennen terwijl u ontspant aan het water.
              </p>
            </div>
          </div>

          <div className="hero-line w-full h-px bg-textDark/10 origin-left mb-16 md:mb-24"></div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Decorative/Nav Column */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40">
                <p className="sidebar-elem font-heading text-xs tracking-[0.2em] uppercase text-textDark/40 mb-6 border-l border-textDark/20 pl-4">
                  Culinair Programma
                </p>
                <ul className="sidebar-elem space-y-4 font-light text-sm text-textDark/60 mb-16">
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Dagverse Soep of Salade
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Vlees, Vis of Vegetarisch
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Huisgemaakt Dessert
                  </li>
                </ul>
                
                {/* Decorative Element */}
                <div className="sidebar-elem w-32 h-48 border border-accent/20 rounded-t-full flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:border-accent/40 transition-colors duration-500">
                  <div className="absolute inset-0 bg-accent/5"></div>
                  <span className="font-drama text-7xl text-accent opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700">7</span>
                  <div className="absolute bottom-4 w-full text-center">
                    <span className="block font-heading text-[0.5rem] tracking-[0.3em] uppercase text-textDark/30">Dagen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-9 space-y-24 md:space-y-32">
              {menus.map((menu, index) => (
                <div key={index} className="menu-day group">
                  <div className="mb-10 md:mb-12">
                    <div className="flex items-center gap-6 mb-4">
                      <span className="font-heading text-sm text-accent tracking-[0.3em] uppercase bg-accent/5 px-4 py-1 rounded-full border border-accent/10">
                        {menu.day}
                      </span>
                      <div className="flex-1 h-px bg-textDark/10"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pl-4 md:pl-8 border-l-2 border-primary/5 group-hover:border-accent/30 transition-colors duration-500">
                    
                    {/* Voorgerecht */}
                    <div className="md:col-span-3">
                      <h4 className="font-heading text-sm text-textDark/50 tracking-[0.2em] uppercase mb-3">Voorgerecht</h4>
                      <p className="font-drama text-xl md:text-2xl italic text-primary">Soep van de dag</p>
                      <p className="font-light text-textDark/60 text-sm mt-2">of saladebuffet</p>
                    </div>

                    {/* Hoofdgerecht */}
                    <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-textDark/5 pt-6 md:pt-0 md:pl-8">
                      <h4 className="font-heading text-sm text-textDark/50 tracking-[0.2em] uppercase mb-4">Hoofdgerecht</h4>
                      <ul className="space-y-4">
                        {menu.hoofd.split('\nof\n').map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <span className="text-accent text-xs mt-1.5 mr-4 opacity-50 group-hover/item:opacity-100 transition-opacity">✧</span>
                            <span className="font-light text-lg leading-relaxed group-hover/item:text-primary transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nagerecht */}
                    <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-textDark/5 pt-6 md:pt-0 md:pl-8">
                      <h4 className="font-heading text-sm text-textDark/50 tracking-[0.2em] uppercase mb-3">Nagerecht</h4>
                      <p className="font-drama text-xl md:text-2xl italic text-primary">Dessert</p>
                      <p className="font-light text-textDark/60 text-sm mt-2">van het huis</p>
                    </div>

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
