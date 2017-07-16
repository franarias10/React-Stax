import axios from 'axios';

//root url of App API
const ROOT_URL = 'http://www.softax.cl/api';


//con esta funcion deberiamos traer toda la data del user logeado en la app
function fetchUserData(){

  const request = axios.get(`${ROOT_URL}/users/read.php`);

  return {
    type: 'fetch_user_data',
    payload: request
  };
}

function fetchUserDataSucces(infoUser){
  return {
    type: 'fetch_user_data_succes',
    payload: infoUser
  };
}

function fetchUserDataError(){
  return{
    type: 'fetch_user_data_error',
    payload: 'An error ocurred when load the App data, please try again'
  }
}


export default {
  fetchUserData,
  fetchUserDataSucces,
  fetchUserDataError
}
