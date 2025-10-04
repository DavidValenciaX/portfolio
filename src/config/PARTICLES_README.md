# 🎨 Guía Completa de Configuración de Partículas

Esta guía te ayudará a personalizar completamente el efecto de partículas en tu portfolio.

## 📁 Archivos Importantes

- **`particles.config.ts`** - Configuración activa de las partículas
- **`particles-presets.ts`** - Presets predefinidos listos para usar
- **`PARTICLES_README.md`** - Esta guía

---

## 🌊 Efecto "Onda en Agua"

Para lograr el efecto orgánico de ondas en agua que mencionaste:

### Parámetros Clave

```typescript
const MOUSE_REPULSE_DISTANCE = 200;        // Área grande de efecto
const MOUSE_REPULSE_SPEED = 3;             // Velocidad rápida inicial
const MOUSE_REPULSE_FACTOR = 5;            // Fuerza alta
const MOUSE_REPULSE_EASING = 'ease-out-expo'; // ⭐ CLAVE para desaceleración
const MOUSE_REPULSE_MAX_SPEED = 50;        // Velocidad máxima controlada
```

### ¿Cómo Funciona el Easing?

El parámetro **`easing`** controla la curva de desaceleración:

- **`ease-out-expo`**: Desaceleración exponencial
  - Inicio: 100% de velocidad
  - Medio: 50% de velocidad  
  - Final: Casi detenido
  - **Resultado**: Efecto perfecto de "onda en agua"

- **`ease-out-cubic`**: Desaceleración suave
  - Inicio: 100% de velocidad
  - Medio: 70% de velocidad
  - Final: Detención suave
  - **Resultado**: Natural pero menos dramático

- **`ease-out-back`**: Desaceleración con rebote
  - Inicio: 100% de velocidad
  - Medio: Desacelera
  - Final: "Rebote" hacia atrás
  - **Resultado**: Efecto juguetón

---

## 🎯 Todos los Parámetros Explicados

### 1. `MOUSE_REPULSE_DISTANCE` (50-300)

#### **Radio en píxeles donde las partículas son afectadas**

- `50` = Área pequeña, efecto concentrado
- `150` = ⭐ Equilibrado (recomendado)
- `300` = Área grande, efecto sutil en toda la pantalla

### 2. `MOUSE_REPULSE_SPEED` (0.1-10)

#### **Velocidad de la repulsión inicial**

- `0.5` = Muy lento, flotante
- `1-3` = ⭐ Rango recomendado
- `5-10` = Muy rápido, explosivo

### 3. `MOUSE_REPULSE_DURATION` (0.1-2)

#### **Duración del efecto en segundos**

- `0.2` = Efecto instantáneo
- `0.4` = ⭐ Natural (recomendado)
- `1+` = Efecto prolongado

### 4. `MOUSE_REPULSE_FACTOR` (1-10)

#### **Intensidad/fuerza de la repulsión**

- `1-2` = Suave, minimalista
- `3-5` = ⭐ Equilibrado
- `6-10` = Muy fuerte, dramático

### 5. `MOUSE_REPULSE_EASING`

#### **Curva de animación (ver tabla abajo)**

### 6. `MOUSE_REPULSE_MAX_SPEED` (10-100)

#### **Velocidad máxima que pueden alcanzar las partículas**

- `20` = Movimiento muy controlado
- `50` = ⭐ Equilibrado
- `80+` = Partículas pueden volar muy rápido

---

## 📊 Tabla de Tipos de Easing

| Tipo de Easing | Uso Recomendado | Efecto Visual |
|----------------|-----------------|---------------|
| `ease-out-expo` ⭐ | **Ondas en agua** | Desaceleración exponencial perfecta |
| `ease-out-cubic` ⭐ | Efecto natural general | Desaceleración suave y orgánica |
| `ease-out-quad` | Minimalista | Desaceleración ligera |
| `ease-out-back` ⭐ | Efecto juguetón | Desaceleración con "rebote" |
| `ease-out-quint` | Dramático | Desaceleración muy fuerte |
| `ease-out-circ` | Suave circular | Desaceleración en curva |
| `ease-in-out-cubic` | Transición elegante | Aceleración y desaceleración equilibradas |
| `linear` | Sci-fi / Mecánico | Sin curvas, velocidad constante |

---

## 🎮 Presets Listos para Usar

Copia estos valores directamente en `particles.config.ts`:

### 🌊 ONDA EN AGUA

```typescript
const MOUSE_REPULSE_DISTANCE = 200;
const MOUSE_REPULSE_SPEED = 3;
const MOUSE_REPULSE_DURATION = 0.4;
const MOUSE_REPULSE_FACTOR = 5;
const MOUSE_REPULSE_EASING = 'ease-out-expo';
const MOUSE_REPULSE_MAX_SPEED = 50;
```

