import axios from 'axios';

export const loginUser = async (credentials: { email: string; password: string }) => {
  const res = await axios.post('http://127.0.0.1:8000/api/login', credentials);
  return res.data;
};
