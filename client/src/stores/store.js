import { createStore } from 'redux'
import reducers from '../reducers'
import AuthAPI from '../utils/auth'
import { USER_UPDATED } from '../actions'

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

AuthAPI.isLoggedin().then(user => {
    store.dispatch(USER_UPDATED(user))
}).catch(e => console.log(e))

export default store
