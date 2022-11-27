import axios from "axios";


const instacne = axios.create(
    {
        baseURL : "http://localhost:8080"
    }
)
export default instacne