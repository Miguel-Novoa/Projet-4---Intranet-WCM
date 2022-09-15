import React from "react";
import { useState } from "react";

import '../App.css';
import '../css/Navbar.css'
import '../css/Form.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

function Form(props) {

    const [genre, setGenre] = useState('Homme');
    const [cat, setCat] = useState('Client');
    const [selectedDay, setSelectedDay] = useState(null);


    //Controles de l'input "mot de passe"
    const [passwordValues, setPasswordValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChangePassword = (prop) => (event) => {
        setPasswordValues({ ...passwordValues, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPasswordValues({
            ...passwordValues,
            showPassword: !passwordValues.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //Controles de l'input "confirmer le mot de passe"
    const [confirmPasswordValues, setConfirmPasswordValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChangeConfirmPassword = (prop) => (event) => {
        setConfirmPasswordValues({ ...confirmPasswordValues, [prop]: event.target.value });
    };

    const handleClickShowConfirmPassword = () => {
        setConfirmPasswordValues({
            ...confirmPasswordValues,
            showPassword: !confirmPasswordValues.showPassword,
        });
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };


    //Fonctions permettant de gérer les changements de state pour les input "civilité" et "catégorie"
    const handleChangeGenre = (event) => {
        setGenre(event.target.value);
    };

    const handleChangeCat = (event) => {
        setCat(event.target.value);
    };

    return (
        <div className="Form">
            <TextField className="formInput" id="nom" label={props.lastname} value={props.lastname}/>
            <TextField className="formInput" id="prenom" label={props.firstname} value={props.firstname}/>
            <FormControl className="formInput">
                <InputLabel id="civilite">Civilité</InputLabel>
                <Select
                    labelId="civilite"
                    id="civilite"
                    value={genre}
                    label="Civilité"
                    onChange={handleChangeGenre}
                >
                    <MenuItem value={"Homme"}>Homme</MenuItem>
                    <MenuItem value={"Femme"}>Femme</MenuItem>
                </Select>
            </FormControl>

            <FormControl className="formInput">
                <InputLabel id="category">Catégorie</InputLabel>
                <Select
                    labelId="category"
                    id="cat"
                    value={cat}
                    label="Catégorie"
                    onChange={handleChangeCat}
                >
                    <MenuItem value={"Client"}>Client</MenuItem>
                    <MenuItem value={"Technique"}>Technique</MenuItem>
                </Select>
            </FormControl>

            <input id="mail" className="formInput" type="email" label={props.mail} value={props.mail} pattern=".+@example\.com" size="30" required />

            <FormControl className="formInput" sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    type={passwordValues.showPassword ? 'text' : 'password'}
                    value={passwordValues.password}
                    onChange={handleChangePassword('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {passwordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <FormControl className="formInput" sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <OutlinedInput
                    id="confirmPassword"
                    type={confirmPasswordValues.showPassword ? 'text' : 'password'}
                    value={confirmPasswordValues.password}
                    onChange={handleChangeConfirmPassword('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownConfirmPassword}
                                edge="end"
                            >
                                {confirmPasswordValues.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <TextField className="formInput" id="phone" label={props.phone} value={props.phone} />
            <TextField className="formInput" id="city" label={props.city} value={props.city} />
            <TextField className="formInput" id="country" label={props.country} value={props.country} />
        </div>
    )
}

export default Form;