import axios from 'axios';

export async function PutDatas(url, token, datas) {

    let config = {headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type' : 'application/json'
    }}

    let newUserInfos = {
        "gender": datas.gender,
        "firstname": datas.firstname,
        "lastname": datas.lastname,
        "email": datas.email,
        "password": datas.password, 
        "phone": datas.phone,
        "birthdate": datas.birthdate,
        "city": datas.city,
        "country": datas.country,
        "photo": datas.photo,
        "service": datas.service     
    }

    return await axios.put(url, newUserInfos, config)
    .then((response) =>{
        return response})
}
