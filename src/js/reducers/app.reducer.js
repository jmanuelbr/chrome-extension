import { UPDATE_SELECTED_ARTICLE } from "../actions/types";

const INITIAL_STATE = {
  mocksEnabled: false,
  articleSelected: {}
};

  export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SELECTED_ARTICLE: { 
      let articleSelected = {};
      if (action.payload.title !== state.articleSelected.title) {
        articleSelected = action.payload;
      }
      return Object.assign({}, state, {
        articleSelected: articleSelected
      });  
    }
    default:
      return state;
  }
};
