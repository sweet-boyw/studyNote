import axios from 'axios'

const serve = axios.create({
    baseURL:"http://127.0.0.1:4523/m1/834847-0-default",
    timeout:5000
})

export default serve