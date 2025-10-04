/**
 * Presets de Configuración de Partículas
 * =======================================
 * 
 * Este archivo contiene configuraciones predefinidas para diferentes efectos.
 * Copia y pega los valores en particles.config.ts para probarlos.
 */

/**
 * PRESET 1: ONDA EN AGUA (RECOMENDADO)
 * -------------------------------------
 * Efecto orgánico como piedra cayendo en agua
 * - Repulsión rápida inicial
 * - Desaceleración exponencial
 * - Movimiento fluido y natural
 */
export const WATER_RIPPLE = {
  MOUSE_REPULSE_DISTANCE: 200,
  MOUSE_REPULSE_SPEED: 3,
  MOUSE_REPULSE_DURATION: 0.4,
  MOUSE_REPULSE_FACTOR: 5,
  MOUSE_REPULSE_EASING: 'ease-out-expo' as const,
  MOUSE_REPULSE_MAX_SPEED: 50,
};

/**
 * PRESET 2: EFECTO MAGNÉTICO SUAVE
 * ---------------------------------
 * Repulsión suave y gradual
 * - Movimiento lento y continuo
 * - Desaceleración muy suave
 * - Ideal para fondos minimalistas
 */
export const MAGNETIC_SOFT = {
  MOUSE_REPULSE_DISTANCE: 150,
  MOUSE_REPULSE_SPEED: 1,
  MOUSE_REPULSE_DURATION: 0.6,
  MOUSE_REPULSE_FACTOR: 2,
  MOUSE_REPULSE_EASING: 'ease-out-cubic' as const,
  MOUSE_REPULSE_MAX_SPEED: 30,
};

/**
 * PRESET 3: EXPLOSIÓN FUERTE
 * ---------------------------
 * Repulsión muy intensa y rápida
 * - Partículas salen disparadas
 * - Desaceleración pronunciada
 * - Efecto dramático
 */
export const EXPLOSIVE = {
  MOUSE_REPULSE_DISTANCE: 250,
  MOUSE_REPULSE_SPEED: 8,
  MOUSE_REPULSE_DURATION: 0.3,
  MOUSE_REPULSE_FACTOR: 8,
  MOUSE_REPULSE_EASING: 'ease-out-quint' as const,
  MOUSE_REPULSE_MAX_SPEED: 80,
};

/**
 * PRESET 4: EFECTO REBOTE
 * ------------------------
 * Partículas que "rebotan" al alejarse
 * - Movimiento con rebote
 * - Desaceleración con overshoot
 * - Efecto juguetón
 */
export const BOUNCY = {
  MOUSE_REPULSE_DISTANCE: 180,
  MOUSE_REPULSE_SPEED: 4,
  MOUSE_REPULSE_DURATION: 0.5,
  MOUSE_REPULSE_FACTOR: 4,
  MOUSE_REPULSE_EASING: 'ease-out-back' as const,
  MOUSE_REPULSE_MAX_SPEED: 60,
};

/**
 * PRESET 5: BURBUJA FLOTANTE
 * ---------------------------
 * Repulsión muy lenta y suave
 * - Movimiento casi flotante
 * - Transición ultra suave
 * - Efecto zen y relajante
 */
export const FLOATING_BUBBLE = {
  MOUSE_REPULSE_DISTANCE: 120,
  MOUSE_REPULSE_SPEED: 0.5,
  MOUSE_REPULSE_DURATION: 1,
  MOUSE_REPULSE_FACTOR: 1.5,
  MOUSE_REPULSE_EASING: 'ease-in-out-cubic' as const,
  MOUSE_REPULSE_MAX_SPEED: 20,
};

/**
 * PRESET 6: CAMPO DE FUERZA
 * --------------------------
 * Repulsión constante y uniforme
 * - Sin desaceleración
 * - Movimiento lineal
 * - Efecto sci-fi
 */
export const FORCE_FIELD = {
  MOUSE_REPULSE_DISTANCE: 180,
  MOUSE_REPULSE_SPEED: 2,
  MOUSE_REPULSE_DURATION: 0.4,
  MOUSE_REPULSE_FACTOR: 3,
  MOUSE_REPULSE_EASING: 'linear' as const,
  MOUSE_REPULSE_MAX_SPEED: 40,
};

