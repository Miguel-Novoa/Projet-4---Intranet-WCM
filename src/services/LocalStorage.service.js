export const setTokenLocalStorage = (token, id) =>{
    localStorage.setItem('token', token);
    localStorage.setItem('id', id)
};

export const removeTokenLocalStorage = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('id')
};