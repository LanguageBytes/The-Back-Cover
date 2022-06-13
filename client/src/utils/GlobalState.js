import React, { createContext, useContext } from "react";
import { useBookReducer } from './reducers'

const FavouriteContext = createContext();
const { Provider } = FavouriteContext;

const FavouriteProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useBookReducer({
    books: [],
    bookShelf: [],
    bookShelfOpen: false,
    // categories: [],
    // currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

// useFavouriteContext
const userFavouriteContext = () => {
  return useContext(FavouriteContext);
};

export { FavouriteProvider, userFavouriteContext };
