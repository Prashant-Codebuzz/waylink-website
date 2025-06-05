import { createAsyncThunk } from "@reduxjs/toolkit";
import { authURLHeaders, Axios, userHeaders } from "../../../helper/axios";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";
import toast from "react-hot-toast";


// reqToUserGetProfile
export const reqToUserGetProfile = createAsyncThunk("reqToUserGetProfile", async () => {
    try {
        const response = await Axios.get(apiendpoints.userGetProfile, userHeaders("application/json"));

        if (response?.data?.status) {
            // toast.success(response?.data?.message);
            return response;
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



// reqToUserEditProfile
export const reqToUserEditProfile = createAsyncThunk("reqToUserEditProfile", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userEditProfile, data, userHeaders("multipart/form-data"));

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


// reqToGetMyReviews
export const reqToGetMyReviews = createAsyncThunk("reqToGetMyReviews", async (data) => {
    try {
        const response = await Axios.get(`${apiendpoints.getMyReview}?page=${data?.page}&limit=${data?.limit}`, userHeaders("application/json"));

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

