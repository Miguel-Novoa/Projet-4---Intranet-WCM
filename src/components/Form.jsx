import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PutDatas } from "../services/PutDatas.service";
import { AddDatas } from "../services/AddDatas.service";
import { useLocation, useNavigate } from "react-router-dom"



import '../App.css';
import '../css/Navbar.css'
import '../css/Form.css'



function Form(props) {
    const { register, getValues, handleSubmit, watch, formState: { errors } } = useForm();
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    let [userDatas, setUserDatas] = useState();
    let navigate = useNavigate();

    const currentLocation = useLocation();
    console.log(currentLocation.pathname)

    const onSubmit = data => {
        let urlPut = `http://localhost:7000/api/collaborateurs/${props.userId}`;
        let urlAdd = `http://localhost:7000/api/collaborateurs/`
        console.log(data.mail)
        if(currentLocation.pathname === `/Profile/${props.userId}`){
            PutDatas(urlPut, token, data.gender, data.firstname, data.lastname, data.email, 'password', data.phone, 
            data.birthdate, data.city, data.country, data.photo, data.service).then(res =>{
                navigate('/List')
            })
        }else if(currentLocation.pathname === '/Add'){
            AddDatas(urlAdd, token, data.gender, data.firstname, data.lastname, data.email, 'password', data.phone, 
            data.birthdate, data.city, data.country, data.photo, data.service).then(res =>{
                navigate('/List')
            })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" method="post">
            <input placeholder="Nom" className='formInput' id="nom" defaultValue={props.lastname} {...register('lastname')} />
            <input placeholder="Prénom" className='formInput' id="prenom" defaultValue={props.firstname} {...register('firstname')} />

            <select defaultValue={props.gender} {...register('gender')} name="gender" id="civilite" className="formInput">
                <option value="male">Homme</option>
                <option value="female">Femme</option>
            </select>

            <select defaultValue={props.service} {...register('service')} name="service" id="service" className="formInput">
                <option value="Client">Client</option>
                <option value="Technique">Technique</option>
                <option value="Marketing">Marketing</option>
            </select>

            <input placeholder="E-mail" id="mail" className="formInput" {...register('email')} label={props.mail} defaultValue={props.mail} />
            <input type="password" name="password" id='password' {...register('password')}/>
            <input type="password" name="confirmPassword" id='confirmPassword' {...register('confirmPassword',{
                validate : value => value === getValues('password')
            })}/>
            <input placeholder="Téléphone" type='tel' className='formInput' id="phone" defaultValue={props.phone} {...register('phone')} />
            <input type="date" className='formInput' id='date' defaultValue={props.date} {...register('birthdate')} />
            <input placeholder="Ville" className='formInput' id="city" defaultValue={props.city} {...register('city')} />
            <input placeholder="Pays" className='formInput' id="country" defaultValue={props.country} {...register('country')} />
            <input placeholder="Url de la photo" type="url" name="photo" id="photo" className="formInput" defaultValue={props.photo} {...register('photo')}/>
            <button type="submit">Enregistrer</button>
        </form>
    )
}

/*<input type="password" name="password" id='password' {...register('password')}/>
            <input type="password" name="confirmPassword" id='confirmPassword' {...register({
                validate : value => value === getValues('password')
            })}/>*/

export default Form;