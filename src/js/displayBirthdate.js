
export const displayBirthdate = (birthdate) =>{
    let newBirthdate = birthdate.substr(8,10) + '/' + birthdate.substr(5,2) + '/' + birthdate.substr(0,4)
    return newBirthdate;
}