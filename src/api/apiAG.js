import axios from 'axios';
import config from '../ag-dispatcher';

let agInstanceAxios = axios.create({
  baseURL: config.agApiBaseUrl,
  //baseURL: "http://212.77.128.19:17201/ServiceJSON/",
  //withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

export let updAgTokenInstanceAxios = (newAgToken) => {
  if (newAgToken) agInstanceAxios.defaults.headers.common['AG-TOKEN'] = newAgToken;
}


class Login {
  getAgToken = async (userName, password) => {
    const formData = new FormData();
    formData.append('UserName', userName);
    formData.append("Password", password);

    const response = await agInstanceAxios.post("Login/", formData);
    if (response.status === 200) {
      agInstanceAxios.defaults.headers.common['AG-TOKEN'] = response.data;
    }
    return response;
  }
}

class Schemas {
  getAgSchemas = async () => {
    try {
      const response = await agInstanceAxios.get("EnumSchemas");
      return response;
    }
    catch (error) {
      console.error("ОШИБКА!!!!-" + error);
    }

  }


  getAgDevices = async (shemaId) => {
    try {
      const response = await agInstanceAxios.get("EnumDevices", { params: { "schemaID": shemaId } });
      return response;
    }
    catch (error) {
      console.error("ОШИБКА!!!!-" + error);
    }

  }

  getAgTrips = async (schemaId, guids, SD, ED, tripParams) => {
    try {
      const response = await agInstanceAxios.get("GetTrips", { params: { "schemaID": schemaId, "IDs": guids, "SD": SD, "ED": ED, "tripSplitterIndex": -1, "tripParams": tripParams, "tripTotalParams": tripParams } });
      return response;
    }
    catch (error) {
      console.error("ОШИБКА!!!!-" + error);
    }
  }

  getAgStage = async (schemaId, guids, SD, ED, stageName, tripParams, tripTotalParams) => {
    try {
      const response = await agInstanceAxios.get("GetStage", { params: { "schemaID": schemaId, "IDs": guids, "SD": SD, "ED": ED, "stageName": stageName, "tripParams": tripParams, "tripTotalParams": tripTotalParams } });
      return response;
    }
    catch (error) {
      console.error("ОШИБКА!!!!-" + error);
    }
  }

}

export const loginAgApi = new Login();
export const schemaAgApi = new Schemas();


