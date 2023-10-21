import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL, // REACT_APP_BASE_URL =   "http://43.201.30.126:8080/api"
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response.headers['authorization']) {
			let accessToken = response.headers['authorization'];

			if (accessToken.startsWith('Bearer ')) {
				accessToken = accessToken.slice(7);
			}

			localStorage.setItem('accessToken', accessToken);
		}
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('accessToken');

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosClient;
