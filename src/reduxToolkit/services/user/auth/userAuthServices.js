import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios, authHeaders } from "../../../helper/axios";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";
import toast from "react-hot-toast";


// reqToRegisterUser
export const reqToRegisterUser = createAsyncThunk("reqToRegisterUser", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userRegister, data);

        console.log(response, '-=--==-=-');

        if (response?.data?.status) {
            toast.success(response?.data?.message);

            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        console.error(error);

        if (error?.message === "Network Error") {
            toast.error(error?.message);
        }
        else if (!error?.response?.data?.status) {
            toast.error(error?.response?.data?.message);
        }
    }
})

// reqToOtpVerification
export const reqToOtpVerification = createAsyncThunk("reqToOtpVerification", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userOtpVerification, data)

        if (response?.data?.status) {
            toast.success(response?.data?.message);

            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        console.error(error);

        if (error?.message === "Network Error") {
            toast.error(error?.message);
        }
        else if (!error?.response?.data?.status) {
            toast.error(error?.response?.data?.message);
        }
    }
})

// reqToCreateUserProfile
export const reqToCreateUserProfile = createAsyncThunk("reqToCreateUserProfile", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userCreateProfile, data, authHeaders())

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

//reqToUserSignIn 
export const reqToUserSignIn = createAsyncThunk("reqToUserSignIn", async (data, { rejectWithValue }) => {
    try {
        const response = await Axios.post(apiendpoints.userSignIn, data)
        console.log(response);

        if (response?.data?.status) {
            toast.success(response?.data?.message);

            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        console.log(error);

        if (error?.message === "Network Error") {
            toast.error(error?.message);

            return rejectWithValue(error.message);
        }
        else if (!error?.response?.data?.status) {
            toast.error(error?.response?.data?.message);

            return rejectWithValue(error?.response?.data?.message);
        }
    }
})

//reqToUseForgetPass
export const reqToUseForgetPass = createAsyncThunk("reqToUseForgetPass", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userForgetPass, data)

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

//reqTouserReSendOtp
export const reqTouserReSendOtp = createAsyncThunk("reqTouserReSendOtp", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userReSendOtp, data)

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

//reqTouserChangePass
export const reqTouserChangePass = createAsyncThunk("reqTouserChangePass", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userChangePass, data)

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