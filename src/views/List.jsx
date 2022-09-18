import React from 'react';
import { useForm } from 'react-hook-form';

import '../App.css';
import '../css/Navbar.css';
import '../css/List.css';
import Navbar from '../components/Navbar';
import Cards from '../components/Card';
import { getDatas } from '../services/GetDatas.service';
import { useState, useEffect } from 'react';
import { displayBirthdate } from '../js/displayBirthdate';
import { calculateAge } from '../js/calculateAge';

function List() {
    let allPeopleUrl = 'http://localhost:7000/api/collaborateurs ';
    let token = localStorage.getItem('token');
    let [peopleDatas, setPeopleDatas] = useState([]);
    let [filtred, setFiltred] = useState([]);

    const { register, handleSubmit } = useForm({
        mode: 'onChange',
    });

    useEffect(() => {
        getDatas(allPeopleUrl, token).then((res) => {
            setPeopleDatas(res.data);
            setFiltred(res.data);
        });
    }, []);

    const searchFilter = data => {
        if (data.nameAndCity === 'name' && data.service === 'Marketing') {
            const filtredPeople = filtred.filter((person) => {
                let name = person.firstname + person.lastname;
                return name.toLowerCase().includes(data.search) && person.service === 'Marketing';
            });
            setPeopleDatas(filtredPeople);
            console.log(data.search)
        }
        if (data.nameAndCity === 'city' && data.service === 'Marketing') {
            const filtredPeople = filtred.filter((person) => {
                return person.city.toLowerCase().includes(data.search) && person.service === 'Marketing';
            });
            setPeopleDatas(filtredPeople);
        }
        if (data.nameAndCity === 'name' && data.service === 'Technique') {
            const filtredPeople = filtred.filter((person) => {
                let name = person.firstname + person.lastname;
                return name.toLowerCase().includes(data.search) && person.service === 'Technique';
            });
            setPeopleDatas(filtredPeople);
        }
        if (data.nameAndCity === 'city' && data.service === 'Technique') {
            const filtredPeople = filtred.filter((person) => {
                return person.city.toLowerCase().includes(data.search) && person.service === 'Technique';
            });
            setPeopleDatas(filtredPeople);
        }
        if (data.nameAndCity === 'name' && data.service === 'Client') {
            const filtredPeople = filtred.filter((person) => {
                let name = person.firstname + person.lastname;
                return name.toLowerCase().includes(data.search) && person.service === 'Client';
            });
            setPeopleDatas(filtredPeople);
        }
        if (data.nameAndCity === 'city' && data.service === 'Client') {
            const filtredPeople = filtred.filter((person) => {
                return person.city.toLowerCase().includes(data.search) && person.service === 'Client';
            });
            setPeopleDatas(filtredPeople);
        }
        if (data.nameAndCity === 'name' && data.service === '') {
            const filtredPeople = filtred.filter((person) => {
                let name = person.firstname + person.lastname;
                return name.toLowerCase().includes(data.search);
            });
            setPeopleDatas(filtredPeople);
        }
        if (data.nameAndCity === 'city' && data.service === '') {
            const filtredPeople = filtred.filter((person) => {
                return person.city.toLowerCase().includes(data.search);
            });
            setPeopleDatas(filtredPeople);
        }
    };

    return (
        <div className="List">
            <Navbar />
            <form onChange={handleSubmit(searchFilter)} className="filter">
                <h2>Liste des collaborateurs :</h2>
                <input {...register('search')} placeholder="Rerchercher..." type="search" name="search" id="search" />
                <div className="selectDiv">
                    <div className="select">
                        <p>Rechercher par : </p>
                        <select {...register('nameAndCity')} name="nameAndCity" id="nameAndCity">
                            <option
                                value="name"
                            >
                                Nom
                            </option>
                            <option
                                value="city"
                            >
                                Ville
                            </option>
                        </select>
                    </div>
                    <div className="select">
                        <p>Catégorie :</p>
                        <select {...register('service')} name="service" id="service">
                            <option
                                value=""
                                selected
                            >
                                Choisissez une option
                            </option>
                            <option
                                value="Client"
                            >
                                Client
                            </option>
                            <option
                                value="Technique"
                            >
                                Technique
                            </option>
                            <option
                                value="Marketing"
                            >
                                Marketing
                            </option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="peopleList">
                {peopleDatas?.map((person) => {
                    return (
                        <Cards
                            key={person.id}
                            name={person.firstname + ' ' + person.lastname}
                            photo={person.photo}
                            mail={person.email}
                            location={person.city + ', ' + person.country}
                            phone={person.phone}
                            date={displayBirthdate(person.birthdate)}
                            age={calculateAge(person.birthdate)}
                            service={person.service}
                            id={person.id}
                            setUsersState={setPeopleDatas}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default List;
