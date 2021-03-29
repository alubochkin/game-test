import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducerGame from './reducer';


const store = createStore(
  reducerGame, 
  devToolsEnhancer()
);



export default store;