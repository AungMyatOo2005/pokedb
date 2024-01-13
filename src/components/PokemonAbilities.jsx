import { UseAppContext, UseFetch } from "../hooks";
const PokemonAbilities = ({ id, is_hidden, index }) => {
  const { state } = UseAppContext();
  const abilities = state?.pokemonAbilities?.[id];
  state.pokemonAbilities?.[id] ||
    UseFetch({
      url: `https://pokeapi.co/api/v2/ability/${id}`,
      successAction: { type: "FETCH_ABILITIES_SUCCESS" },
    });
  const abilityText = abilities?.effect_entries?.find((ability) => {
    return ability.language.name === "en";
  });
  const abilitiesEffect = abilityText?.effect;
  const textBox = document.getElementsByClassName("text-box")[index];
  const handleShow = () => {
    if (!textBox.classList.contains("hidden")) {
      textBox.classList.add("hidden");
    } else {
      textBox.classList.remove("hidden");
    }
  };
  const handleLeave = () => {
    textBox.classList.add("hidden");
  };
  return (
    <div className="relative" onMouseLeave={handleLeave}>
      <div
        className={`${
          !is_hidden ? "" : "blur-[2px] hover:blur-0"
        } bg-[#d1d1d1] py-1 px-2 rounded-full flex items-center gap-2 cursor-pointer`}
      >
        {abilities?.name}
        <button
          className=" bg-[#0496C7] text-white w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-help"
          onClick={handleShow}
        >
          ?
        </button>
      </div>
      <div className="absolute bg-[#0496C7] max-w-[400px] w-[400px] text-white top-8 z-[20] py-1 px-2 rounded-md text-box hidden">
        {abilitiesEffect}
      </div>
    </div>
  );
};

export default PokemonAbilities;
