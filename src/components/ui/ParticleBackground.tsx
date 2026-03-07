"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  useEffect(() => {
    const check = () => {
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      key={isLight ? "light" : "dark"}
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: {
            value: isLight
              ? ["#059669", "#2563eb", "#d97706"]
              : ["#40c057", "#58a6ff", "#f0b429"],
          },
          links: {
            color: isLight ? "#cbd5e1" : "#30363d",
            distance: 150,
            enable: true,
            opacity: isLight ? 0.3 : 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true },
            value: 40,
          },
          opacity: { value: isLight ? { min: 0.15, max: 0.45 } : { min: 0.1, max: 0.5 } },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
