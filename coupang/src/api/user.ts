import axiosClient from './index';

const BASE_URL = 'http://43.201.30.126:8080/api';

const userAPI = {
	login: async (email: string, password: string) => {
		const response = await axiosClient.post(`${BASE_URL}/user/login`, {
			email: email,
			password: password,
		});
		return response;
	},

	logout: async () => {
		const response = await axiosClient.get(`${BASE_URL}/user/logout`);
		return response;
	},

	signup: async (userData: {
		name: string;
		email: string;
		password: string;
		gender: string;
		postcode: string;
		address: string;
		detailedAddress: string;
		phone: string;
		certificationNumber: string;
	}) => {
		try {
			const response = await axiosClient.post(
				`${BASE_URL}/user/signup`,
				userData
			);
			const data = response.data;
			return data;
		} catch (error: any) {
			if (error instanceof Error) {
				console.error('API 호출 오류:', error.message);
			} else {
				console.error('API 호출 오류:', error);
			}
			throw new Error('서버에 연결할 수 없습니다.');
		}
	},
};

export default userAPI;
