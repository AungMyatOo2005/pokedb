import { ExtractId } from "../function/ExtractId";
import RemoveIds from "../function/RemoveIds";
import pokeball from "../assets/icons/pokeball.png";
import StructureEvolution from "../function/StructureEvolution";

const initialState = {
  itemLimit: 20,
  loading: [],
  isError: false,
  results: null,
  pokemon: null,
  pokemonEntries: {},
  count: null,
  loadingLabel: "Loading...",
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "PER_PAGE_CHANGE": {
      return {
        ...state,
        itemLimit: action.count,
      };
    }
    case "FETCH_START": {
      let label;
      switch (action.successActionType) {
        case "FETCH_POKEMONS_SUCCESS":
          label = "Fetching pokemons....";
          break;
        case "FETCH_POKEMON_SUCCESS":
          label = "Fetching basic data...";
          break;
        case "FETCH_SPECIES_SUCCESS":
          label = "Fetching species data...";
          break;
        case "FETCH_ABILITIES_SUCCESS":
          label = "Fetching abilities data...";
          break;
        case "FETCH_EVOLUTION_SUCCESS":
          label = "Fetching evolution data...";
          break;
        default:
          label = "Loading...";
      }
      return {
        ...state,
        loadingLabel: label,
        loading: state.loading.concat(action.taskId),
      };
    }
    case "FETCH_POKEMONS_SUCCESS": {
      const pokemonArr = action.payload?.results;
      const [pokemonIds, pokemonEntries] = pokemonArr.reduce(
        (result, pokemon) => {
          const id = ExtractId(pokemon.url);
          return [result[0].concat(id), { ...result[1], [pokemon.name]: id }];
        },
        [[], {}]
      );
      return {
        ...state,
        isError: false,
        loading: RemoveIds(state.loading, action.taskId),
        pokemonEntries: { ...state.pokemonEntries, ...pokemonEntries },
        results: pokemonIds,
        count: action.payload.count,
      };
    }
    case "FETCH_POKEMON_SUCCESS": {
      const { sprites } = action.payload;
      const artwork =
        sprites?.other?.dream_world?.front_default ??
        sprites?.other?.home?.front_default ??
        sprites?.other?.["official-artwork"]?.front_default ??
        sprites?.front_default ??
        pokeball;

      return {
        ...state,
        isError: false,
        loading: RemoveIds(state.loading, action.taskId),
        pokemon: {
          ...state.pokemon,
          [action.payload.id]: { ...action.payload, artwork },
        },
        pokemonEntries: {
          ...state.pokemonEntries,
          [action.payload.name]: action.payload.id,
        },
      };
    }
    case "FETCH_SPECIES_SUCCESS": {
      return {
        ...state,
        isError: false,
        loading: RemoveIds(state.loading, action.taskId),
        pokemon: {
          ...state.pokemon,
          [action.payload.id]: {
            ...state.pokemon?.[action.payload.id],
            species: {
              ...action.payload,
            },
          },
        },
      };
    }

    case "FETCH_ABILITIES_SUCCESS": {
      return {
        ...state,
        isError: false,
        loading: RemoveIds(state.loading, action.taskId),
        pokemonAbilities: {
          ...state.pokemonAbilities,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    }

    case "FETCH_EVOLUTION_SUCCESS": {
      const evolutions = StructureEvolution(action.payload.chain);
      const evolutionsEntries = evolutions.map((evolutions, i, arr) => {
        return [
          evolutions[0],
          {
            ...state.pokemon?.[evolutions[0]],
            evolutions: arr,
          },
        ];
      });
      const evolutionsForEach = Object.fromEntries(evolutionsEntries);
      return {
        ...state,
        isError: false,
        loading: RemoveIds(state.loading, action.taskId),
        pokemon: {
          ...state.pokemon,
          ...evolutionsForEach,
        },
      };
    }
    case "FETCH_FAIL": {
      return {
        ...state,
        loading: RemoveIds(state.loading, action.taskId),
        isError: action.error,
      };
    }
    case "DISMISS_ERROR": {
      return {
        ...state,
        isError: false,
      };
    }
    default:
      return state;
  }
};

export { initialState, AppReducer };
