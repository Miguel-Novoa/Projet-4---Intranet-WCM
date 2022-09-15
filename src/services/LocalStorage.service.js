export const setTokenLocalStorage = (token, id, admin) =>{
    localStorage.setItem('token', token);
    localStorage.setItem('id', id)
    localStorage.setItem('admin', admin)

};

export const removeTokenLocalStorage = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
};