
export const displayBirthdate = (birthdate) =>{
    let day = '';
    let month = birthdate.substr(5,2);
    let year = birthdate.substr(0,4);
    if(birthdate.substr(8,10).length === 1){
         day = '0' + birthdate.substr(8,10);
    }else{
         day = birthdate.substr(8,10);
    }
    
    let newBirthdate = day + '/' + month + '/' + year;
    return newBirthdate;
}