import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';
import { cn } from '../../utils/cn';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const cardsRef = useRef(null);
  const horizontalRef = useRef(null);
  const horizontalWrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(heroRef.current, 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
      );

      const words = textRef.current.innerText.split(' ');
      textRef.current.innerText = '';
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        
        word.split('').forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.innerText = char;
          charSpan.style.opacity = '0';
          charSpan.style.transform = 'translateY(20px)';
          charSpan.style.display = 'inline-block';
          wordSpan.appendChild(charSpan);
        });

        textRef.current.appendChild(wordSpan);
        if (index < words.length - 1) {
          textRef.current.appendChild(document.createTextNode(' '));
        }
      });

      gsap.to(textRef.current.querySelectorAll('span > span'), {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });

      // About Section Animation
      gsap.fromTo(".about-text", 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(".about-img",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 60%",
          }
        }
      );

      // Alternating Sections Animation
      const sections = gsap.utils.toArray('.content-section');
      sections.forEach((sec, i) => {
        const imgContainer = sec.querySelector('.img-container');
        const textElements = sec.querySelectorAll('.section-text > *');
        
        gsap.fromTo(imgContainer, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 75%",
            }
          }
        );

        gsap.fromTo(textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 75%",
            }
          }
        );
      });

      // Horizontal Scroll
      let scrollWidth = horizontalRef.current.scrollWidth - window.innerWidth;
      
      gsap.to(horizontalRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalWrapperRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollWidth
        }
      });

    });
    return () => ctx.revert();
  }, []);

  const cards = [
    { title: "Menu à la carte", desc: "Ontdek onze uitgebreide kaart met zorgvuldig samengestelde gerechten. Elk seizoen verrassen we u met smaken uit de streek en seizoensgebonden specialiteiten.", link: "/alacarte.html", imgId: "40" },
    { title: "Halfpension", desc: "Geniet van een compleet verzorgd verblijf met een wisselend driegangenmenu. Een culinaire reis waarbij u elke avond onbezorgd kunt aanschuiven.", link: "/halfpension.html", imgId: "49" },
    { title: "Cocktails", desc: "Laat u verrassen door onze signature cocktails en zorgvuldig geselecteerde wijnen. De perfecte afsluiter van een ontspannen dag aan de Zeeuwse kust.", link: "/drinks.html", imgId: "56" },
    { title: "Lunch", desc: "Kom even tot rust met een heerlijke lunch. Van versgebakken Zeeuws brood tot warme gerechten, geserveerd in een huiselijke en rustgevende sfeer.", link: "/lunch.html", imgId: "70" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden rounded-b-[3rem] -mt-24 pt-24">
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/Resort%20land%20en%20zee%20-%20april%202026-66.webp)' }}
        >
          <div className="absolute inset-0 bg-textDark/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-background px-6">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl tracking-[0.2em] mb-6 uppercase">
            <span ref={textRef}>Zeeuws Verlangen</span>
          </h1>
          <p className="font-drama text-3xl md:text-5xl italic opacity-90 tracking-wide">
            Het hart van ontspanning
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-light leading-relaxed text-textDark">
          Bij Restaurant Zeeuws Verlangen draait alles om de essentie van de Zeeuwse kust. Wij brengen de versheid van de zee en de rijkdom van het land samen op uw bord.
        </h2>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-heading text-sm text-accent tracking-[0.3em] uppercase mb-4 about-text">Over Ons</h3>
          <h2 className="font-drama text-4xl md:text-6xl mb-8 about-text">Ontsnapping aan de dagelijkse hectiek</h2>
          <p className="opacity-80 leading-relaxed mb-6 about-text font-light text-lg">
            Gelegen op een unieke plek tussen de duinen en de polders, biedt Zeeuws Verlangen een ontsnapping aan de dagelijkse hectiek. Onze passie voor lokale producten en oprechte gastvrijheid vormt de basis van elke ervaring.
          </p>
          <p className="opacity-80 leading-relaxed about-text font-light text-lg">
            Of u nu komt voor een uitgebreid diner of een ontspannen middag op ons terras, wij zorgen dat u zich direct thuis voelt.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <div 
            className="about-img rounded-[2rem] bg-cover bg-center h-full transform translate-y-12 shadow-2xl"
            style={{ backgroundImage: 'url(/images/Resort%20land%20en%20zee%20-%20april%202026-47.webp)' }}
          />
          <div 
            className="about-img rounded-[2rem] bg-cover bg-center h-full shadow-2xl"
            style={{ backgroundImage: 'url(/images/Resort%20land%20en%20zee%20-%20april%202026-61.webp)' }}
          />
        </div>
      </section>

      {/* Highlighted Sections (Previously Cards) */}
      <div ref={cardsRef} className="py-32 space-y-32">
        {cards.map((card, i) => (
          <section key={i} className={`content-section flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 px-6 lg:px-12 max-w-7xl mx-auto`}>
            {/* Image */}
            <div className="img-container w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl relative group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/Resort%20land%20en%20zee%20-%20april%202026-${card.imgId}.webp')` }}
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            
            {/* Text Content */}
            <div className="section-text w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-heading text-sm text-accent tracking-[0.3em] uppercase mb-4">Ontdek</h2>
              <h3 className="font-drama text-5xl md:text-6xl mb-6 text-primary">{card.title}</h3>
              <p className="opacity-80 font-light text-lg leading-relaxed mb-10 max-w-lg">
                {card.desc}
              </p>
              <div>
                <a 
                  href={card.link}
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="font-heading text-sm tracking-widest uppercase relative overflow-hidden pb-1">
                    Bekijk details
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Wat maakt ons uniek - Horizontal Scroll */}
      <section ref={horizontalWrapperRef} className="h-screen bg-textDark text-background rounded-[3rem] overflow-hidden relative mx-4 lg:mx-12 flex flex-col justify-center">
        <div className="absolute top-12 left-12 z-20">
          <h2 className="font-heading text-sm text-accent tracking-[0.3em] uppercase">Wat maakt ons uniek</h2>
        </div>
        
        <div ref={horizontalRef} className="flex flex-nowrap w-[300vw] h-full items-center px-12 md:px-24">
          
          <div className="w-[100vw] flex-shrink-0 pr-24 flex items-center gap-16">
            <div className="flex-1">
              <h3 className="font-drama text-7xl md:text-8xl text-accent mb-6">Producten</h3>
              <h4 className="font-heading text-2xl tracking-widest uppercase mb-6">Lokale smaken met karakter</h4>
              <p className="opacity-80 font-light leading-relaxed max-w-xl text-lg">
                Onze keuken is geïnspireerd op alles wat Zeeland te bieden heeft: van dagverse vis tot seizoensgroenten uit de regio. Elk gerecht vertelt een verhaal van herkomst en ambacht – puur, eerlijk en met liefde bereid.
              </p>
            </div>
            <div className="flex-1 hidden md:block">
              <div className="w-full h-[50vh] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: 'url(/images/Resort%20land%20en%20zee%20-%20april%202026-38.webp)' }} />
            </div>
          </div>

          <div className="w-[100vw] flex-shrink-0 pr-24 flex items-center gap-16">
            <div className="flex-1">
              <h3 className="font-drama text-7xl md:text-8xl text-accent mb-6">Klantvriendelijkheid</h3>
              <h4 className="font-heading text-2xl tracking-widest uppercase mb-6">Echte Zeeuwse gastvrijheid</h4>
              <p className="opacity-80 font-light leading-relaxed max-w-xl text-lg">
                Bij Zeeuws Verlangen draait alles om warmte, aandacht en oprechte service. Ons team zorgt ervoor dat je je welkom en gewaardeerd voelt, of je nu voor een snelle lunch of een uitgebreid diner komt. Gastvrijheid zit bij ons in de details.
              </p>
            </div>
            <div className="flex-1 hidden md:block">
              <div className="w-full h-[50vh] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: 'url(/images/Resort%20land%20en%20zee%20-%20april%202026-87.webp)' }} />
            </div>
          </div>

          <div className="w-[100vw] flex-shrink-0 pr-24 flex items-center gap-16">
            <div className="flex-1">
              <h3 className="font-drama text-7xl md:text-8xl text-accent mb-6">Ligging</h3>
              <h4 className="font-heading text-2xl tracking-widest uppercase mb-6">Tussen land en zee</h4>
              <p className="opacity-80 font-light leading-relaxed max-w-xl text-lg">
                Ons restaurant bevindt zich op Resort Land & Zee, aan de Rampweg 28 in Noordwelle. Gelegen op steenworp afstand van het strand en omringd door rustgevende natuur, is het de ideale plek om te genieten van lekker eten in een ontspannen omgeving.
              </p>
            </div>
            <div className="flex-1 hidden md:block">
              <div className="w-full h-[50vh] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: 'url(/images/Resort%20land%20en%20zee%20-%20april%202026-31.webp)' }} />
            </div>
          </div>

        </div>
      </section>


    </Layout>
  );
}
