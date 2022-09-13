import axios from 'axios';
import { setTokenLocalStorage } from './LocalStorage.service';

export async function login(email, password){
    await axios.post('http://localhost:7000/api/login', {
        "email": email,
        "password": password
      })
      .then(function (response) {
        console.log(response.data.token);
        setTokenLocalStorage(response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
}