import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../../components/Layout';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // List of images extracted from the workspace /images folder
  const images = [
    '/images/Resort land en zee - april 2026-28.webp',
    '/images/Resort land en zee - april 2026-31.webp',
    '/images/Resort land en zee - april 2026-33.webp',
    '/images/Resort land en zee - april 2026-34.webp',
    '/images/Resort land en zee - april 2026-36.webp',
    '/images/Resort land en zee - april 2026-38.webp',
    '/images/Resort land en zee - april 2026-39.webp',
    '/images/Resort land en zee - april 2026-40.webp',
    '/images/Resort land en zee - april 2026-42.webp',
    '/images/Resort land en zee - april 2026-44.webp',
    '/images/Resort land en zee - april 2026-45.webp',
    '/images/Resort land en zee - april 2026-47.webp',
    '/images/Resort land en zee - april 2026-49.webp',
    '/images/Resort land en zee - april 2026-50.webp',
    '/images/Resort land en zee - april 2026-52.webp',
    '/images/Resort land en zee - april 2026-55.webp',
    '/images/Resort land en zee - april 2026-56.webp',
    '/images/Resort land en zee - april 2026-58.webp',
    '/images/Resort land en zee - april 2026-61.webp',
    '/images/Resort land en zee - april 2026-62.webp',
    '/images/Resort land en zee - april 2026-63.webp',
    '/images/Resort land en zee - april 2026-66.webp',
    '/images/Resort land en zee - april 2026-67.webp',
    '/images/Resort land en zee - april 2026-70.webp',
    '/images/Resort land en zee - april 2026-74.webp',
    '/images/Resort land en zee - april 2026-77.webp',
    '/images/Resort land en zee - april 2026-78.webp',
    '/images/Resort land en zee - april 2026-81.webp',
    '/images/Resort land en zee - april 2026-82.webp',
    '/images/Resort land en zee - april 2026-84.webp',
    '/images/Resort land en zee - april 2026-86.webp',
    '/images/Resort land en zee - april 2026-87.webp',
    '/images/Resort land en zee - april 2026-88.webp'
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
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
        <h1 className="font-drama text-6xl md:text-8xl text-primary mb-6">Impressie</h1>
        <p className="font-light opacity-80 text-lg">Een visuele reis door Zeeuws Verlangen</p>
      </section>

      <section className="px-4 lg:px-8 pb-32" ref={galleryRef}>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="gallery-item break-inside-avoid cursor-pointer overflow-hidden rounded-[1rem] group"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt="Impressie foto" 
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-textDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1rem]" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <div className={`fixed inset-0 z-[100] bg-textDark/95 backdrop-blur-xl flex items-center justify-center transition-opacity duration-500 ${selectedImg ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          className="absolute top-8 right-8 text-background hover:text-accent transition-colors"
          onClick={() => setSelectedImg(null)}
        >
          <X size={40} strokeWidth={1} />
        </button>
        {selectedImg && (
          <img 
            src={selectedImg} 
            alt="Fullscreen" 
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        )}
      </div>
    </Layout>
  );
}
