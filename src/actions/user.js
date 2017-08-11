import axios from 'axios';//libreria para hacer consultas asincronas

//root url of App API
const ROOT_URL = 'http://www.softax.cl/api';


//*************Traer data de user***********************************************
//con esta funcion deberiamos traer toda la data del user logeado en la app
function fetchUserData(){

  const request = axios.get(`${ROOT_URL}/users/read_userInfo.php`);

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
    payload: 'No se pudo iniciar la App, vuelva a cargarla. Si persiste el problema favor enviar un mail a soporte@softax.cl'
  }
}
//*************FIN Traer data de user***********************************************

//**************Traer licencias user**************************************************

function fetchLicenciasUser(){
  const request = axios.get(`${ROOT_URL}/licencias/read_licencias.php`);

  return{
    type:'fetch_licencias_user',
    payload:request
  };
}


function fetchLicenciasUserSucces(licencias){
  return {
    type: 'fetch_licencias_user_succes',
    payload: licencias
  };
}

function fetchLicenciasError(){
  return{
    type: 'fetch_licencias_user_error',
    payload: 'Estimado usuario no se pudo cargar los módulos adquiridos, favor recargar página. Si persiste el problema favor enviar un mail a soporte@softax.cl'
  }
}

//**************

//*************Traer contribuyentes***********************************************

function fetchContribuyentes(){

  const request = axios.get(`${ROOT_URL}/users/read_contribuyentes.php`);

  return {
    type: 'fetch_contribuyentes',
    payload: request
  };
}

function fetchContribuyentesSucces(contribuyentes){
  return {
    type: 'fetch_contribuyentes_succes',
    payload: contribuyentes
  };
}


function fetchContribuyentesError(){
  return{
    type: 'fetch_contribuyentes_error',
    payload: 'No Hemos podido cargar los contribuyentes.'
     +'Intente recargar la página, si persiste el problema contactese con nosotros soporte@softax.cl'
  }
}
//*************FIN Traer data de contribuyentes***********************************************

//*******************edit contribuyente*************************************
function editContribuyente(value,idContribuyente){
  //const request = axios.get(`${ROOT_URL}/users/read_userInfo.php`);

   return{
     type:'edit_contribuyente',
     payload: {
       infoEdited: value,
       idContribuyente: idContribuyente
     }
   }
}


//*****************************************************************************

export default {
  fetchUserData,
  fetchUserDataSucces,
  fetchUserDataError,
  fetchContribuyentes,
  fetchContribuyentesError,
  fetchContribuyentesSucces,
  fetchLicenciasUser,
  fetchLicenciasUserSucces,
  fetchLicenciasError,
  editContribuyente
}
