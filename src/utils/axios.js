import axios from "axios";


const instacne = axios.create(
    {
        baseURL : "http://localhost:4444"
    }
)
export default instacne