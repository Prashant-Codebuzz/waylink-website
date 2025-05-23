import { createSlice } from "@reduxjs/toolkit"
import { reqToGetMyReviews, reqToUserEditProfile } from "../../../services/user/account/accountServices";


const initialState = {
    loader: false,
    data: [],
    error: ""
}


const userAccount = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToGetMyReviews
        builder.addCase(reqToGetMyReviews.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToGetMyReviews.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload?.data?.data || [];
        })
        builder.addCase(reqToGetMyReviews.rejected, (state, action) => {
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
    }
})

export default userAccount.reducer