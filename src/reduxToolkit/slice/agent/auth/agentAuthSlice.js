import { createSlice } from "@reduxjs/toolkit";
import { reqToAgentChangePass, reqToAgentForgetPass, reqToAgentOtpVerification, reqToAgentReSendOtp, reqToAgentSignIn, reqToAgentWorkProfile, reqToCreateAgentProfile, reqToRegisterAgent } from "../../../services/agent/auth/agentAuthServices";

const initialState = {
    loader: false,
    user: null,
    userProfile: {},
    token: null,
    error: ""
}

const agentAuthSlice = createSlice({
    name: "agentAuth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToRegisterAgent
        builder.addCase(reqToRegisterAgent.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToRegisterAgent.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToRegisterAgent = action.payload;
        });
        builder.addCase(reqToRegisterAgent.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToAgentOtpVerification
        builder.addCase(reqToAgentOtpVerification.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToAgentOtpVerification.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToAgentOtpVerification = action.payload;
        });
        builder.addCase(reqToAgentOtpVerification.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToCreateAgentProfile
        builder.addCase(reqToCreateAgentProfile.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToCreateAgentProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToCreateAgentProfile = action.payload;
        });
        builder.addCase(reqToCreateAgentProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToAgentSignIn
        builder.addCase(reqToAgentSignIn.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToAgentSignIn.fulfilled, (state, action) => {
            state.loader = false;
            state.user = action.payload.data.data;
            state.token = action.payload.data.data.authentication?.accessToken;
        });
        builder.addCase(reqToAgentSignIn.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToAgentForgetPass
        builder.addCase(reqToAgentForgetPass.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToAgentForgetPass.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToAgentForgetPass = action.payload;
        });
        builder.addCase(reqToAgentForgetPass.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToAgentReSendOtp
        builder.addCase(reqToAgentReSendOtp.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToAgentReSendOtp.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToAgentReSendOtp = action.payload;
        });
        builder.addCase(reqToAgentReSendOtp.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToAgentChangePass
        builder.addCase(reqToAgentChangePass.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToAgentChangePass.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToAgentChangePass = action.payload;
        });
        builder.addCase(reqToAgentChangePass.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToAgentWorkProfile
        builder.addCase(reqToAgentWorkProfile.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToAgentWorkProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToAgentWorkProfile = action.payload;
        });
        builder.addCase(reqToAgentWorkProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });
    }
})

export default agentAuthSlice.reducer;