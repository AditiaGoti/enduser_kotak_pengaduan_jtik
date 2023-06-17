import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_KPJTIK_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export function setBasicAuth() {
  axiosInstance.defaults.headers.common['Authorization'] = `Basic a290YWtwZW5nYWR1YW4uanRpa0BnbWFpbC5jb206ZTUwNzQxNmE1YjY0ODk2OTRlNjM3MjAwYjE3MTA3Y2M4MGZkYWYxNjFlM2UzNWExNDJiNTEwNGIzMmI4Y2I2ZA==`
}
export function setChanceControl() {
  axiosInstance.defaults.headers.common['Cache-Control'] = `ignore-cache`
}

export function setBearerToken(token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default axiosInstance;