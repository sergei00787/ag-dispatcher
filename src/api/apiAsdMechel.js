import axios from 'axios';
import config from '../ag-dispatcher';
const qs = require('querystring');

let asdInstanceAxios = axios.create({
  baseURL: config.asdApiBaseUrl,
  //baseURL: "http://212.77.128.19:17201/ServiceJSON/",
  //withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

// export let updAgTokenInstanceAxios = (newToken) => {
//   if (newToken) asdInstanceAxios.defaults.headers.common['asdtoken'] = newToken;
// }


class Login {
  getAsdToken = async (username, password) => {
    // const formData = new FormData();
    // formData.append('UserName', username);
    // formData.append("Password", password);

    const requestBody = {
      username,
      password
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true
    }


    // const response = await asdInstanceAxios.post("/auth/login", formData);
    
    const response = await asdInstanceAxios.post("/auth/login", qs.stringify(requestBody), config);
    
    if (response.status === 200) {
      asdInstanceAxios.defaults.headers.common['asdtoken'] = response.data;
    }
    return response;
  }

  logOutAsd = async () => {
    const response = await asdInstanceAxios.get("/auth/logout");
    
    if (response.status === 200) {
      console.log(response);
    }
    return response;
  }

}

export const loginAsdApi = new Login();



