import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://simple-wms.herokuapp.com/api/v1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default instance;