import Dispatcher from './AppDispatcher'
import {EventEmitter} from 'events';
import * as ActionTypes from './ActionTypes'
const CHANGE_EVENT="changed"
const counterValues = {
  "First":0,
  "Second":10,
  "Third":30
}

const CounterStore = {
  ...EventEmitter.prototype,
  getCounterValues(){
    return counterValues
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback)
  },
  removeChangeListener(callback){
    this.removeChangeListener(CHANGE_EVENT,callback)
  }
}
//改变CounterStore的值，并触发对应的监听事件
CounterStore.dispatchToken = Dispatcher.register((action)=>{
  if(action.type === ActionTypes.INCREMENT){
    counterValues[action.couterCaption]++;
    CounterStore.emitChange();
  }else if(action.type=== ActionTypes.DECREMENT){
    counterValues[action.couterCaption]--;
    CounterStore.emitChange();
  }
})

export default CounterStore;