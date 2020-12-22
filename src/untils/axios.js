import Axios from "axios";
import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:3001",
    responseType: "json"
})