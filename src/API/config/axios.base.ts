import axios from 'axios';

const axiosBase = axios.create({
	headers: {
		'Content-type': 'application/json',
	},
	timeout: 1000 * 10
});

export default axiosBase;
