import axios from "axios";

let axiosInstance = axios.create(
    {
        baseURL: 'https://api.spacexdata.com/v3/launches/',
        headers: {'Content-Type': 'application/json'}
    }
);

const getLaunches = () => {
    return axiosInstance()
};

const getUser = (id) => {
    return axiosInstance('/' + id)
};

export {getUser, getLaunches};