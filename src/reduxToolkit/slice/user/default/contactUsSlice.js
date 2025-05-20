import { createSlice } from "@reduxjs/toolkit"
import { reqToContactUs } from "../../../services/user/default/contactUsServices";

const initialState = {
    loader: false,
    data: [],
    error: ""
}

const contactUs = createSlice({
    name: "contactUs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqToContactUs
        builder.addCase(reqToContactUs.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(reqToContactUs.fulfilled, (state, action) => {
            state.loader = false;
            // state.wishlist = action.payload;
        })
        builder.addCase(reqToContactUs.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message
        })

    }
})

export default contactUs.reducer