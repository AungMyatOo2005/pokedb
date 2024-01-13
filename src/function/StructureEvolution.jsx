import { ExtractId } from "./ExtractId";

const StructureEvolution = (evolution) => {
  const id = ExtractId(evolution.species?.url);
  const newEvolution = { ...evolution };
  delete newEvolution.evolves_to;
  return !evolution.evolves_to.length
    ? [[id, newEvolution]]
    : [[id, newEvolution]].concat(StructureEvolution(...evolution.evolves_to));
};
export default StructureEvolution;
