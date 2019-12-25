import { UPDATE_SELECTED_ARTICLE } from "../actions/types";

const INITIAL_STATE = {
  mocksEnabled: true,
  articleSelected: {}
};

  export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SELECTED_ARTICLE: { 
      if (action.payload.title === state.articleSelected.title) {
        return Object.assign({}, state, {
          articleSelected: {}
        });  
      }
      return Object.assign({}, state, {
        articleSelected: action.payload
      });
    }
    default:
      return state;
  }
};
