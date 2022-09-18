import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatas } from '../services/GetDatas.service';

import '../App.css';
import '../css/Navbar.css';
import '../css/Form.css';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import CheckToken from '../components/CheckToken';

function Profile() {
    let token = localStorage.getItem('token');
    let [currentUserDatas, setCurrentUserDatas] = useState();
    let params = useParams();
    let userId = JSON.parse(params.id);

    useEffect(() => {
        let currentUserUrl = `http://localhost:7000/api/collaborateurs/${userId}`;

        getDatas(currentUserUrl, token).then((res) => {
            setCurrentUserDatas(res.data);
        });
    }, []);

    return (
        <div className="Profile">
            <CheckToken />
            <Navbar />
            {currentUserDatas && (
                <Form
                    lastname={currentUserDatas.lastname}
                    firstname={currentUserDatas.firstname}
                    mail={currentUserDatas.email}
                    phone={currentUserDatas.phone}
                    city={currentUserDatas.city}
                    country={currentUserDatas.country}
                    date={currentUserDatas.birthdate}
                    gender={currentUserDatas.gender}
                    service={currentUserDatas.service}
                    photo={currentUserDatas.photo}
                    userId={currentUserDatas.id}
                />
            )}
        </div>
    );
}

export default Profile;
