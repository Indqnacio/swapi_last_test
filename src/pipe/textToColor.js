// Genera un color de fondo y color de texto consistente a partir de un texto
// Este es mas pensando para chips de personas o cosas mas regulares y NO COLORES
// Devuelve background, color 
export function realColor(text) {
  if (!text) {
    return {
      backgroundColor: "var(--color-fondo-chip)",
      color: "var(--color-texto-chip)",
    };
  }

  const h = hashString(String(text));
  const hue = h % 360;

  return {
    backgroundColor: `hsl(${hue} 70% 90%)`,
    color: `hsl(${hue} 80% 25%)`,
  };
}

function hashString(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}
