import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as themeReducer} from "./reducer";

import thunk from "redux-thunk";

const rootRouter = combineReducers({themeReducer})

export const Store = legacy_createStore(rootRouter,applyMiddleware(thunk));