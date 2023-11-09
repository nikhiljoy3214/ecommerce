import { BASE_URL } from "./baseUrl";
import { commonRequest } from "./commonRequest";


export const userLoginAPi=async(body)=>{
    return await commonRequest('POST',`${BASE_URL}/users`,body)
}

// Get all videos -get -url

export const getAllProducts=async()=>{
    return await commonRequest("GET",`${BASE_URL}/products`,"")
}

export const singleProductApi=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/products/${id}`,{})
}