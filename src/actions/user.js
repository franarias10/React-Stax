
//con esta funcion deberiamos traer toda la data del user logeado en la app
function fetchUserData(){
  return {
    type: 'fetch_user_data',
    userInfo: {
      id: 1,
      name: 'Francisco Arias',
      inbox: 38
    }
  };
}


export default {
  fetchUserData
}
