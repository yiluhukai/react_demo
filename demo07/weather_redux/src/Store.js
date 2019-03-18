import { createStore ,combineReducers,applyMiddleware,compose} from 'redux';
import { reducer as  WeatherReducer} from './weather';
import thunkMiddleware from 'redux-thunk';
import { startMiddleware, endMiddleWare } from './myMiddleWare'
//createStore只能接受一个reducer,使用combineReducers组合多个reducer
const reducer = combineReducers({ weather : WeatherReducer });
//由于全局变量不会压缩，所以给全局变量一个短一点的名字
const win = window;
//在生产模式下启用中间件
const middlewares = [thunkMiddleware];

if(process.env.NODE_ENV !=='production'){
  //检查reducer是否修改了state
  //middlewares.push(require('redux-immutable-state-invariant').default());
  middlewares.push(startMiddleware,endMiddleWare);
} 
//添加redux-devtools
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
export default createStore(reducer,{}, storeEnhancers);