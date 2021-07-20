export enum SearchActionTypeNames {
  SEARCH_SETSTATE = "SEARCH_SETSTATE",
  SEARCH_RESET = "SEARCH_RESET",
}

type SearchSetState = {
  type: SearchActionTypeNames.SEARCH_SETSTATE;
  newState: string;
};

type SearchReset = {
  type: SearchActionTypeNames.SEARCH_RESET;
}

export type SearchActionType =
  | SearchSetState
  | SearchReset