import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 lg:px-12 max-w-[100rem] mx-auto overflow-hidden">
      <div className="relative w-full min-h-[700px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
        
        {/* Left: Contact Info Box */}
        <div className="w-full lg:w-5/12 bg-textDark text-background rounded-[3rem] p-10 md:p-16 relative z-20 shadow-2xl lg:translate-x-16 transform transition-transform hover:-translate-y-2 duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
          
          <h2 className="font-heading text-sm text-accent tracking-[0.3em] uppercase mb-4">Contact</h2>
          <h3 className="font-drama text-6xl md:text-8xl mb-8 leading-none text-background">Kom Tot<br/>Rust</h3>
          <p className="opacity-80 font-light text-lg mb-16 max-w-sm">
            We heten u van harte welkom. Neem contact met ons op voor reserveringen, speciale wensen of andere vragen.
          </p>

          <div className="space-y-12">
            <div className="group relative">
              <h4 className="font-heading text-xs tracking-[0.2em] text-accent uppercase mb-3">Telefoon</h4>
              <a href="tel:+31111671785" className="text-3xl md:text-4xl font-light hover:text-accent transition-colors duration-300 inline-block">
                +31 (0)111 671 785
              </a>
            </div>
            
            <div className="group relative">
              <h4 className="font-heading text-xs tracking-[0.2em] text-accent uppercase mb-3">Email</h4>
              <a href="mailto:info@landenzee.nl" className="text-3xl md:text-4xl font-light hover:text-accent transition-colors duration-300 relative inline-block">
                info@landenzee.nl
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-accent transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            </div>

            <div className="group relative pt-4">
              <h4 className="font-heading text-xs tracking-[0.2em] text-accent uppercase mb-3">Locatie</h4>
              <p className="text-2xl font-light leading-relaxed opacity-90">Rampweg 28<br/>4326 LK Scharendijke</p>
            </div>
          </div>
        </div>

        {/* Right: Map Box */}
        <div className="w-full lg:w-7/12 h-[500px] lg:h-[800px] rounded-[3rem] overflow-hidden relative z-10 shadow-2xl group">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-0" />
          <iframe 
            src="https://maps.google.com/maps?q=Rampweg%2028%2C%204326%20LK%20Scharendijke&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'contrast(1.1) opacity(0.9) grayscale(20%)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[2s] group-hover:scale-100"
            title="Locatie Zeeuws Verlangen"
          />
          
          {/* Floating Action Badge */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Rampweg+28,+4326+LK+Scharendijke" 
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 bg-accent text-background w-28 h-28 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-primary border border-background/20"
          >
            <span className="font-drama text-3xl md:text-4xl mt-2">Route</span>
            <span className="font-heading text-[10px] tracking-widest uppercase">Plannen</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
