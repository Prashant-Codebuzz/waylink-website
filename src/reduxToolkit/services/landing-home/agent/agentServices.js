import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/axios";
import toast from "react-hot-toast";
import { apiendpoints } from "../../../../constants/api-routes/apiroutes";


// reqToTopAgent
export const reqToTopAgent = createAsyncThunk("reqToTopAgent", async () => {
    try {
        const response = await Axios.get(apiendpoints.getTopAgentList);

        if (response?.data?.status) {
            // toast.success(response?.data?.message);
            return response
        } else {
            toast.error(response?.data?.message);
        }
    } catch (error) {
        throw error;
    }
})
