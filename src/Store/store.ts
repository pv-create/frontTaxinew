import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import reducers from './Reducers/indexredusers';


//reducers экспортируются из файла indexreducers
const rootReducer=combineReducers(reducers) //здесь будет прописана логика управления состоянием первый параметр это значение состояния второй action


export  const  store=createStore(rootReducer, applyMiddleware(thunk))//сдесь будет храниться состояние приложения

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;