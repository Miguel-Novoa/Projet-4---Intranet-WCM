import axios from 'axios';

export async function Delete(url, token) {

    let config = {headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type' : 'application/json'
    }}

    return await axios.delete(url, config)
    .then((response) =>{
        console.log(response)
        return response})
}