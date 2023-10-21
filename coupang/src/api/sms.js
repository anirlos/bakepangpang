// import axios from 'axios';

// export const sendSms = async (phone) => {
// 	try {
// 		const response = await axios.post(
// 			'http://43.201.30.126:8080/api/sms-certification/sends',
// 			{
// 				phone: phone,
// 			}
// 		);
// 		return response.data;
// 	} catch (error) {
// 		throw error;
// 	}
// };

// export const verifySms = async (phone, verificationCode) => {
// 	try {
// 		const response = await axios.post(
// 			'http://43.201.30.126:8080/api/sms-certification/confirms',
// 			{
// 				phone: phone,
// 				certificationNumber: verificationCode,
// 			}
// 		);
// 		return response.data;
// 	} catch (error) {
// 		throw error;
// 	}
// };
