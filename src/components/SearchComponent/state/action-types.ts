export enum SearchActionTypeNames {
  SEARCH_SETSTATE = "SEARCH_SETSTATE",
}

export type SearchActionType = {
  type: SearchActionTypeNames.SEARCH_SETSTATE;
  newState: string;
};
