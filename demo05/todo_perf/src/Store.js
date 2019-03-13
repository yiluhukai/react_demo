import { createStore ,combineReducers,applyMiddleware,compose} from "redux";
import { reducer as  TodoReducer} from './todos';
import { reducer as  FilterReducer} from './filter';
//createStore只能接受一个reducer,使用combineReducers组合多个reducer
const reducer = combineReducers({todos:TodoReducer,filter:FilterReducer});
//由于全局变量不会压缩，所以给全局变量一个短一点的名字
const win = window;
//在生产模式下启用中间件
const middlewares = [];
if(process.env.NODE_ENV !=='production'){
  //检查reducer是否修改了state
  middlewares.push(require('redux-immutable-state-invariant').default());
} 
//添加redux-devtools
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
export default createStore(reducer,{}, storeEnhancers);