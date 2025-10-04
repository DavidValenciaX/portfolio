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

// Constantes de interactividad - Repulsión
const MOUSE_REPULSE_DISTANCE = 150;       // Radio de repulsión (px)
const MOUSE_REPULSE_SPEED = 1;            // Velocidad de repulsión (1-10, mayor = más rápido)
const MOUSE_REPULSE_DURATION = 0.4;       // Duración del efecto (segundos)
const MOUSE_REPULSE_FACTOR = 3;           // Factor de intensidad (1-10, mayor = más fuerte)
const MOUSE_REPULSE_EASING = 'ease-out-quad' as const; // Tipo de desaceleración para efecto "onda"
const MOUSE_REPULSE_MAX_SPEED = 50;       // Velocidad máxima de las partículas al ser repelidas

// Constantes de enlaces entre partículas
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
          mode: 'repulse',
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        repulse: {
          distance: MOUSE_REPULSE_DISTANCE,    // Radio de efecto
          speed: MOUSE_REPULSE_SPEED,          // Velocidad inicial
          duration: MOUSE_REPULSE_DURATION,    // Duración
          factor: MOUSE_REPULSE_FACTOR,        // Intensidad
          easing: MOUSE_REPULSE_EASING,        // Curva de desaceleración (efecto onda)
          maxSpeed: MOUSE_REPULSE_MAX_SPEED,   // Límite de velocidad
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

/**
 * GUÍA DE PARÁMETROS AVANZADOS
 * =============================
 * 
 * PARÁMETROS DE REPULSE:
 * ----------------------
 * distance: Radio en píxeles donde las partículas son repelidas (50-300)
 * speed: Velocidad de repulsión (0.1-10, mayor = más rápido)
 * duration: Duración del efecto en segundos (0.1-2)
 * factor: Intensidad de la repulsión (1-10, mayor = más fuerte)
 * maxSpeed: Velocidad máxima que pueden alcanzar las partículas (10-100)
 * easing: Curva de animación para efecto más orgánico
 * 
 * TIPOS DE EASING (curvas de animación):
 * ---------------------------------------
 * Para efecto "onda en agua" (rápido al inicio, desacelera):
 * - 'ease-out-quad'   ⭐ Recomendado - Desaceleración suave
 * - 'ease-out-cubic'  ⭐ Desaceleración más pronunciada
 * - 'ease-out-quart'  - Desaceleración muy fuerte
 * - 'ease-out-quint'  - Desaceleración extrema
 * - 'ease-out-expo'   - Desaceleración exponencial
 * - 'ease-out-circ'   - Desaceleración circular
 * - 'ease-out-back'   - Desaceleración con "rebote" al final
 * 
 * Para efecto más suave:
 * - 'ease-in-out-quad'  - Aceleración y desaceleración equilibradas
 * - 'ease-in-out-cubic' - Transición muy suave
 * 
 * OTROS MODOS DE INTERACCIÓN DISPONIBLES:
 * ----------------------------------------
 * Puedes cambiar mode: 'repulse' por:
 * 
 * - 'attract'  - Las partículas son atraídas hacia el cursor
 * - 'bubble'   - Las partículas crecen cerca del cursor
 * - 'grab'     - Conecta las partículas cercanas con líneas al cursor
 * - 'push'     - Añade nuevas partículas al hacer hover
 * - 'remove'   - Elimina partículas cerca del cursor
 * - 'slow'     - Desacelera las partículas cerca del cursor
 * 
 * También puedes combinar varios modos:
 * mode: ['repulse', 'grab'] - Repulsión + conexiones visuales
 * 
 * EJEMPLO DE CONFIGURACIÓN "ONDA EN AGUA":
 * -----------------------------------------
 * const MOUSE_REPULSE_DISTANCE = 200;
 * const MOUSE_REPULSE_SPEED = 3;
 * const MOUSE_REPULSE_FACTOR = 5;
 * const MOUSE_REPULSE_EASING = 'ease-out-expo';
 * const MOUSE_REPULSE_MAX_SPEED = 50;
 * 
 * Esto crea un efecto donde:
 * 1. Las partículas se alejan rápidamente al inicio (speed: 3)
 * 2. Desaceleran exponencialmente (ease-out-expo) como ondas en agua
 * 3. Área de efecto amplia (distance: 200)
 * 4. Efecto fuerte (factor: 5)
 */
