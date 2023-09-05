import {configureStore} from '@reduxjs/toolkit'
import getUsersSlice from "./modules/reducers/getUsersSlice";



const store = configureStore({
    reducer: {
        getUsers: getUsersSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store