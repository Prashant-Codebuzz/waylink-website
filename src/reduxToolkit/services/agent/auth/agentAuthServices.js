import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { authHeaders, authImageHeaders, Axios } from "../../../helper/axios";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";


// reqToRegisterAgent
export const reqToRegisterAgent = createAsyncThunk("reqToRegisterAgent", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentRegister, data);

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

// reqToAgentOtpVerification
export const reqToAgentOtpVerification = createAsyncThunk("reqToAgentOtpVerification", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentOtpVerification, data)

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

// reqToCreateAgentProfile
export const reqToCreateAgentProfile = createAsyncThunk("reqToCreateAgentProfile", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentCreateProfile, data, authHeaders())

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

//reqToAgentSignIn 
export const reqToAgentSignIn = createAsyncThunk("reqToAgentSignIn", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentSignIn, data)

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

//reqToAgentForgetPass
export const reqToAgentForgetPass = createAsyncThunk("reqToAgentForgetPass", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentForgetPass, data)

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

//reqToAgentReSendOtp
export const reqToAgentReSendOtp = createAsyncThunk("reqToAgentReSendOtp", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentReSendOtp, data)

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

//reqToAgentChangePass
export const reqToAgentChangePass = createAsyncThunk("reqToAgentChangePass", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentChangePass, data)

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

//reqToAgentWorkProfile
export const reqToAgentWorkProfile = createAsyncThunk("reqToAgentWorkProfile", async (data) => {
    try {
        const response = await Axios.post(apiendpoints.agentWorkProfile, data, authImageHeaders())

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