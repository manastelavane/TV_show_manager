import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('profile')).token
        }`;
    }
    return req;
});

export const fetchshows = () => API.get('/api/tvshow/me');
export const createshow = (newShow) => API.post('/api/tvshow', newShow);
export const updateshow = (updatedShow, id) =>
    API.put(`/api/tvshow/${id}`, updatedShow);
export const deleteshow = (id) => API.delete(`/api/tvshow/${id}`);

export const signIn = (formData) => API.post('/api/users/login', formData);
