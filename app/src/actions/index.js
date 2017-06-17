import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import axios from 'axios';

const rootReducer = combineReducers ({
  form: formReducer;
})

const store = createStore(rootReducer);
