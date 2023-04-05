
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state, action) {
            console.log(state.counter)
            state.counter=state.counter+action.payload
        }
        , decrement(state,action) {
            state.counter=state.counter-action.payload
        }
        , togglecounter(state) {
            state.showCounter= !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: false },
    reducers: {
        logIn(state) {
            state.loggedIn=true
        },
        logOut(state) {
            state.loggedIn=false
        }
    }
})


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth:authSlice.reducer
}
    
})
export const authactions=authSlice.actions
export const storeactions=counterSlice.actions
export default store