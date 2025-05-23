import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { authURLHeaders, Axios, userHeaders } from "../../../helper/axios";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";


// reqToGetAllAgent
export const reqToGetAllAgent = createAsyncThunk("reqToGetAllAgent", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.getAllAgentList, data, authURLHeaders());

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

// reqToGetAgentDetail
export const reqToGetAgentDetail = createAsyncThunk("reqToGetAgentDetail", async (id) => {
    try {
        const response = await Axios.get(apiendpoints.getAgentDetail.replace(":id", id), userHeaders("application/json"));

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

// reqToTopAgent
export const reqToTopAgent = createAsyncThunk("reqToTopAgent", async () => {
    try {
        const response = await Axios.get(apiendpoints.getTopAgentList, userHeaders("application/json"));

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

// reqToTopReview
export const reqToTopReview = createAsyncThunk("reqToTopReview", async () => {
    try {
        const response = await Axios.get(apiendpoints.getTopReview, userHeaders("application/json"));

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

// reqToAgentReview
export const reqToAgentReview = createAsyncThunk("reqToAgentReview", async (id) => {
    try {
        const response = await Axios.get(apiendpoints.getAgentReview.replace(":id", id), userHeaders("application/json"));

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
