import { createSlice } from "@reduxjs/toolkit"
import { reqToAgentReview, reqToGetAgentDetail, reqToGetAllAgent, reqToTopReview } from "../../../services/user/default/agentListServices";

const initialState = {
    loader: false,
    data: [],
    error: ""
}

const allAgent = createSlice({
    name: "allAgent",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToGetAllAgent
        builder.addCase(reqToGetAllAgent.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToGetAllAgent.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToGetAllAgent.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

        // reqToGetAgentDetail
        builder.addCase(reqToGetAgentDetail.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToGetAgentDetail.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToGetAgentDetail.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

        // reqToTopReview
        builder.addCase(reqToTopReview.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToTopReview.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToTopReview.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

        // reqToAgentReview
        builder.addCase(reqToAgentReview.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToAgentReview.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToAgentReview.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })
    }
})

export default allAgent.reducer