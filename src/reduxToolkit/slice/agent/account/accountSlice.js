import { createSlice } from "@reduxjs/toolkit"
import { reqToAgentEditProfile, reqToGetMyAgentReviews } from "../../../services/agent/account/accountServices";

const initialState = {
    loader: false,
    data: [],
    myReviews: [],
    error: ""
}

const agentAccount = createSlice({
    name: 'agentAccount',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToAgentGetProfile
        builder.addCase(reqToAgentGetProfile.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToAgentGetProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToAgentGetProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })


        // reqToAgentEditProfile
        builder.addCase(reqToAgentEditProfile.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToAgentEditProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToAgentEditProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

        
        // reqToGetMyAgentReviews
        builder.addCase(reqToGetMyAgentReviews.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToGetMyAgentReviews.fulfilled, (state, action) => {
            state.loader = false;
            state.myReviews = action.payload?.data?.data || [];
        })
        builder.addCase(reqToGetMyAgentReviews.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })
    }
})

export default agentAccount.reducer