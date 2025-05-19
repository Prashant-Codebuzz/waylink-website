import { createSlice } from "@reduxjs/toolkit";
import { reqToCreateUserProfile, reqToOtpVerification, reqToRegisterUser, reqToUseForgetPass, reqTouserChangePass, reqTouserReSendOtp, reqToUserSignIn } from "../../../services/user/auth/userAuthServices";

const initialState = {
    loader: false,
    user: null,
    userProfile: {},
    token: null,
    error: ""
}

const userAuthSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToRegisterUser
        builder.addCase(reqToRegisterUser.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToRegisterUser.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToRegisterUser = action.payload;
        });
        builder.addCase(reqToRegisterUser.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToOtpVerification
        builder.addCase(reqToOtpVerification.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToOtpVerification.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToOtpVerification = action.payload;
        });
        builder.addCase(reqToOtpVerification.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToCreateUserProfile
        builder.addCase(reqToCreateUserProfile.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToCreateUserProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToCreateUserProfile = action.payload;
        });
        builder.addCase(reqToCreateUserProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToUserSignIn
        builder.addCase(reqToUserSignIn.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToUserSignIn.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToUserSignIn = action.payload;
        });
        builder.addCase(reqToUserSignIn.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqToUseForgetPass
        builder.addCase(reqToUseForgetPass.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqToUseForgetPass.fulfilled, (state, action) => {
            state.loader = false;
            state.reqToUseForgetPass = action.payload;
        });
        builder.addCase(reqToUseForgetPass.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqTouserReSendOtp
        builder.addCase(reqTouserReSendOtp.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqTouserReSendOtp.fulfilled, (state, action) => {
            state.loader = false;
            state.reqTouserReSendOtp = action.payload;
        });
        builder.addCase(reqTouserReSendOtp.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqTouserChangePass
        builder.addCase(reqTouserChangePass.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqTouserChangePass.fulfilled, (state, action) => {
            state.loader = false;
            state.reqTouserChangePass = action.payload;
        });
        builder.addCase(reqTouserChangePass.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });
    }
})

export default userAuthSlice.reducer;