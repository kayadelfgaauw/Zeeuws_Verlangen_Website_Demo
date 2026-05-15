import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.utils.toArray('.legal-section').forEach((section, i) => {
        gsap.fromTo(section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6 lg:px-12 text-center" ref={heroRef}>
        <div className="max-w-4xl mx-auto border-b border-primary/20 pb-12">
          <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-widest uppercase mb-6">Juridische Informatie</h1>
          <p className="font-drama text-2xl md:text-3xl italic opacity-80">
            Colofon, Disclaimer & Privacyverklaring
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 max-w-3xl mx-auto space-y-24 pb-32">
        <div id="colofon" className="legal-section">
          <h2 className="font-heading text-2xl text-accent tracking-widest uppercase mb-6">Colofon</h2>
          <div className="font-light text-textDark/80 leading-relaxed space-y-4">
            <p><strong>Naam:</strong> Restaurant Zeeuws Verlangen / Resort Land & Zee</p>
            <p><strong>Adres:</strong> Rampweg 28, 4326 LK Scharendijke</p>
            <p><strong>Telefoon:</strong> +31 (0)111 671 785</p>
            <p><strong>E-mail:</strong> info@landenzee.nl</p>
          </div>
        </div>

        <div id="disclaimer" className="legal-section">
          <h2 className="font-heading text-2xl text-accent tracking-widest uppercase mb-6">Disclaimer</h2>
          <div className="font-light text-textDark/80 leading-relaxed space-y-4">
            <p>
              De inhoud van deze website is met de grootst mogelijke zorgvuldigheid samengesteld. Desondanks is het mogelijk dat de informatie die hier wordt gepubliceerd onvolledig of onjuist is.
            </p>
            <p>
              Aan de inhoud van deze website kunnen geen rechten worden ontleend. Resort Land & Zee / Restaurant Zeeuws Verlangen aanvaardt geen enkele aansprakelijkheid voor directe of indirecte schade die ontstaat uit het gebruik van de website of van de op of via de website ter beschikking gestelde informatie.
            </p>
          </div>
        </div>

        <div id="privacy" className="legal-section">
          <h2 className="font-heading text-2xl text-accent tracking-widest uppercase mb-6">Privacy</h2>
          <div className="font-light text-textDark/80 leading-relaxed space-y-4">
            <p>
              Resort Land & Zee / Restaurant Zeeuws Verlangen respecteert de privacy van alle gebruikers van haar site en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
            </p>
            <p>
              Wij gebruiken uw gegevens om de aanvragen en reserveringen zo snel en gemakkelijk mogelijk te laten verlopen. Voor het overige zullen wij deze gegevens uitsluitend gebruiken met uw toestemming.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
