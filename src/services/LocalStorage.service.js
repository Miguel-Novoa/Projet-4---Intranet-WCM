export const setTokenLocalStorage = (token) =>{
    localStorage.setItem('token', token);
};

export const removeTokenLocalStorage = (token) =>{
    localStorage.removeItem('token');
};