import React, { useState, useEffect } from 'react';
import { Flame, Sun } from 'lucide-react';

const AnimatedBackground = ({ isMobile }) => {
  const [fireflies, setFireflies] = useState([]);
  const [flames, setFlames] = useState([]);

  // Create firefly effect
  useEffect(() => {
    const createFirefly = () => {
      const colors = [
        'from-amber-400/40 to-yellow-500/40',
        'from-orange-400/40 to-red-500/40',
        'from-emerald-400/40 to-green-500/40',
        'from-rose-400/40 to-pink-500/40',
        'from-gold-400/40 to-amber-600/40'
      ];
      
      return {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        gradient: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 60 + 30,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        life: 250
      };
    };

    const maxFireflies = isMobile ? 4 : 7;
    const interval = setInterval(() => {
      setFireflies(prev => {
        const newFireflies = prev
          .map(firefly => ({
            ...firefly,
            x: firefly.x + firefly.speedX,
            y: firefly.y + firefly.speedY,
            life: firefly.life - 1
          }))
          .filter(firefly => firefly.life > 0);

        if (newFireflies.length < maxFireflies) {
          newFireflies.push(createFirefly());
        }

        return newFireflies;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Create flame effects
  useEffect(() => {
    const createFlame = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
      life: 80
    });

    const maxFlames = isMobile ? 3 : 5;
    const interval = setInterval(() => {
      setFlames(prev => {
        const newFlames = prev
          .map(flame => ({
            ...flame,
            life: flame.life - 1
          }))
          .filter(flame => flame.life > 0);

        if (Math.random() > 0.88 && newFlames.length < maxFlames) {
          newFlames.push(createFlame());
        }

        return newFlames;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      {/* Floating Fireflies */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {fireflies.map(firefly => (
          <div
            key={firefly.id}
            className={`absolute rounded-full bg-gradient-to-br ${firefly.gradient} blur-lg animate-pulse`}
            style={{
              left: `${firefly.x}px`,
              top: `${firefly.y}px`,
              width: `${firefly.size}px`,
              height: `${firefly.size}px`,
              opacity: firefly.life / 250,
              transform: `scale(${0.6 + (firefly.life / 250) * 0.4})`,
              transition: 'all 0.2s ease-out'
            }}
          />
        ))}
      </div>

      {/* Flame Effects */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {flames.map(flame => (
          <div
            key={flame.id}
            className="absolute animate-ping"
            style={{
              left: `${flame.x}px`,
              top: `${flame.y}px`,
              transform: `rotate(${flame.rotation}deg)`,
              opacity: flame.life / 80
            }}
          >
            <Flame className="h-5 w-5 sm:h-7 sm:w-7 text-orange-400 drop-shadow-lg" />
          </div>
        ))}
      </div>

      {/* Floating Suns */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-spin-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <Sun className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-amber-300 opacity-50" />
          </div>
        ))}
      </div>

      {/* Warm Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-amber-900 to-emerald-950 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 via-transparent to-green-600/10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-t from-orange-600/30 to-transparent rounded-full blur-3xl animate-bounce" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/3 left-1/5 w-56 h-56 bg-gradient-to-b from-emerald-600/25 to-transparent rounded-full blur-3xl animate-bounce" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
      </div>
    </>
  );
};

export default AnimatedBackground;