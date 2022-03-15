import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(thunk));
const persistedStore = persistStore(store);

export default { store, persistedStore };
