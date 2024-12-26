import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#0d1117',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse', // Particles move away from the cursor
            },
            onClick: {
              enable: true,
              mode: 'push', // Add more particles when clicked
            },
          },
          modes: {
            repulse: {
              distance: 100, // Adjust how far particles are repelled
              duration: 0.4,
            },
            push: {
              quantity: 4, // Number of particles added on click
            },
          },
        },
        particles: {
          color: {
            value: ['#ffffff', '#00ff00', '#ff0000'], // Multi-colored particles
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            direction: 'none', // Particles move in random directions
            outModes: {
              default: 'out',
            },
            random: true, // Add random movement
            speed: 2, // Increase speed for more animation
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Increase the number of particles
          },
          opacity: {
            value: { min: 0.2, max: 0.8 }, // Dynamic opacity for twinkling effect
            animation: {
              enable: true,
              speed: 1, // Speed of opacity change
              minimumValue: 0.2,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'triangle'], // Use multiple shapes
          },
          size: {
            value: { min: 1, max: 5 }, // Larger particle size range
            animation: {
              enable: true,
              speed: 3, // Size pulsates dynamically
              minimumValue: 1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
      className="particles-bg"
    />
  );
};

export default ParticlesBackground;
