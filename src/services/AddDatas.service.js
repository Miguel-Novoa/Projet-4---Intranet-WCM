import axios from 'axios';

export async function AddDatas(url, token, datas) {

    let config = {headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type' : 'application/json'
    }}

    return await axios.put(url, datas, config)
    .then((response) =>{
        console.log(response)
        return response})
}