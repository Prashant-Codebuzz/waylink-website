import { createSlice } from "@reduxjs/toolkit"
import { reqToGetMyReviews, reqToUserEditProfile, reqToUserGetProfile } from "../../../services/user/account/accountServices";


const initialState = {
    loader: false,
    data: [],
    myReviews: [],
    error: ""
}


const userAccount = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToUserGetProfile
        builder.addCase(reqToUserGetProfile.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToUserGetProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data || [];
        })
        builder.addCase(reqToUserGetProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })


        // reqToUserEditProfile
        builder.addCase(reqToUserEditProfile.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToUserEditProfile.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToUserEditProfile.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })


        // reqToGetMyReviews
        builder.addCase(reqToGetMyReviews.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToGetMyReviews.fulfilled, (state, action) => {
            state.loader = false;
            state.myReviews = action.payload?.data?.data || [];
        })
        builder.addCase(reqToGetMyReviews.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })
    }
})

export default userAccount.reducer