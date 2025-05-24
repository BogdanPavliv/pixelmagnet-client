import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'

const initialState = {
    posts: [],
    popularPosts: [],
    loading: false,
}


export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const { data } = await axios.get('/posts')
        console.log(data);
        if (data) {
            return data
        } else {
            console.log("Error data");
        }
        
    } catch (error) {
        console.log(error)
    }
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Getting all posts
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload.posts
                state.popularPosts = action.payload.popularPosts
            })
            .addCase(getAllPosts.rejected, (state) => {
                state.loading = false
            })
    },
})

export default postSlice.reducer