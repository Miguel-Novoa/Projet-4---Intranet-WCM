export const setTokenLocalStorage = (token, id) =>{
    localStorage.setItem('token', token);
    localStorage.setItem('id', id)
};

export const removeTokenLocalStorage = (token) =>{
    localStorage.removeItem('token');
    localStorage.removeItem('id')
};