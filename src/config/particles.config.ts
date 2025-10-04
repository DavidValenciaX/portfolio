/**
 * Particles Configuration
 * Configuración centralizada para la animación de partículas del fondo
 */

import type { ISourceOptions } from 'tsparticles-engine';

// Constantes de configuración visual
const PARTICLE_COUNT = 80;
const PARTICLE_OPACITY_MIN = 0.2;
const PARTICLE_OPACITY_MAX = 0.6;
const PARTICLE_SIZE_MIN = 1;
const PARTICLE_SIZE_MAX = 3;

// Constantes de movimiento
const PARTICLE_MOVE_SPEED = 0.5;
const PARTICLE_MOVE_DIRECTION = 'none' as const;
const PARTICLE_MOVE_RANDOM = true;
const PARTICLE_MOVE_STRAIGHT = false;
const PARTICLE_MOVE_OUT_MODE = 'out' as const;

// Constantes de interactividad
const MOUSE_ATTRACT_DISTANCE = 200;
const MOUSE_ATTRACT_SPEED = 0.5;
const LINE_LINK_DISTANCE = 150;
const LINE_LINK_OPACITY = 0.3;

// Constantes de colores por tema
const PARTICLE_COLOR_LIGHT = '#1e293b'; // Oscuro para fondo claro
const PARTICLE_COLOR_DARK = '#cbd5e1';  // Claro para fondo oscuro
const LINE_LINK_WIDTH = 1;

/**
 * Genera la configuración de partículas según el tema actual
 * @param isDarkMode - Indica si el tema actual es oscuro
 * @returns Configuración completa de partículas
 */
export function getParticlesConfig(isDarkMode: boolean): ISourceOptions {
  const particleColor = isDarkMode ? PARTICLE_COLOR_DARK : PARTICLE_COLOR_LIGHT;

  return {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'attract',
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        attract: {
          distance: MOUSE_ATTRACT_DISTANCE,
          duration: 0.4,
          speed: MOUSE_ATTRACT_SPEED,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: particleColor,
        distance: LINE_LINK_DISTANCE,
        enable: true,
        opacity: LINE_LINK_OPACITY,
        width: LINE_LINK_WIDTH,
      },
      move: {
        direction: PARTICLE_MOVE_DIRECTION,
        enable: true,
        outModes: {
          default: PARTICLE_MOVE_OUT_MODE,
        },
        random: PARTICLE_MOVE_RANDOM,
        speed: PARTICLE_MOVE_SPEED,
        straight: PARTICLE_MOVE_STRAIGHT,
      },
      number: {
        density: {
          enable: true,
        },
        value: PARTICLE_COUNT,
      },
      opacity: {
        value: {
          min: PARTICLE_OPACITY_MIN,
          max: PARTICLE_OPACITY_MAX,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {
          min: PARTICLE_SIZE_MIN,
          max: PARTICLE_SIZE_MAX,
        },
      },
    },
    detectRetina: true,
  };
}

