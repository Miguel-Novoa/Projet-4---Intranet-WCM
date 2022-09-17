import axios from 'axios';

export async function getDatas(url, token) {

    let config = {headers: {
        'Authorization': `Bearer ${token}`
      }}

    return await axios.get(url, config)
    .then((response) =>{
        return response})
}
