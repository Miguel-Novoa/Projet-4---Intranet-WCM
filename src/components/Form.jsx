import React from 'react';
import { useForm } from 'react-hook-form';
import { PutDatas } from '../services/PutDatas.service';
import { AddDatas } from '../services/AddDatas.service';
import { useLocation, useNavigate } from 'react-router-dom';

import '../App.css';
import '../css/Navbar.css';
import '../css/Form.css';

function Form(props) {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    let navigate = useNavigate();
    const currentLocation = useLocation();

    const onSubmit = (data) => {
        let urlPut = `http://localhost:7000/api/collaborateurs/${props.userId}`;
        let urlAdd = `http://localhost:7000/api/collaborateurs/`;
        if (currentLocation.pathname === `/Profile/${props.userId}`) {
            PutDatas(urlPut, token, data).then(
                (res) => {
                    navigate('/List');
                }
            );
        } else if (currentLocation.pathname === '/Add') {
            AddDatas(urlAdd, token, data).then(
                (res) => {
                    navigate('/List');
                }
            );
        }
    };

    const displayPageTitle = () => {
        if (currentLocation.pathname === `/Profile/${props.userId}` && props.userId !== id) {
            return `Modifier le profil de ${props.firstname}`;
        } else if (currentLocation.pathname === `/Profile/${props.userId}` && props.userId === id) {
            return 'Modifier votre profil';
        } else if (currentLocation.pathname === '/Add') {
            return 'Ajouter un collaborateur';
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" method="post">
            <h2>{displayPageTitle()}</h2>
            <div className="row">
                <label htmlFor="nom">Nom : </label>
                <input placeholder="Nom" className="formInput" id="nom" defaultValue={props.lastname} {...register('lastname')} />
            </div>
            <div className="row">
                <label htmlFor="prenom">Prénom : </label>
                <input placeholder="Prénom" className="formInput" id="prenom" defaultValue={props.firstname} {...register('firstname')} />
            </div>
            <div className="row">
                <label htmlFor="civilite">Civilité : </label>
                <select defaultValue={props.gender} {...register('gender')} name="gender" id="civilite" className="formInput">
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="service">Service : </label>
                <select defaultValue={props.service} {...register('service')} name="service" id="service" className="formInput">
                    <option value="Client">Client</option>
                    <option value="Technique">Technique</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="mail">E-mail : </label>
                <input placeholder="E-mail" id="mail" className="formInput" {...register('email')} label={props.mail} defaultValue={props.mail} />
            </div>
            <div className="row">
                <label htmlFor="password">Mot de passe : </label>
                <input placeholder="Mot de passe" className="formInput" type="password" name="password" id="password" {...register('password')} />
            </div>
            <div className="row">
                <label htmlFor="confirmPassword"> Confirmez votre mot de passe :</label>
                <input
                    placeholder="Mot de passe"
                    className="formInput"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                        validate: (value) => value === getValues('password'),
                    })}
                />
            </div>
            <div className="row">
                <label htmlFor="phone">Téléphone : </label>
                <input placeholder="Téléphone" type="tel" className="formInput" id="phone" defaultValue={props.phone} {...register('phone')} />
            </div>
            <div className="row">
                <label htmlFor="date">Date de naissance : </label>
                <input type="date" className="formInput" id="date" defaultValue={props.date} {...register('birthdate')} />
            </div>
            <div className="row">
                <label htmlFor="city">Ville : </label>
                <input placeholder="Ville" className="formInput" id="city" defaultValue={props.city} {...register('city')} />
            </div>
            <div className="row">
                <label htmlFor="country">Pays : </label>
                <input placeholder="Pays" className="formInput" id="country" defaultValue={props.country} {...register('country')} />
            </div>
            <div className="row">
                <label htmlFor="photo">Url de la photo : </label>
                <input placeholder="Url de la photo" type="url" name="photo" id="photo" className="formInput" defaultValue={props.photo} {...register('photo')} />
            </div>
            <button className="save" type="submit">
                Enregistrer
            </button>
        </form>
    );
}

export default Form;
