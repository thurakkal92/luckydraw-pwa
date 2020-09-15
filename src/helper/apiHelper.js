import axios from 'axios';
import { isEmpty } from 'utils/isEmpty';

export const apiPostHelper = async (URL, PAYLOAD, contentType, requestHeaders) => {
	try {
		let contentTypeText = 'application/json';
		if (contentType) {
			contentTypeText = contentType;
		}
		let headers = {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': contentTypeText,
		};
		if (!isEmpty(requestHeaders)) {
			headers = {
				...headers,
				...requestHeaders,
			};
		}
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
