
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://skill-sync-hub-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;