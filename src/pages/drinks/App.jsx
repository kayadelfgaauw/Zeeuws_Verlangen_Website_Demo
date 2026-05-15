import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';

gsap.registerPlugin(ScrollTrigger);

const menuData = [
  {
    category: "Frisdranken",
    items: [
      { name: "Chaudfontaine rood", price: "3,05" },
      { name: "Chaudfontaine blauw", price: "3,05" },
      { name: "Coca-Cola", price: "3,15" },
      { name: "Coca-Cola zero", price: "3,15" },
      { name: "Fanta orange", price: "3,15" },
      { name: "Fanta cassis", price: "3,15" },
      { name: "Sprite", price: "3,15" },
      { name: "Apfelschorle", price: "3,15" },
      { name: "Spezi", price: "3,15", desc: "½ cola, ½ sinas" },
      { name: "Ice Tea", price: "3,20" },
      { name: "Ice Tea Green", price: "3,20" },
      { name: "Appellaere", price: "3,20" },
      { name: "Perelaere", price: "3,20" },
      { name: "Sinaasappelsap", price: "3,25" },
      { name: "Tonic", price: "3,25" },
      { name: "Bitter lemon", price: "3,25" },
      { name: "Fristi", price: "3,30" },
      { name: "Chocomelk (koud)", price: "3,30" },
      { name: "Tafelfles Chaudfontaine rood", price: "7,65", desc: "1 liter" },
      { name: "Tafelfles Chaudfontaine blauw", price: "7,65", desc: "1 liter" },
    ]
  },
  {
    category: "Warme Dranken",
    items: [
      { name: "Thee", price: "3,10" },
      { name: "Koffie", price: "3,10" },
      { name: "Espresso", price: "3,10" },
      { name: "Dubbele espresso", price: "4,50" },
      { name: "Grote koffie", price: "5,05" },
      { name: "Cappuccino", price: "3,65" },
      { name: "Latte macchiato", price: "3,80" },
      { name: "Koffie verkeerd", price: "3,80" },
      { name: "Espresso Macchiato", price: "3,25" },
      { name: "Verse munt thee", price: "4,05" },
      { name: "Verse gember thee", price: "4,05" },
      { name: "Warme chocomelk", price: "3,50" },
      { name: "Warme chocomelk met slagroom", price: "4,20" },
    ]
  },
  {
    category: "Speciale Koffie",
    items: [
      { name: "Zeeuws Verlangen Coffee", price: "8,25" },
      { name: "Irish Coffee", price: "8,15" },
      { name: "Italian Coffee", price: "8,15" },
      { name: "French Coffee", price: "8,15" },
      { name: "Spanish Coffee", price: "8,15" },
      { name: "Baileys Coffee", price: "8,15" },
      { name: "Likeur 43 Coffee", price: "8,15" },
    ]
  },
  {
    category: "Bieren",
    subcategories: [
      {
        title: "Van het vat",
        items: [
          { name: "Heineken", price: "3,65", desc: "0,25 liter" },
          { name: "Heineken groot", price: "6,75", desc: "0,5 liter" },
          { name: "Affligem blond", price: "4,85", desc: "0,3 liter" },
        ]
      },
      {
        title: "Uit de fles",
        items: [
          { name: "Affligem dubbel", price: "5,15" },
          { name: "Affligem tripel", price: "5,25" },
          { name: "Karmeliet tripel", price: "5,25" },
          { name: "Duvel", price: "5,55" },
          { name: "Mort Subite Kriek Lambic", price: "5,55" },
          { name: "Erdinger Weissbier", price: "6,75", desc: "0,5 liter" },
        ]
      },
      {
        title: "Alcoholvrij & Laagalcoholisch",
        items: [
          { name: "Heineken 0.0%", price: "3,85" },
          { name: "Amstel Radler 0,0%", price: "3,95" },
          { name: "Amstel Radler 2.0%", price: "4,05" },
          { name: "Erdinger 0,4%", price: "5,75", desc: "0,5 liter" },
        ]
      },
      {
        title: "Gemixt",
        items: [
          { name: "Sneeuwwitje", price: "3,95", desc: "½ 7-Up, ½ bier" },
          { name: "Krefelder", price: "3,95", desc: "½ cola, ½ bier" },
          { name: "Alster", price: "3,95", desc: "½ sinas, ½ bier" },
        ]
      }
    ]
  },
  {
    category: "Aperitieven & Sterke Dranken",
    subcategories: [
      {
        title: "Aperitieven",
        items: [
          { name: "Cava", price: "6,75" },
          { name: "Kir", price: "6,25" },
          { name: "Kir royal", price: "6,95" },
          { name: "Port (wit)", price: "4,55" },
          { name: "Port (rood)", price: "4,55" },
          { name: "Martini (wit)", price: "4,55" },
          { name: "Martini (rood)", price: "4,55" },
          { name: "Campari", price: "4,55" },
          { name: "Sherry dry", price: "4,55" },
          { name: "Sherry medium", price: "4,55" },
        ]
      },
      {
        title: "Binnenlands",
        items: [
          { name: "Jonge jenever", price: "3,75" },
          { name: "Oude Jenever", price: "3,95" },
          { name: "Bessenjenever", price: "3,95" },
          { name: "Zeeuwse babbelaar likeur", price: "3,75" },
          { name: "Zeeuwse bolus likeur", price: "3,75" },
          { name: "Zeeuwse jutterbitter", price: "3,85" },
        ]
      },
      {
        title: "Buitenlands & Likeuren",
        items: [
          { name: "Bacardi", price: "4,95" },
          { name: "Wodka", price: "4,95" },
          { name: "Likeur 43", price: "4,95" },
          { name: "Safari", price: "4,95" },
          { name: "Baileys", price: "4,95" },
          { name: "Amaretto", price: "4,85" },
          { name: "Drambuie", price: "4,90" },
          { name: "Tia Maria", price: "4,90" },
          { name: "Cointreau", price: "4,90" },
          { name: "Frangelico", price: "4,90" },
          { name: "Grand Manier", price: "4,95" },
          { name: "Sambuca", price: "5,05" },
          { name: "Jägermeister", price: "5,05" },
          { name: "Limoncello", price: "5,05" },
          { name: "Pernod Ricard", price: "5,05" },
          { name: "Fernet Branca", price: "5,05" },
          { name: "Grappa", price: "5,95" },
        ]
      },
      {
        title: "Whiskey & Cognac",
        items: [
          { name: "Jameson", price: "5,45" },
          { name: "Ballantines", price: "5,35" },
          { name: "Glenmorangie", price: "5,65" },
          { name: "Cognac", price: "6,85" },
          { name: "Calvados", price: "6,35" },
        ]
      }
    ]
  }
];

