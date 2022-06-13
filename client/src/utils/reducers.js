import { useReducer } from 'react';
import {
  UPDATE_BOOKS,
  ADD_TO_BOOKSHELF,
  UPDATE_BOOKSHELF_QUANTITY,
  REMOVE_FROM_BOOKSHELF,
  ADD_MULTIPLE_TO_BOOKSHELF,
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
  CLEAR_BOOKSHELF,
  TOGGLE_BOOKSHELF,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update books array. We use the action.books property and spread it's contents into the new array.
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };

    case ADD_TO_BOOKSHELF:
      return {
        ...state,
        bookShelfOpen: true,
        bookShelf: [...state.bookShelf, action.book],
      };
    case ADD_MULTIPLE_TO_BOOKSHELF:
      return {
        ...state,
        bookShelf: [...state.bookShelf, ...action.books],
      };
    // Returns a copy of state, sets the bookshelfOpen to true and maps through the items in the bookshelf.
    // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    case UPDATE_BOOKSHELF_QUANTITY:
      return {
        ...state,
        bookShelfOpen: true,
        bookShelf: state.bookShelf.map((book) => {
          if (action._id === book._id) {
            book.purchaseQuantity = action.purchaseQuantity;
          }
          return book;
        }),
      };

    // First we iterate through each item in the bookshelf and check to see if the `book._id` matches the `action._id`
    // If so, we remove it from our bookshelf and set the updated state to a variable called `newState`
    case REMOVE_FROM_BOOKSHELF:
      let newState = state.bookShelf.filter((book) => {
        return book._id !== action._id;
      });

      // Then we return a copy of state and check to see if the bookshelf is empty.
      // If not, we set the bookshelfOpen status to  `true`. Then we return an updated bookshelf array set to the value of `newState`.
      return {
        ...state,
        bookShelfOpen: newState.length > 0,
        bookShelf: newState,
      };

    case CLEAR_BOOKSHELF:
      return {
        ...state,
        bookShelfOpen: false,
        bookShelf: [],
      };

    case TOGGLE_BOOKSHELF:
      return {
        ...state,
        bookShelfOpen: !state.bookShelfOpen,
      };

    // case UPDATE_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: [...action.categories],
    //   };

    // case UPDATE_CURRENT_CATEGORY:
    //   return {
    //     ...state,
    //     currentCategory: action.currentCategory,
    //   };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useBookReducer(initialState) {
  return useReducer(reducer, initialState);
}
