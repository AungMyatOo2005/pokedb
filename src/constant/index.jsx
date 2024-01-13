const colorByType = [
  { name: "normal", color: "rgb(255, 108, 34)" },
  { name: "fighting", color: "rgb(241, 246, 249)" },
  { name: "flying", color: "rgb(57, 198, 219)" },
  { name: "poison", color: "rgb(53, 21, 93)" },
  { name: "ground", color: "rgb(176, 97, 97)" },
  { name: "rock", color: "rgb(119, 107, 93)" },
  { name: "bug", color: "rgb(122, 157, 84)" },
  { name: "ghost", color: "rgb(173, 196, 206)" },
  { name: "steel", color: "rgb(125, 124, 124)" },
  { name: "fire", color: "rgb(240, 2, 2)" },
  { name: "water", color: "rgb(131, 162, 255)" },
  { name: "grass", color: "rgb(3, 201, 136)" },
  { name: "electric", color: "rgb(240, 222, 54)" },
  { name: "psychic", color: "rgb(130, 148, 196)" },
  { name: "ice", color: "rgb(152, 228, 255)" },
  { name: "dragon", color: "rgb(135, 35, 65)" },
  { name: "dark", color: "rgb(0, 0, 0)" },
  { name: "fairy", color: "rgb(255, 116, 177)" },
  { name: "shadow", color: "rgb(70, 65, 89)" },
  { name: "unknown", color: "rgb(235, 228, 209)" },
];

const eggColor = {
  monster: getColorByType("fire"),
  water1: getColorByType("water"),
  water2: darkenColor(getColorByType("water"), 5),
  water3: darkenColor(getColorByType("water"), 10),
  bug: getColorByType("bug"),
  flying: getColorByType("flying"),
  ground: getColorByType("ground"),
  fairy: getColorByType("fairy"),
  plant: getColorByType("grass"),
  humanshape: getColorByType("unknown"),
  mineral: getColorByType("rock"),
  indeterminate: getColorByType("unknown"),
  ditto: getColorByType("ground"),
  dragon: getColorByType("fire"),
  "no-eggs": getColorByType("ghost"),
};

function getColorByType(type) {
  const typeInfo = colorByType.find((colorType) => colorType.name === type);
  return typeInfo ? typeInfo.color : "rgb(255, 255, 255)";
}

function darkenColor(color, percentage) {
  const rgbValues = color.match(/\d+/g).map(Number);
  const darkenedValues = rgbValues.map((value) =>
    Math.max(0, Math.round(value * (1 - percentage / 100)))
  );
  return `rgb(${darkenedValues.join(", ")})`;
}

export { getColorByType, eggColor };
