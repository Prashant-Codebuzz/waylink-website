import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Axios, userHeaders } from "../../../helper/axios";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";

// reqToTopReview
export const reqToTopReview = createAsyncThunk("reqToTopReview", async () => {
    try {
        const response = await Axios.get(apiendpoints.getAgentTopReview, userHeaders("application/json"));

        if (response?.data?.status) {
            // toast.success(response?.data?.message);
            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        if (error?.message === "Network Error") {
            toast.error(error?.message);
        }
        else if (!error?.response?.data?.status) {
            toast.error(error?.response?.data?.message);
        }
    }
})