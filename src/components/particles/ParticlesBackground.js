import React from "react";
import {Particles} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import "./ParticlesBackground.scss";

export default function ParticlesBackground() {
  const particlesInit = async engine => {
    await loadFull(engine);
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent"
            }
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#8C8C8C"
            },
            links: {
              color: "#8C8C8C",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: {min: 1, max: 3}
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
}
