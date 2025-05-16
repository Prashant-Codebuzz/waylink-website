import axios from "axios";
import { API_URL } from "../../config";

export const authHeaders = () => {
    const token = localStorage.getItem("accessToken")
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const Axios = axios.create({
    baseURL: API_URL,
})

export default Axios;