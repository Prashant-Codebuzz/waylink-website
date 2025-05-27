import { createAsyncThunk } from "@reduxjs/toolkit";
import { authURLHeaders, Axios, userHeaders } from "../../../helper/axios";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";
import toast from "react-hot-toast";

// reqToGetMyAgentReviews
export const reqToGetMyAgentReviews = createAsyncThunk("reqToGetMyAgentReviews", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.getMyAgentReview, data, authURLHeaders());

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

// reqToAgentEditProfile
export const reqToAgentEditProfile = createAsyncThunk("reqToAgentEditProfile", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentEditProfile, data, userHeaders("multipart/form-data"));

        if (response?.data?.status) {
            toast.success(response?.data?.message);
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