const baseUrl = process.env.NODE_ENV ?
    'http://dev.jasongallagher.org/api' :
    'http://localhost:3000/api';
export const __API_URL__ = baseUrl;