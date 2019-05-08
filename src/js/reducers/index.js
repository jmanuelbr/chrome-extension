import {
	combineReducers
} from 'redux';

import configuration from './app.reducer';

const rootReducer = combineReducers({
	configuration: configuration
});

export default rootReducer;
