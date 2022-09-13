
export const calculateAge = (birthdate) =>{
    let birth = birthdate.substr(0,5)
    let age = 2022 - parseFloat(birth)
    return age
}