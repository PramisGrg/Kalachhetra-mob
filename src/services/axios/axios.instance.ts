import axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

// export const authAxios = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
//   withCredentials: true,
// });
