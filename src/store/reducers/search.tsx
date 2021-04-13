import Immutable from "seamless-immutable";

export const INITIAL_STATE = Immutable({
  isSearchLoading: false,
  results: [],
});

export default function user(state: any = INITIAL_STATE, action: any) {
  if (typeof state === "undefined") {
    return INITIAL_STATE;
  }

  switch (action.type) {
    // case types.RECORD_DONT_HAVE_CHECKED:
    case "types.RECORD_DONT_HAVE_CHECKED":
      return {
        ...state,
        profileClientFieldsForm: {
          ...state.profileClientFieldsForm,
          [action.payload.id]: {
            ...state.profileClientFieldsForm[action.payload.id],
            isDontHaveLoading: action.payload.loading,
            isDontHaveChecked: action.payload.checked,
            values: [],
          },
        },
      };

    default:
      return state;
  }
}
