"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded - ready for interaction
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
              color: "#FFF500",
            },
          },
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#FFF500", "#FFB902", "#E09500", "#fff84d"],
        },
        links: {
          color: "#FFF500",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
          attract: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 80,
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.7,
          },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className={className}
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}

export default ParticleBackground;
