import { createSlice } from "@reduxjs/toolkit"
import { reqToLandingAgent, reqToLandingAgentDetail, reqToTopLandingReview } from "../../../services/landing-home/agent/agentServices";

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
        // reqToLandingAgent
        builder.addCase(reqToLandingAgent.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToLandingAgent.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload;
        })
        builder.addCase(reqToLandingAgent.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

        // reqToTopLandingReview
        builder.addCase(reqToTopLandingReview.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToTopLandingReview.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload;
        })
        builder.addCase(reqToTopLandingReview.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

    }
})

export default agentList.reducer