import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

function Hero({ setNavbarTransparent }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setNavbarTransparent(true);
        } else {
          setNavbarTransparent(false);
        }
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-80px 0px 0px 0px'
      }
    );

    const currentRef = videoRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setNavbarTransparent]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      ref={videoRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      <motion.section
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover pointer-events-none select-none block "
          tabIndex={-1}
        >
          {/* Mobile video */}
          <source
            src="/video/hero_mob.mp4"
            media="(max-width: 768px)"
            type="video/mp4"
          />
          {/* Desktop video */}
          <source
            src="/video/hero.mp4"
            media="(min-width: 769px)"
            type="video/mp4"
          />
        </video>
      </motion.section>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-24 md:bottom-10 right-10 bg-black/40 p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        {isMuted ? (
          <VolumeX size={24} className="text-[#F05656]" />
        ) : (
          <Volume2 size={24} className="text-[#F05656]" />
        )}
      </button>
    </div>
  );
}

export default Hero;
