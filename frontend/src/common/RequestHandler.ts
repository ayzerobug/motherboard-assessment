import axios, { RawAxiosRequestHeaders } from "axios";

const baseUrl = process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:4000"
    : process.env.REACT_APP_API_URL;

const resolveHeader = (useAuthHeader: boolean): Partial<RawAxiosRequestHeaders> => {
    let tempHeaders: Partial<RawAxiosRequestHeaders> = { Accept: "application/json" }
    if (useAuthHeader) {
        const authToken = localStorage.getItem("authToken");
        tempHeaders.Authorization = `Bearer ${authToken}`;
    }
    return tempHeaders;
}


export const postRequest = async (endpoint: string, data: Object, useAuthHeader?: boolean) => {
    return axios
        .post(`${baseUrl}/${endpoint}`, data, { headers: resolveHeader(useAuthHeader ?? true) })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            throw new Error(err.response.data.message);
        });
};

export const getRequest = async (endpoint: string, useAuthHeader?: boolean) => {
    return axios
        .get(`${baseUrl}/${endpoint}`, { headers: resolveHeader(useAuthHeader ?? true) })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            throw Error(err.response.data.message);
        });
};
