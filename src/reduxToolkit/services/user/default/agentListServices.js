import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { authURLHeaders, Axios } from "../../../helper/axios";
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