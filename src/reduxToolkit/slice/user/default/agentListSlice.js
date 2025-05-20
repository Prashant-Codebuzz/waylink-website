import { createSlice } from "@reduxjs/toolkit"
import { reqToGetAllAgent } from "../../../services/user/default/agentListServices";

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

    }
})

export default allAgent.reducer