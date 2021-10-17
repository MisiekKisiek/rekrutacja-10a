import { createStore } from "redux";
import reducers from "./reducers/reducers";
import data from './products.json';
import { v4 as uuidv4 } from 'uuid';

const products = data.products.map( product => Object.assign( product, { id: uuidv4 () }));

const initialStore = { cart:[], products, general: data.general }

const store = createStore( reducers, initialStore );
export default  store;