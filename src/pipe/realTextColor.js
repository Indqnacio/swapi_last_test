export function realTextToColor(text) {
  if (!text || text == "white") {
    return { background: '#e0e0e0', color: '#333' };
  }

  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = text;

  const isValid =
    ctx.fillStyle !== "#000000" || text.toLowerCase() === "black";

  const background = isValid ? ctx.fillStyle : hashToColor(text);
  const color = getContrastColor(background);

  return { background, color };
}

//bajar la intensidad
function getContrastColor(bg) {
  const c = bg.substring(1); 
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const luminance = (0.299*r + 0.587*g + 0.114*b);
  return luminance > 186 ? '#000' : '#fff';
}

function hashToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}