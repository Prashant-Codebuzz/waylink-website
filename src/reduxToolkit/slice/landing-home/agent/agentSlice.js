import { createSlice } from "@reduxjs/toolkit"
import { reqToTopAgent } from "../../../services/landing-home/agent/agentServices";

const initialState = {
    loader: false,
    data: [],
    error: ""
}

const agentList = createSlice({
    name: "agentList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToTopAgent
        builder.addCase(reqToTopAgent.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToTopAgent.fulfilled, (state, action) => {
            state.loader = false;
            state.wishlist = action.payload;
        })
        builder.addCase(reqToTopAgent.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

    }
})

export default agentList.reducer