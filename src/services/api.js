import axios from 'axios';

const api = axios.create({
    baseURL: 'https://shipmnts-backend-three.vercel.app/', // Our base of project
    withCredentials: true,
});

//added file
export const uploadFile = (formData) => api.post('https://shipmnts-backend-three.vercel.app/upload', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Used Pagination for fetching data
export const getBooks = (page, limit) => api.get(`https://shipmnts-backend-three.vercel.app/books?page=${page}&limit=${limit}`);
