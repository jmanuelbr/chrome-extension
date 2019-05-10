import {
    MOCKS_ENABLED
} from '../actions/types';

const INITIAL_STATE = {
	mocksEnabled: true,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MOCKS_ENABLED: {
			return {
				...state
			};
		}
		default:
			return state;
	}
};
