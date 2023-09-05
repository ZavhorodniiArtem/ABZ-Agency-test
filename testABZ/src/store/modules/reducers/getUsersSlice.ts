import {createSlice} from "@reduxjs/toolkit";
import {getUsersThunk} from "../thunks/getUsersThunk";
import {InitialState} from "../types";

const state: InitialState = {
    users: null,
    status: 'loading...',
    error: '',
    loading: false,
    totalUsers: 0
}

const getUsersSlice = createSlice({
    name: 'getUsers',
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(getUsersThunk.pending, (state) => {
            state.status = 'loading...'
            state.error = ''
            state.loading = true
        }
    ),
        builder.addCase(getUsersThunk.fulfilled, (state, {payload}) => {
            state.status = 'resolved'
            state.users = payload.users
            state.totalUsers = payload.total_users
            state.loading = false
        }),
            builder.addCase(getUsersThunk.rejected, (state, {payload}) => {
                state.status = 'rejected'
                state.error = <string>payload
            })
    }
})

export default getUsersSlice.reducer
export const getUsersActions = getUsersSlice.actions