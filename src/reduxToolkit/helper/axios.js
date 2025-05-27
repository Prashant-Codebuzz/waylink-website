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
    const role = localStorage.getItem("role")
    let token;
    if (role === "user") {
        token = localStorage.getItem("user-token");
    } else {
        token = localStorage.getItem("agent-token")
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
}

export const userHeaders = (type) => {
    const role = localStorage.getItem("role")
    let token;
    if (role === "user") {
        token = localStorage.getItem("user-token");
    } else {
        token = localStorage.getItem("agent-token")
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": type
        }
    }
}

export const Axios = axios.create({
    baseURL: import.meta.env.VITE_APP_WEB_API,
});