const DrinkItem = ({ item }) => {
  return (
    <div className="drink-item flex flex-col group cursor-default">
      <div className="flex justify-between items-baseline border-b border-background/10 pb-3 transition-colors duration-500 group-hover:border-accent/50 relative overflow-hidden">
        <span className="font-heading text-lg md:text-xl tracking-wide uppercase group-hover:text-accent transition-colors duration-500 relative z-10">{item.name}</span>
        <span className="font-light text-lg whitespace-nowrap ml-4 relative z-10">€ {item.price}</span>
        
        {/* Hover decoration */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-20"></div>
      </div>
      {item.desc && <span className="font-light text-sm opacity-60 mt-2 block">{item.desc}</span>}
    </div>
  );
};

const MenuSection = ({ category }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal the title
      gsap.fromTo('.category-title', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 85%' 
          } 
        }
      );
      
      // Stagger reveal the items
      gsap.fromTo('.drink-item',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.05, 
          ease: 'power2.out', 
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 80%' 
          } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <span className="w-[1px] h-12 bg-accent/30 mb-8 block category-title"></span>
          <h2 className="category-title font-heading text-4xl md:text-6xl text-accent uppercase tracking-[0.2em] text-center">
            {category.category}
          </h2>
        </div>

        {category.items ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-8">
            {category.items.map((item, i) => (
              <DrinkItem key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="space-y-24">
            {category.subcategories.map((sub, idx) => (
              <div key={idx} className="subcategory-wrap">
                <h3 className="category-title font-heading text-2xl md:text-3xl text-background/80 uppercase tracking-widest mb-10 text-center md:text-left border-l-2 border-accent pl-4 inline-block">
                  {sub.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-8">
                  {sub.items.map((item, i) => (
                    <DrinkItem key={i} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Override the layout body classes to enforce a dark theme for the drinks page
    document.body.classList.remove('bg-background', 'text-textDark');
    document.body.classList.add('bg-textDark', 'text-background');

    let ctx = gsap.context(() => {
      // Hero animations
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-subtitle',
        { opacity: 0, y: 20, letterSpacing: '0em' },
        { opacity: 1, y: 0, letterSpacing: '0.3em', duration: 1.5, ease: 'power2.out' }
      )
      .fromTo('.hero-title-main',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        "-=1"
      )
      .fromTo('.hero-title-accent',
        { opacity: 0, x: -20, rotate: -5 },
        { opacity: 1, x: 0, rotate: 0, duration: 1.2, ease: 'back.out(1.7)' },
        "-=0.8"
      )
      .fromTo('.hero-desc',
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.inOut' },
        "-=0.5"
      );
      
      // Subtle parallax on orb
      gsap.to('.hero-orb', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    
    return () => {
      ctx.revert();
      document.body.classList.add('bg-background', 'text-textDark');
      document.body.classList.remove('bg-textDark', 'text-background');
    };
  }, []);

  return (
    <Layout>
      <section className="relative pt-48 pb-32 px-6 lg:px-12 flex flex-col items-center justify-center min-h-[70vh] overflow-hidden" ref={heroRef}>
        {/* Ambient cinematic background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] rounded-full bg-accent/10 blur-[100px] opacity-60 mix-blend-screen"></div>
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-textDark/80 via-transparent to-textDark z-0"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="hero-subtitle font-light tracking-[0.3em] uppercase text-sm md:text-base text-accent/80 block mb-8">
            Verfijnde Smaak
          </span>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-background tracking-widest uppercase mb-4 leading-[0.9]">
            <span className="hero-title-main block">Drinks &</span>
            <span className="hero-title-accent text-accent italic font-drama lowercase tracking-normal text-7xl md:text-9xl lg:text-[10rem] relative block -mt-4 md:-mt-8 pr-4">Cocktails</span>
          </h1>
          <p className="hero-desc font-light text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed mt-12">
            Laat u verrassen door onze selectie van verfrissende streekdranken, zorgvuldig samengestelde wijnen en Zeeuwse specialiteiten.
          </p>
        </div>
      </section>

      <div className="relative z-10 bg-textDark pb-32">
        {menuData.map((category, index) => (
          <MenuSection key={index} category={category} />
        ))}
      </div>
    </Layout>
  );
}
