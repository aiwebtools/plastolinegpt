import { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    // Shooting star properties
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    let lastShootingStarTime = 0;

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create shooting stars occasionally
      if (currentTime - lastShootingStarTime > 2000 + Math.random() * 3000) {
        shootingStars.push({
          x: -100,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 3 + 2,
          opacity: 1,
          angle: Math.random() * 30 + 15,
        });
        lastShootingStarTime = currentTime;
      }

      // Draw and update stars
      stars.forEach((star) => {
        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(177, 70%, 60%, ${star.opacity * twinkle})`;
        ctx.fill();

        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(177, 70%, 60%, ${star.opacity * twinkle * 0.1})`;
          ctx.fill();
        }

        // Move star
        star.y += star.speed;
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw and update shooting stars
      shootingStars.forEach((shootingStar, index) => {
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - Math.cos(shootingStar.angle * Math.PI / 180) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle * Math.PI / 180) * shootingStar.length
        );
        
        gradient.addColorStop(0, `hsla(320, 86%, 65%, ${shootingStar.opacity})`);
        gradient.addColorStop(0.5, `hsla(177, 70%, 60%, ${shootingStar.opacity * 0.7})`);
        gradient.addColorStop(1, 'hsla(320, 86%, 65%, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - Math.cos(shootingStar.angle * Math.PI / 180) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle * Math.PI / 180) * shootingStar.length
        );
        ctx.stroke();

        // Update shooting star position
        shootingStar.x += Math.cos(shootingStar.angle * Math.PI / 180) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle * Math.PI / 180) * shootingStar.speed;
        shootingStar.opacity -= 0.005;

        // Remove shooting star when it's off screen or faded
        if (shootingStar.x > canvas.width + 100 || shootingStar.y > canvas.height + 100 || shootingStar.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, hsl(220, 13%, 8%) 0%, hsl(220, 13%, 6%) 50%, hsl(220, 13%, 4%) 100%)' }}
    />
  );
};

export default StarfieldBackground;