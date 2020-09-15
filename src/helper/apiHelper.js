import axios from 'axios';

export const apiPostHelper = async (URL, PAYLOAD) => {
	try {

		let url = `https://gs-api-server.herokuapp.com/${URL}`;

		const responseData = await axios.post(url, PAYLOAD, {
			'Access-Control-Allow-Headers': '*',
			'Content-Type': 'application/json',
		});
		return responseData;
	} catch (e) {
		return {
			error: e,
		};
	}
};