**Efecto**: Ondas orgánicas como piedra en agua

---

### 🧲 MAGNÉTICO SUAVE

```typescript
const MOUSE_REPULSE_DISTANCE = 150;
const MOUSE_REPULSE_SPEED = 1;
const MOUSE_REPULSE_DURATION = 0.6;
const MOUSE_REPULSE_FACTOR = 2;
const MOUSE_REPULSE_EASING = 'ease-out-cubic';
const MOUSE_REPULSE_MAX_SPEED = 30;
```

**Efecto**: Repulsión muy suave y gradual

---

### 💥 EXPLOSIÓN FUERTE

```typescript
const MOUSE_REPULSE_DISTANCE = 250;
const MOUSE_REPULSE_SPEED = 8;
const MOUSE_REPULSE_DURATION = 0.3;
const MOUSE_REPULSE_FACTOR = 8;
const MOUSE_REPULSE_EASING = 'ease-out-quint';
const MOUSE_REPULSE_MAX_SPEED = 80;
```

**Efecto**: Partículas salen disparadas dramáticamente

---

### 🎈 EFECTO REBOTE

```typescript
const MOUSE_REPULSE_DISTANCE = 180;
const MOUSE_REPULSE_SPEED = 4;
const MOUSE_REPULSE_DURATION = 0.5;
const MOUSE_REPULSE_FACTOR = 4;
const MOUSE_REPULSE_EASING = 'ease-out-back';
const MOUSE_REPULSE_MAX_SPEED = 60;
```

**Efecto**: Partículas "rebotan" al alejarse

---

### 🫧 BURBUJA FLOTANTE

```typescript
const MOUSE_REPULSE_DISTANCE = 120;
const MOUSE_REPULSE_SPEED = 0.5;
const MOUSE_REPULSE_DURATION = 1;
const MOUSE_REPULSE_FACTOR = 1.5;
const MOUSE_REPULSE_EASING = 'ease-in-out-cubic';
const MOUSE_REPULSE_MAX_SPEED = 20;
```

**Efecto**: Muy lento, zen, flotante

---

### 🛸 CAMPO DE FUERZA (Sci-Fi)

```typescript
const MOUSE_REPULSE_DISTANCE = 180;
const MOUSE_REPULSE_SPEED = 2;
const MOUSE_REPULSE_DURATION = 0.4;
const MOUSE_REPULSE_FACTOR = 3;
const MOUSE_REPULSE_EASING = 'linear';
const MOUSE_REPULSE_MAX_SPEED = 40;
```

**Efecto**: Movimiento mecánico sin curvas

---

## 🔄 Otros Modos de Interacción

Puedes cambiar completamente el comportamiento modificando:

```typescript
mode: 'repulse'  // Cambia esto por:
```

### Opciones

| Modo | Descripción | Uso |
|------|-------------|-----|
| `'attract'` | Atrae partículas hacia el cursor | Efecto magnético inverso |
| `'bubble'` | Partículas crecen cerca del cursor | Visual llamativo |
| `'grab'` | Conecta partículas al cursor con líneas | Interactivo |
| `'push'` | Añade partículas temporales | Dinámico |
| `'remove'` | Elimina partículas | Minimalista |
| `'slow'` | Desacelera partículas | Efecto tiempo lento |

### Combinar Modos

```typescript
mode: ['repulse', 'grab']
```

Esto crea repulsión + líneas conectoras simultáneamente

---

## 🎨 Guía de Experimentación

### Para lograr el efecto "onda en agua"

1. **Empieza con**: Preset "ONDA EN AGUA"
2. **Ajusta `factor`**: Más alto = ondas más fuertes
3. **Prueba diferentes `easing`**:
   - `ease-out-expo` = Desaceleración exponencial ⭐
   - `ease-out-cubic` = Más suave
   - `ease-out-back` = Con rebote
4. **Modifica `speed`**: Más alto = ondas más rápidas al inicio
5. **Ajusta `distance`**: Más alto = ondas llegan más lejos

### Combinación Perfecta para "Ondas"

```typescript
SPEED alto (3-5) + EASING exponencial + FACTOR alto (4-6)
= Ondas rápidas que desaceleran gradualmente
```

---

## 💡 Tips

- **Prueba en modo claro Y oscuro**: Los colores cambian automáticamente
- **Rendimiento**: Más de 100 partículas puede ser pesado en móviles
- **Sutil es mejor**: Para portfolios profesionales, usa valores moderados
- **Experimenta**: Cambia valores de 1 en 1 para ver el efecto

---

## 🚀 Cómo Aplicar Cambios

1. Abre `src/config/particles.config.ts`
2. Modifica las constantes con los valores del preset que elijas
3. Guarda el archivo
4. Recarga el navegador (`Ctrl+R` o `Cmd+R`)
5. Mueve el cursor para probar el efecto
