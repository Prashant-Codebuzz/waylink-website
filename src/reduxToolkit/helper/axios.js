import axios from "axios";
// import { API_URL } from "../../config";

export const authHeaders = () => {
    const token = localStorage.getItem("otp-verify-token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }
}


export const authImageHeaders = () => {
    const token = localStorage.getItem("otp-verify-token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    }
}


export const authURLHeaders = () => {
    const token = localStorage.getItem("user-token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
}

export const userHeaders = () => {
    const token = localStorage.getItem("user-token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }
}

export const Axios = axios.create({
    baseURL: import.meta.env.VITE_APP_WEB_API,
});