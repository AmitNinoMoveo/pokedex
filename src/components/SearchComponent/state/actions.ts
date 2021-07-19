import { SearchActionType, SearchActionTypeNames } from "./action-types";

export const searchSetOnChangeAction = (str: string): SearchActionType => {
  return {
    type: SearchActionTypeNames.SEARCH_SETSTATE,
    newState: str,
  };
};
