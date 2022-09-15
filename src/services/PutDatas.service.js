import axios from 'axios';

export async function PutDatas(url, token, id, genre, firstname, lastname, mail, password, phone, birthdate, city,
    country, photo, service) {

    let config = {headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type' : 'application/json'
    }}

    let newUserInfos = {
        "gender": genre,
        "firstname": firstname,
        "lastname": lastname,
        "email": mail,
        "password": password, // Facultatif : Uniquement si le mot de passe doit être changé
        "phone": phone,
        "birthdate": birthdate,
        "city": city,
        "country": country,
        "photo": photo,
        "service": service     
    }

    return await axios.put(url, newUserInfos, config)
    .then((response) =>{
        console.log(response)
        return response})
}