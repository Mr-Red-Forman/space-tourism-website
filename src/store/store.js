import { combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'

// import { reviewReducer } from './review.reducer'
const rootReducer = combineReducers({
   
    // systemModule: systemReducer,
    // reviewModule: reviewReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)


store.subscribe(() => {
    console.log('**** Store state changed: ****')
    console.log('storeState:\n', store.getState())
    console.log('*******************************')
})



