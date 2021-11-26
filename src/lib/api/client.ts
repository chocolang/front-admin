import axios from 'axios';

export const client = axios.create();

const CHOCOLANG_URL = "https://www.chocolang.com";
const productType = CHOCOLANG_URL;

const showLog = false

export enum ContentType {
    none,
    multipartFormData = 'multipart/form-data',
    formUrlEncodede = 'application/x-www-form-urlencoded',
}

export const getProductUrl = () => {
    return productType;
}

export const getConfigure = (contentType: ContentType, params?: any): any => {
    var options: any = {
        headers: {},
    };

    if (contentType !== ContentType.none) {
        options.headers['Content-type'] = contentType;
    }

    var token = getToken()
    if (token) {
        options.headers['Authorization'] = 'bearer ' + token;
    }

    options.headers['Chocolang-Agent'] = 'web';

    if (params) {
        options.params = params
    }

    if (showLog) {
        console.log(options)
    }

    return options;
}

var token: string | null
export const setToken = (value: string | null) => {
    token = value;
}

export const getToken = () => {
    return token;
}

var deviceToken: string | null
export const setDeviceToken = (value: string | null) => {
    deviceToken = value;
}

export const getDeviceToken = () => {
    return deviceToken;
}

var registrationId: string | null
export const setRegistrationId = (value: string | null) => {
    registrationId = value;
}

export const getRegistrationId = () => {
    return registrationId;
}

export const getClient = (service: string) => {
    if (service === 'api') {
        client.defaults.baseURL = productType + "/api/";
    } else if (service === 'mobile') {
        client.defaults.baseURL = productType + "/mobile/";
    } else if (service === 'upload') {
        client.defaults.baseURL = productType + "/upload/";
    } else {
        client.defaults.baseURL = productType
    }

    return client;
}