import axios from 'axios';

const axiosInstancelecturer = axios.create({
  baseURL:  'https://kpjtiklecturer-001.et.r.appspot.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export function setBasicAuthLecturer() {
    axiosInstancelecturer.defaults.headers.common['Authorization'] = `Basic a290YWtwZW5nYWR1YW4uanRpa0BnbWFpbC5jb206ZTUwNzQxNmE1YjY0ODk2OTRlNjM3MjAwYjE3MTA3Y2M4MGZkYWYxNjFlM2UzNWExNDJiNTEwNGIzMmI4Y2I2ZA==`
}

export function setBearerTokenLecturer(token) {
    axiosInstancelecturer.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default axiosInstancelecturer;
