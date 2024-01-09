import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allFavorites, action.payload],
        allFavorites: [...state.allFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => {
          return character.id != action.payload;
        }),
      };

    case FILTER:
      // const filterByGender = [...state.allFavorites].filter((favorite) => favorite.gender === action.payload);
      return {
        ...state,
        // myFavorites: filterByGender,
        myFavorites: [...state.allFavorites].filter(
          (favorite) => favorite.gender === action.payload
        ),
      };

    case ORDER:
      // const favoritesOrdered =
      //   action.payload === "Ascendente"
      //     ? [...state.myFavorites].sort((a, b) => a.id - b.id)
      //     : [...state.myFavorites].sort((a, b) => b.id - a.id);

      return {
        ...state,
        // myFavorites: favoritesOrdered,
        myFavorites: action.payload === "Ascendente"
          ? [...state.myFavorites].sort((a, b) => a.id - b.id)
          : [...state.myFavorites].sort((a, b) => b.id - a.id)
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
