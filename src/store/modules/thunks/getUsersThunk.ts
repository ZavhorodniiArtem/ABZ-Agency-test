import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const getUsersThunk = createAsyncThunk(
    'getUsers/getUsersThunk',
    async (count?: number) => {
        try {
            const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count || 6}`)
            return response.data
        } catch (error) {
            throw error
        }
    })