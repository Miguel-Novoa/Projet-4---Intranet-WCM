import axios from 'axios';
import { setTokenLocalStorage } from './LocalStorage.service';

export async function login(email, password){
    return await axios.post('http://localhost:7000/api/login', {
        "email": email,
        "password": password
      })
      .then(function (response) {
        setTokenLocalStorage(response.data.token, response.data.user.id, response.data.user.isAdmin);
      })
      .catch(function (error) {
        console.log(error);
      });
}