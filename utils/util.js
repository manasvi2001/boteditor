export const lighten = (val, percentage) => {
  let r = val.r + Math.floor(((percentage)/100) * (255 - val.r));
  let g = val.g + Math.floor(((percentage)/100) * (255 - val.g));
  let b = val.b + Math.floor(((percentage)/100) * (255 - val.b));
  console.log(r,g,b);
  return `rgba(${r},${g},${b},${val.a})`;
}