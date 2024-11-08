import axios from "axios";
import { get } from "lodash";
import storage from "../storage";
import config from "../../config";
import {useAuthStore} from "../../store/useAuthStore";

const useApi = () => {
    const request = axios.create({
        baseURL: config.API_ROOT,
        params: {},
    });

    const refreshToken = useAuthStore((state) =>
        get(state, "refreshToken", null),
    );

    const setToken = useAuthStore((state) => get(state, "setToken", () => {}));

    const setRefreshToken = useAuthStore((state) =>
        get(state, "setRefreshToken", () => {}),
    );

    request.interceptors.request.use(
        (config) => {
            const token = get(JSON.parse(storage.get("auth")), "state.token", null);

            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            console.log(error);
        },
    );

    request.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                setToken(null);
                setRefreshToken(null);
            }
            return Promise.reject(error);
        },
    );
    return {
        request,
    };
};

export default useApi;