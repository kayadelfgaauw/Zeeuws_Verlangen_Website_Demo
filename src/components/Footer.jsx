import logoUrl from '../assets/logo.svg';

export function Footer() {
  return (
    <footer className="bg-textDark text-background pt-24 pb-12 px-6 lg:px-12 rounded-t-[3rem] mt-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at top right, #D4A373 0%, transparent 60%)'
      }} />
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="md:col-span-2">
          <a href="/index.html" className="inline-block mb-6">
            <img src={logoUrl} alt="Zeeuws Verlangen Logo" className="h-20 w-auto brightness-0 invert" />
          </a>
          <p className="opacity-80 max-w-sm mb-8 leading-relaxed font-light">
            Het hart van ontspanning. Gelegen op een unieke plek tussen de duinen en de polders aan de Zeeuwse kust.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-6 uppercase tracking-widest text-white">Locatie</h4>
          <address className="not-italic opacity-80 flex flex-col space-y-2 font-light">
            <span>Resort Land & Zee</span>
            <span>Rampweg 28</span>
            <span>4326 LK Scharendijke</span>
            <a href="tel:+31111671785" className="hover:text-accent mt-4 inline-block transition-colors">+31 (0)111 671 785</a>
            <a href="mailto:info@landenzee.nl" className="hover:text-accent transition-colors">info@landenzee.nl</a>
          </address>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-6 uppercase tracking-widest text-white">Ontdek</h4>
          <ul className="space-y-3 opacity-80 flex flex-col font-light">
            <a href="/alacarte.html" className="hover:text-accent transition-colors w-max">A la Carte</a>
            <a href="/halfpension.html" className="hover:text-accent transition-colors w-max">Halfpension</a>
            <a href="/drinks.html" className="hover:text-accent transition-colors w-max">Drinks & Cocktails</a>
            <a href="/lunch.html" className="hover:text-accent transition-colors w-max">Lunch</a>
            <a href="/juridisch.html" className="hover:text-accent transition-colors w-max mt-4">Colofon & Privacy</a>
          </ul>
        </div>
      </div>
      <div className="container mx-auto border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-light opacity-60 relative z-10">
        <p>© 2026 Restaurant Zeeuws Verlangen</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/juridisch.html#disclaimer" className="hover:text-accent transition-colors">Disclaimer</a>
          <a href="/juridisch.html#privacy" className="hover:text-accent transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
