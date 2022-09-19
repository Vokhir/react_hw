import axios from "axios";

let axiosInstance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/users',
        headers: {'Content-Type': 'application/json'}
    }
);

const getUsers = () => {
    return axiosInstance()
};

const getUser = (id) => {
    return axiosInstance('/' + id)
};

export {getUser, getUsers};