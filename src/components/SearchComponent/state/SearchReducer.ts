import { SearchActionType, SearchActionTypeNames } from "./action-types";

const initialState = "";

const searchReducer = (state = initialState, action: SearchActionType) => {
  switch (action.type) {
    case SearchActionTypeNames.SEARCH_SETSTATE:
      return action.newState;
    case SearchActionTypeNames.SEARCH_RESET:
      return '';
    default:
      return state;
  }
};

export default searchReducer;