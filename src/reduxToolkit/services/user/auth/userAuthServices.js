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
        throw error;
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
        throw error
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
        throw error
    }
})

//reqToUserSignIn 
export const reqToUserSignIn = createAsyncThunk("reqToUserSignIn", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.userSignIn, data)

        if (response?.data?.status) {
            toast.success(response?.data?.message);

            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        throw error
    }
})

//reqToUseForgetPass
export const reqToUseForgetPass = createAsyncThunk("reqToUseForgetPass", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.useForgetPass, data)

        if (response?.data?.status) {
            toast.success(response?.data?.message);

            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        throw error
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
        throw error
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
        throw error
    }
})