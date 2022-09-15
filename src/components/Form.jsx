import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PutDatas } from "../services/PutDatas.service";

import '../App.css';
import '../css/Navbar.css'
import '../css/Form.css'


function Form(props) {
    const { register, getValues, handleSubmit, watch, formState: { errors } } = useForm();
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id')
    let [userDatas, setUserDatas] = useState()


    const onSubmit = data => {
        let url = `http://localhost:7000/api/collaborateurs/${id}`
        PutDatas(url, token,id, data.gender, data.firstname, data.lastname, data.email, 'password', data.phone, 
        data.birthdate, data.city, data.country, data.photo, data.service)
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" method="post">
            <input className='formInput' id="nom" defaultValue={props.lastname} {...register('lastname')} />
            <input className='formInput' id="prenom" defaultValue={props.firstname} {...register('firstname')} />

            <select defaultValue={props.gender} {...register('gender')} name="civilite" id="civilite" className="formInput">
                <option value="male">Homme</option>
                <option value="female">Femme</option>
            </select>

            <select defaultValue={props.service} {...register('service')} name="service" id="service" className="formInput">
                <option value="Client">Client</option>
                <option value="Technique">Technique</option>
                <option value="Marketing">Marketing</option>
            </select>

            <input id="mail" className="formInput" type="email" {...register('email')} label={props.mail} defaultValue={props.mail}  size="30" required />

            <input type='tel' className='formInput' id="phone" defaultValue={props.phone} {...register('phone')} />
            <input type="date" className='formInput' id='date' defaultValue={props.date} {...register('birthdate')} />
            <input className='formInput' id="city" defaultValue={props.city} {...register('city')} />
            <input className='formInput' id="country" defaultValue={props.country} {...register('country')} />
            <input type="url" name="photo" id="photo" className="formInput" defaultValue={props.photo} {...register('photo')}/>
            <button type="submit">Enregistrer</button>
        </form>
    )
}

/*<input type="password" name="password" id='password' {...register('password')}/>
            <input type="password" name="confirmPassword" id='confirmPassword' {...register({
                validate : value => value === getValues('password')
            })}/>*/

export default Form;