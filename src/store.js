import { applyMiddleware, createStore } from "redux";
import {createLogger} from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducer from "./reducers";

const middleware = applyMiddleware(createLogger(), promise(), thunk);

export default createStore(reducer, middleware)