/**
 * CÓMO USAR ESTOS PRESETS:
 * -------------------------
 * 
 * 1. Abre src/config/particles.config.ts
 * 
 * 2. Reemplaza las constantes por las del preset elegido:
 * 
 *    Ejemplo con WATER_RIPPLE:
 *    ```typescript
 *    import { WATER_RIPPLE } from './particles-presets';
 *    
 *    const MOUSE_REPULSE_DISTANCE = WATER_RIPPLE.MOUSE_REPULSE_DISTANCE;
 *    const MOUSE_REPULSE_SPEED = WATER_RIPPLE.MOUSE_REPULSE_SPEED;
 *    // ... y así con todos los parámetros
 *    ```
 * 
 * 3. O simplemente copia los valores manualmente
 * 
 * 4. Guarda y recarga el navegador para ver los cambios
 */

/**
 * LISTA COMPLETA DE TIPOS DE EASING:
 * -----------------------------------
 */
export type EasingType =
  | 'linear'              // Sin aceleración/desaceleración
  | 'ease-in-quad'        // Aceleración suave
  | 'ease-in-cubic'       // Aceleración media
  | 'ease-in-quart'       // Aceleración fuerte
  | 'ease-in-quint'       // Aceleración muy fuerte
  | 'ease-in-expo'        // Aceleración exponencial
  | 'ease-in-circ'        // Aceleración circular
  | 'ease-in-back'        // Aceleración con "pre-movimiento"
  | 'ease-out-quad'       // Desaceleración suave ⭐ Recomendado para ondas
  | 'ease-out-cubic'      // Desaceleración media ⭐ Muy natural
  | 'ease-out-quart'      // Desaceleración fuerte
  | 'ease-out-quint'      // Desaceleración muy fuerte
  | 'ease-out-expo'       // Desaceleración exponencial ⭐ Efecto onda perfecta
  | 'ease-out-circ'       // Desaceleración circular
  | 'ease-out-back'       // Desaceleración con "rebote" ⭐ Efecto juguetón
  | 'ease-in-out-quad'    // Aceleración y desaceleración suaves
  | 'ease-in-out-cubic'   // Transición muy suave ⭐ Elegante
  | 'ease-in-out-quart'   // Transición pronunciada
  | 'ease-in-out-quint'   // Transición muy pronunciada
  | 'ease-in-out-expo'    // Transición exponencial
  | 'ease-in-out-circ'    // Transición circular
  | 'ease-in-out-back';   // Transición con rebotes

/**
 * OTROS MODOS DE INTERACCIÓN:
 * ----------------------------
 */
export const OTHER_INTERACTION_MODES = {
  // Atracción hacia el cursor
  ATTRACT: {
    mode: 'attract' as const,
    distance: 200,
    duration: 0.4,
    speed: 1,
  },
  
  // Las partículas crecen cerca del cursor
  BUBBLE: {
    mode: 'bubble' as const,
    distance: 200,
    size: 10,      // Tamaño cuando están cerca del cursor
    duration: 0.4,
    opacity: 1,    // Opacidad cuando están cerca
  },
  
  // Conecta partículas cercanas al cursor con líneas
  GRAB: {
    mode: 'grab' as const,
    distance: 200,
    lineLinked: {
      opacity: 0.5,
    },
  },
  
  // Añade partículas temporales al pasar el cursor
  PUSH: {
    mode: 'push' as const,
    quantity: 4,   // Cantidad de partículas a añadir
  },
  
  // Elimina partículas cerca del cursor
  REMOVE: {
    mode: 'remove' as const,
    quantity: 2,   // Cantidad de partículas a eliminar
  },
  
  // Desacelera partículas cerca del cursor
  SLOW: {
    mode: 'slow' as const,
    factor: 3,     // Factor de desaceleración
    radius: 200,   // Radio de efecto
  },
};

/**
 * EJEMPLO DE MÚLTIPLES MODOS COMBINADOS:
 * ---------------------------------------
 * Puedes combinar varios efectos:
 * 
 * mode: ['repulse', 'grab']
 * 
 * Esto creará:
 * - Repulsión de partículas
 * - Líneas conectando al cursor con partículas cercanas
 */

