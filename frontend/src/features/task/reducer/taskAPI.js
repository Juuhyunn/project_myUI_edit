import axios from "axios";
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const remove = x => axios.delete(`${SERVER}/task/remove/${x}`)
const add = x => axios.post(`${SERVER}/task/add`,JSON.stringify(x),{headers})
const modify = x => axios.put(`${SERVER}/task/modify/${x}`)

export default {
    remove,
    add,
    modify
}